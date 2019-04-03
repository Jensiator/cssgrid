import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ModalComponent } from './modal/modal';
import { ModalService } from './modal/modal.service';
import { ConfirmModal } from './modal/confirm.modal';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        ModalComponent,
        ConfirmModal
    ],
    exports: [
        ModalComponent,
        ConfirmModal
    ],
    providers: [ModalService]
})
export class SharedModule {
    constructor() {
    }
}
