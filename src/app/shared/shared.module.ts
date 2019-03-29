import { CommonModule } from '@angular/common';
import { ModalService } from './modal/modal.service';
import { NgModule } from '@angular/core';
import { ModalComponent } from './modal/modal';
import { Modal } from './modal/modal.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        ModalComponent,
        Modal
    ],
    exports: [
        ModalComponent,
        Modal
    ],
    providers: [ModalService]
})
export class SharedModule {
    constructor() {
    }
}