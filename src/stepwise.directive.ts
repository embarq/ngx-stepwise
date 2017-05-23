import {
  AfterViewInit,
  AfterContentInit,
  ContentChildren,
  Directive,
  QueryList
} from '@angular/core';
import { Observable } from 'rxjs';

import { PageChange } from './stepwise-control.abstract';
import { StepwiseStepDirective } from './stepwise-step.directive';

@Directive({
  selector: '[stepwise-container]'
})
export class StepwiseDirective implements AfterViewInit, AfterContentInit {
  @ContentChildren(StepwiseStepDirective)
  public steps: QueryList<StepwiseStepDirective>;

  constructor() { }

  private handlePageChange(pageChange: PageChange) {
    const steps = this.steps.toArray();
    const currentPage = steps.findIndex(stepInstance => stepInstance.isCurrent);
    const pageTransition = currentPage + pageChange;

    if (pageTransition >= 0 && pageTransition < steps.length) {
      steps[currentPage].isVisible = false;
      steps[pageTransition].isVisible = true;
    }
  }

  public ngAfterViewInit() {
    Observable.merge
      .apply(Observable, this.steps.map(stepDirective => stepDirective.pageChange))
      .subscribe(page => this.handlePageChange(page));
  }

  public ngAfterContentInit() {
    this.steps.first.isVisible = true;
  }

}
