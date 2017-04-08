import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[flex]'
})
export class FlexDirective {

  constructor(el: ElementRef) {
    el.nativeElement.style.display = 'flex';
    el.nativeElement.style.width = "100%";
  }

}
