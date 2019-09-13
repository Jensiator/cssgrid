import { AfterContentInit, OnDestroy, Directive, ContentChild, HostBinding, ElementRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { DropdownToogle } from './dropdown_toogle.directive';
import { DropdownService } from './dropdown.service';

@Directive({
    selector: '[dropDown]'
})
export class Dropdown implements AfterContentInit, OnDestroy {
    private toggleSubscription: Subscription = new Subscription();
    private outSideSubscription: Subscription = new Subscription();
    @ContentChild(DropdownToogle) ddToggle: DropdownToogle;
    @HostBinding('class.dropdown') dropDownClass = true;
    @HostBinding('class.opened') opened: boolean;

    constructor(private element: ElementRef, private dropDownService: DropdownService) {
    }

    ngAfterContentInit(): void {
        this.toggleSubscription = this.ddToggle.clicked.subscribe(() => {
            this.opened = !this.opened;
            if (this.opened) {
                this.outSideSubscription = this.dropDownService.getAppClick().subscribe((target: any) => {
                    const clickedInside = this.element.nativeElement.contains(target);
                    if (!clickedInside) {
                        this.outSideSubscription.unsubscribe();
                        this.opened = false;
                    }
                });
            } else {
                this.outSideSubscription.unsubscribe();
            }
        });
    }

    ngOnDestroy(): void {
        this.toggleSubscription.unsubscribe();
        this.outSideSubscription.unsubscribe();
    }
}
