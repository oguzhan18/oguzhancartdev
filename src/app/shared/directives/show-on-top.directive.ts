import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appShowOnTop]',
})
export class ShowOnTopDirective implements OnInit {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.setStyle(this.el.nativeElement, 'display', 'none');
    this.renderer.addClass(this.el.nativeElement, 'animate__animated');

    const fadeInClass = 'animate__fadeInUp';
    const fadeOutClass = 'animate__fadeOutUp';
    const threshold = 50; // pixel

    this.toggleVisibility(threshold, fadeInClass, fadeOutClass);
    window.onscroll = () => {
      this.toggleVisibility(threshold, fadeInClass, fadeOutClass);
    };
  }

  private toggleVisibility(
    threshold: number,
    fadeInClass: string,
    fadeOutClass: string
  ) {
    if (window.scrollY > threshold) {
      this.renderer.removeClass(this.el.nativeElement, fadeInClass);
      this.renderer.addClass(this.el.nativeElement, fadeOutClass);
    } else {
      this.renderer.removeStyle(this.el.nativeElement, 'display');
      this.renderer.removeClass(this.el.nativeElement, fadeOutClass);
      this.renderer.addClass(this.el.nativeElement, fadeInClass);
    }
  }
}
