// min-length.directive.ts
import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appMinLength]',
})
export class MinLengthDirective {
  @Input('appMinLength') minLength: number = 0;
  constructor(private el: ElementRef) {}
  @HostListener('input') onInput() {
    const inputValue: string = this.el.nativeElement.value;
    if (inputValue.length < this.minLength) {
      // this.el.nativeElement.setCustomValidity(`Minimum length is ${this.minLength} characters.`);
      this.el.nativeElement.backgroundColor = 'red';
    } else {
      // this.el.nativeElement.setCustomValidity('');
    }
  }
}