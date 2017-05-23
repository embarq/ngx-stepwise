import {
  AfterViewInit,
  AfterContentInit,
  ContentChildren,
  Directive,
  EventEmitter,
  Output,
  QueryList
} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/merge';

import { PageChange } from './stepwise-control.abstract';
import { StepwiseStepDirective } from './stepwise-step.directive';

@Directive({
  selector: '[stepwise-container]'
})
export class StepwiseDirective implements AfterViewInit, AfterContentInit {
  @ContentChildren(StepwiseStepDirective)
  public steps: QueryList<StepwiseStepDirective>;

  @Output('pageChange')
  public pageChange: EventEmitter<number>;

  constructor() {
    this.pageChange = new EventEmitter<number>(true);
  }

  private handlePageChange(pageChange: PageChange) {
    const steps = this.steps.toArray();
    const currentPage = steps.findIndex(stepInstance => stepInstance.isCurrent);
    const pageTransition = currentPage + pageChange;

    if (pageTransition >= 0 && pageTransition < steps.length) {
      steps[currentPage].isVisible = false;
      steps[pageTransition].isVisible = true;
      this.pageChange.emit(pageTransition);
    }
  }

  public ngAfterViewInit() {
    Observable.merge
      .apply(Observable, this.steps.map(stepDirective => stepDirective.pageChange))
      .subscribe(pageChange => this.handlePageChange(pageChange));
  }

  public ngAfterContentInit() {
    this.steps.first.isVisible = true;
  }

}
