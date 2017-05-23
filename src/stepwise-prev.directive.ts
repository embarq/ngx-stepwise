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
  selector: '[stepwisePrev]'
})
export class StepwisePrevDirective extends AbstractStepwiseControl {
  private isDisabled: boolean;
  private elem: HTMLElement;

  @Input('stepwisePrev')
  public set stepwisePrev(flag: boolean) {
    flag = typeof flag === 'boolean' ? flag : true;

    this.isDisabled = !flag;
    this.renderer.setElementAttribute(this.elem, 'disabled', this.isDisabled ? 'true' : null);
  }

  public get stepwisePrev(): boolean {
    return !this.isDisabled;
  }

  @HostListener('click')
  public handleClick() {
    this.pageChange.emit(PageChange.Prev);
  }

  constructor(public renderer: Renderer, elem: ElementRef) {
    super();
    this.elem = elem.nativeElement;
    this.stepwisePrev = true;
  }

}
