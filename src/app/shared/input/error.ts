import { Component, Input } from "@angular/core";

@Component({
    selector: '[error]',
    templateUrl: 'error.html'
})
export class ErrorMessage {
    @Input() error;
    onClick(): void {
        this.error = null;
    }
}