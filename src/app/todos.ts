import { Component } from '@angular/core';
import { AppService, Todo } from './app.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'todos',
    templateUrl: 'todos.html'
})
export class Todos {
    public $todos: Observable<Array<Todo>>;
    constructor(private appService: AppService) {
        this.doTheUglyCall();
    }
    doTheUglyCall(): void {
        this.$todos = this.appService.getTodos();
    }
}
