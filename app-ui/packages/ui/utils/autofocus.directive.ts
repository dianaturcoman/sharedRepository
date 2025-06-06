import { AfterViewInit, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[input-autofocus]'
})
export class AutofocusDirective implements AfterViewInit {
  constructor(private element: ElementRef<HTMLInputElement>) {
    // default
  }

  ngAfterViewInit(): void {
    this.element.nativeElement.focus();
  }
}
