import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ModalComponent } from './modal/modal';
import { ModalService } from './modal/modal.service';
import { ConfirmModal } from './modal/confirm.modal';
import {ReactiveFormsModule} from '@angular/forms';
import { AppButtonDirective } from './input/appButton.directive';
import { ErrorMessage } from './input/error';
@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    declarations: [
        ModalComponent,
        ConfirmModal,
        AppButtonDirective,
        ErrorMessage
    ],
    exports: [
        ModalComponent,
        ConfirmModal,
        ReactiveFormsModule,
        AppButtonDirective,
        ErrorMessage
    ],
    providers: [ModalService]
})
export class SharedModule {
    constructor() {
    }
}
