import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ModalComponent } from './modal/modal';
import { ModalService } from './modal/modal.service';

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
