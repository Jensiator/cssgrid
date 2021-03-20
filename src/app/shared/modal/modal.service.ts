import { ModalComponent } from './modal';
import { Injectable } from "@angular/core";

@Injectable()
export class ModalService {
    private modals: any[] = [];

    add(modal: any) {
        this.modals.push(modal);
    }

    remove(id: string) {
        this.modals = this.modals.filter(x => x.id !== id);
    }

    open(id: string): any {
        const modal: any = this.modals.filter(x => x.id === id)[0];
        modal.open();
        return modal;
    }

    close(id: string) {
        const modal: any = this.modals.filter(x => x.id === id)[0];
        modal.closeModal();
    }
}
