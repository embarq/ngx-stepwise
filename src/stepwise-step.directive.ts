import {
  AfterContentInit,
  ChangeDetectorRef,
  ContentChild,
  Directive,
  ElementRef,
  EventEmitter,
  HostBinding
} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/merge';

import { PageChange } from './stepwise-control.abstract';
import { StepwiseNextDirective } from './stepwise-next.directive';
import { StepwisePrevDirective } from './stepwise-prev.directive';

@Directive({
  selector: '[stepwise-step]'
})
export class StepwiseStepDirective implements AfterContentInit {
  @ContentChild(StepwiseNextDirective)
  public nextStep: StepwiseNextDirective;

  @ContentChild(StepwisePrevDirective)
  public prevStep: StepwisePrevDirective;

  @HostBinding('style.display')
  public visiblity: 'block' | 'none';

  public element: HTMLElement;
  public isCurrent: boolean;

  /** Proxy stream for `stepwise-container` directive */
  public pageChange: EventEmitter<PageChange>;

  public set isVisible(visible: boolean) {
    this.visiblity = visible ? 'block' : 'none';
    this.isCurrent = visible;
    this.changeDetector.markForCheck();
  }

  public get isVisible() {
    return this.visiblity === 'block';
  }

  constructor(public changeDetector: ChangeDetectorRef, elem: ElementRef) {
    this.pageChange = new EventEmitter<PageChange>(true);
    this.element = elem.nativeElement;
    this.visiblity = 'none';
    this.isCurrent = false;
  }

  public ngAfterViewInit() {
    if (typeof this.prevStep === 'undefined') {
      this.pageChange = this.nextStep.pageChange;
    } else if (typeof this.nextStep === 'undefined') {
      this.pageChange = this.prevStep.pageChange;
    } else {
      this.pageChange = Observable.merge.apply(Observable, [
        this.nextStep.pageChange,
        this.prevStep.pageChange
      ]);
    }
  }

  public ngAfterContentInit() {
  }

}
