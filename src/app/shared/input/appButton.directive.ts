
import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
@Directive({
    selector: '[appButton]',
})
export class AppButtonDirective {
    private element: ElementRef;
    constructor(private el: ElementRef, public renderer: Renderer2) {
        this.element = this.el;
    }

    @HostListener('focus', ['$event']) onFocus() {
        const label = this.renderer.parentNode(this.element.nativeElement);
        this.renderer.addClass(label, 'focus');
        return;
    }
    @HostListener('blur', ['$event']) onblur() {
        const label = this.renderer.parentNode(this.element.nativeElement);
        this.renderer.removeClass(label, 'focus');
        return;
    }
    @HostListener('click', ['$event']) onClick() {
        const label = this.renderer.parentNode(this.element.nativeElement);
        if (label.classList.contains('active')) {
            this.renderer.removeClass(label, 'active');
        } else {
            this.renderer.addClass(label, 'active');
        }
        return;
    }
}
