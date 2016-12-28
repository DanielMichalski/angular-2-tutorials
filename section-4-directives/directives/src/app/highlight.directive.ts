import { Directive, ElementRef, Renderer, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  private backgroundColor = 'white';

  @HostListener('mouseenter') mouseOver() {
    this.backgroundColor = 'green';
  }

  @HostListener('mouseleave') mouseLeave() {
    this.backgroundColor = 'white';
  }

  @HostBinding('style.backgroundColor') get setColor() {
    return this.backgroundColor;
  }

  constructor(private elementRef: ElementRef, private renderer: Renderer) {
    // this.elementRef.nativeElement.style.backgroundColor = 'green';
    // this.renderer.setElementStyle(this.elementRef.nativeElement, 'background-color', 'green');
  }

}
