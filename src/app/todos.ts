import { Component } from '@angular/core';
import { AppService, Todo } from './app.service';
import { Observable } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'todos',
    templateUrl: 'todos.html'
})
export class Todos {
    public $todos: Observable<Array<Todo>>;
    public form: FormGroup;
    public isEdit: boolean;
    public error: any;
    constructor(private appService: AppService) {
        this.doTheUglyCall();
    }
    add(): void {
        this.error = null;
        this.form = new FormGroup({
            title: new FormControl(null, Validators.required),
            description: new FormControl()
        });
        this.isEdit = true;
    }
    onCancel(): void {
        this.isEdit = false;
    }
    onSubmit(): void {
        this.appService.postTodo(this.form.value).subscribe((response) => {
            this.isEdit = false;
            this.doTheUglyCall();
        }, response => {
            console.log("error",response.error.message);
            this.error = response;
        });
    }
    doTheUglyCall(): void {
        this.$todos = this.appService.getTodos();
    }
}
