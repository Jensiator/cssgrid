import { Component } from '@angular/core';
import { ModalService } from './shared/modal/modal.service';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'test',
  templateUrl: 'test-content.html'
})
export class TestComponent {
  modalId = 'modal1';
  confirmId = 'modal2';
  form: FormGroup;
  isPersonEdit: boolean;
  constructor(private modalService: ModalService) {
  }

  onEditPerson(): void {
    this.form = new FormGroup({
      name: new FormControl('Jens'),
      gender: new FormControl(),
      eyeColor: new FormControl(),
    });
    this.isPersonEdit = true;
  }
  onCancel(): void {
    this.isPersonEdit = false;
  }
  onSubmit(): void {
    this.isPersonEdit = false;
  }
  openModal(): void {
    this.modalService.open(this.modalId);
  }
  closeModal(): void {
    this.modalService.close(this.modalId);
  }
  openConfirm(): void {
    const confirmModal = this.modalService.open(this.confirmId);
    confirmModal.header = 'Hej på dere';
    confirmModal.text = 'Säkert att du vill detta?';
  }
  onConfirm(userResponse: boolean): void {
    console.log('On Confirm userresponse:', userResponse);
  }
  onClose(): void {
    console.log('Callback');
  }
}
