import { Directive, Output, HostBinding, EventEmitter, HostListener } from '@angular/core';

@Directive({
    selector: '[dropDownToggle]'
})
export class DropdownToogle {
    @Output() clicked = new EventEmitter();
    @HostBinding('class.dropdown-toggle') true = true;
    @HostListener('click', ['$event']) onclick() {
        this.clicked.emit();
    }

}
