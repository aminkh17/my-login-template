import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[wallpaper]'
})
export class WallpaperDirective {

  constructor(el: ElementRef) {
    el.nativeElement.style.background = "url('/assets/images/background/bg00.jpg')";
    el.nativeElement.style.backgroundSize = 'cover';
  }

}
