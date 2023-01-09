import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[highlight]',
})
export class HighlightDirective {
  constructor(private eleRef: ElementRef) {
    this.eleRef.nativeElement.style.background = '#ccc';
  }
}
