import { Component, ElementRef, Input, OnDestroy, OnInit, SimpleChanges, Output, EventEmitter, HostBinding } from '@angular/core';
import { ModalService } from './modal.service';
@Component({
    selector: '[modal]',
    templateUrl: 'modal.html'
})
export class ModalComponent implements OnInit, OnDestroy {
    @HostBinding('class.modal-wrapper') true;
    @Output() close: EventEmitter<any> = new EventEmitter();
    // tslint:disable-next-line: no-input-rename
    @Input('modal') id: string;
    private element: any;

    constructor(private modalService: ModalService, private el: ElementRef) {
        this.element = el.nativeElement;
    }
    ngOnInit(): void {
        const modal = this;
        // move element to bottom of page (just before </body>) so it can be displayed above everything else
        document.body.appendChild(this.element);
        // close modal on background click
        this.element.addEventListener('click', (e: any) => {
            if (e.target.className === 'modal-background') {
                this.closeModal();
            }
        });
        this.modalService.add(this);
    }

    // remove self from modal service when directive is destroyed
    ngOnDestroy(): void {
        this.element.remove();
        this.modalService.remove(this.id);
    }

    open(): void {
        this.element.style.display = 'block';
        document.body.classList.add('modal-open');
    }
    closeModal(): void {
        this.element.style.display = 'none';
        document.body.classList.remove('modal-open');
        if (this.close) {
            this.close.emit('closed:false');
        }
    }
}
