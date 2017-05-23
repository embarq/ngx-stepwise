import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  Renderer
} from '@angular/core';
import { AbstractStepwiseControl, PageChange } from './stepwise-control.abstract';

@Directive({
  selector: '[stepwiseNext]'
})
export class StepwiseNextDirective extends AbstractStepwiseControl {
  private isDisabled: boolean;
  private elem: HTMLElement;

  @Input('stepwiseNext')
  public set stepwiseNext(flag: boolean) {
    flag = typeof flag === 'boolean' ? flag : true;

    this.isDisabled = !flag;
    this.renderer.setElementAttribute(this.elem, 'disabled', this.isDisabled ? 'true' : null);
  }

  public get stepwisePrev(): boolean {
    return !this.isDisabled;
  }

  @HostListener('click')
  public handleClick() {
    this.pageChange.emit(PageChange.Next);
  }

  constructor(public renderer: Renderer, elem: ElementRef) {
    super();
    this.elem = elem.nativeElement;
    this.stepwiseNext = true;
  }

}
