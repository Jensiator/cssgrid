import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ModalComponent } from './modal/modal';
import { ModalService } from './modal/modal.service';
import { ConfirmModal } from './modal/confirm.modal';
import { ReactiveFormsModule } from '@angular/forms';
import { AppButtonDirective } from './input/appButton.directive';
import { ErrorMessage } from './input/error';
import { DropdownService } from './dropdown/dropdown.service';
import { DropdownToogle } from './dropdown/dropdown_toogle.directive';
import { Dropdown } from './dropdown/dropdown.directive';
@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    declarations: [
        ModalComponent,
        ConfirmModal,
        AppButtonDirective,
        ErrorMessage,
        Dropdown,
        DropdownToogle
    ],
    exports: [
        ModalComponent,
        ConfirmModal,
        ReactiveFormsModule,
        AppButtonDirective,
        ErrorMessage,
        Dropdown,
        DropdownToogle
    ],
    providers: [ModalService, DropdownService]
})
export class SharedModule {
    constructor() {
    }
}
