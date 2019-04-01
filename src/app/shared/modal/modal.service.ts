import { ModalComponent } from './modal';

export class ModalService {
    private modal: ModalComponent;

    add(modal: any) {
        this.modal = modal;
    }

    remove() {
        this.modal = null;
    }

    open(): ModalComponent {
        this.modal.open();
        return this.modal;
    }

    close() {
        this.modal.closeModal();
    }
}
