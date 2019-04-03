import { Component } from '@angular/core';
import { ModalService } from './shared/modal/modal.service';
@Component({
  selector: 'test',
  templateUrl: 'test-content.html'
})
export class TestComponent {
  modalId = 'modal1';
  isPersonEdit: boolean;
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
  openModal(): void {
    this.modalService.open(this.modalId);
  }
  closeModal(): void {
    this.modalService.close(this.modalId);
  }
  onClose(): void {
    console.log('Callback');
  }
}
