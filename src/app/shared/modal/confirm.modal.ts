import { ModalComponent } from './modal';
import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';

@Component({
    selector: '[confirm-modal]',
    templateUrl: 'confirm.modal.html'
})
export class ConfirmModal extends ModalComponent implements OnInit, OnDestroy {
    // tslint:disable-next-line: no-input-rename
    @Input('confirm-modal') id: string;
    @Input() header: string;
    @Input() text: string;
    @Output() response: EventEmitter<boolean> = new EventEmitter();
    onResponse(reponse: boolean) {
        this.closeModal();
        this.response.emit(reponse);
    }
}
