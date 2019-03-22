import {Component} from '@angular/core';
@Component({
  selector: 'test',
  templateUrl: 'test-content.html'
})
export class TestComponent {
  isPersonEdit:boolean;

  onEditPerson():void{
    this.isPersonEdit = true;
  }
  onCancel():void{
    this.isPersonEdit = false;
  }
  onSubmit():void{
    this.isPersonEdit = false;
  }
}
