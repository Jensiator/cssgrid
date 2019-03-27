import { Component } from '@angular/core';
import { ModalService } from './shared/modal/modal.service';
@Component({
  selector: 'test',
  templateUrl: 'test-content.html'
})
export class TestComponent {
  isPersonEdit: boolean;
  modalId = 'test-modal-1';
  constructor(private modalService: ModalService) {
  }

  onEditPerson(): void {
    this.isPersonEdit = true;
  }
  onCancel(): void {
    this.isPersonEdit = false;
  }
  onSubmit(): void {
    this.isPersonEdit = false;
  }
  openModal() {
     this.modalService.open(this.modalId);
  }
  closeModal() {
    this.modalService.close(this.modalId);
  }
}
