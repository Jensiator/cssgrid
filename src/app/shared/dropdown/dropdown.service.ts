import { Subject, fromEvent, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
@Injectable()
export class DropdownService {
    private subject = new Subject<any>();
    constructor() {
        fromEvent(document, 'click').subscribe((event: any) => {
            this.subject.next(event.target);
        });
    }
    getAppClick(): Observable<any> {
        return this.subject.asObservable();
    }
}
