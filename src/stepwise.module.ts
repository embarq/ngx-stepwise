import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StepwiseDirective } from './stepwise.directive';
import { StepwiseStepDirective } from './stepwise-step.directive';
import { StepwiseNextDirective } from './stepwise-next.directive';
import { StepwisePrevDirective } from './stepwise-prev.directive';

export * from './stepwise.directive';
export * from './stepwise-step.directive';
export * from './stepwise-next.directive';
export * from './stepwise-prev.directive';

export const enum PageChange { Prev = -1, Next = 1 }

@NgModule({
  imports: [ CommonModule ],
  declarations: [
    StepwiseDirective,
    StepwiseStepDirective,
    StepwiseNextDirective,
    StepwisePrevDirective
  ],
  exports: [
    StepwiseDirective,
    StepwiseStepDirective,
    StepwiseNextDirective,
    StepwisePrevDirective
  ]
})
export class StepwiseModule { }
