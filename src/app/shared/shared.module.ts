import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ModalComponent } from './modal/modal';
import { ModalService } from './modal/modal.service';
import { ConfirmModal } from './modal/confirm.modal';
import {ReactiveFormsModule} from '@angular/forms';
import { AppButtonDirective } from './input/appButton.directive';
@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    declarations: [
        ModalComponent,
        ConfirmModal,
        AppButtonDirective
    ],
    exports: [
        ModalComponent,
        ConfirmModal,
        ReactiveFormsModule,
        AppButtonDirective
    ],
    providers: [ModalService]
})
export class SharedModule {
    constructor() {
    }
}
