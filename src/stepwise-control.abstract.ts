import { EventEmitter } from '@angular/core';

export const enum PageChange { Prev = -1, Next = 1 }

export class AbstractStepwiseControl {
  public readonly pageChange: EventEmitter<PageChange>;

  constructor() {
    this.pageChange = new EventEmitter<PageChange>(true);
  }
}
