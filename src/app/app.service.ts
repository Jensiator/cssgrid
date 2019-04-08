import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable()
export class AppService {
    constructor(private client: HttpClient) {
    }
    private static readonly TODOS = 'api/v1/todos';
    public getTodos(): Observable<Array<Todo>> {
        return this.client.get<Array<Todo>>(AppService.TODOS);
    }
    public postTodo(todo: Todo): Observable<any> {
        return this.client.post(AppService.TODOS, todo);
    }
}

export class Todo {
    id: string;
    title: string;
    description: string;
}