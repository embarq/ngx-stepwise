import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StepwiseDirective } from './stepwise.directive';
import { StepwiseStepDirective } from './stepwise-step.directive';
import { StepwiseNextDirective } from './stepwise-next.directive';
import { StepwisePrevDirective } from './stepwise-prev.directive';

export const enum PageChange { Prev = -1, Next = 1 }

export const directives = [
  StepwiseDirective,
  StepwiseStepDirective,
  StepwiseNextDirective,
  StepwisePrevDirective
];

@NgModule({
  imports: [ CommonModule ],
  declarations: [ ...directives ],
  exports: [ CommonModule, ...directives ]
})
export class StepwiseModule { }
