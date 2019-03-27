import { CommonModule } from '@angular/common';
import { ModalService } from './modal/modal.service';
import { NgModule } from '@angular/core';
import { ModalComponent } from './modal/modal';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        ModalComponent
    ],
    exports: [
        ModalComponent
    ],
    providers: [ModalService]
})
export class SharedModule {
    constructor() {
    }
}