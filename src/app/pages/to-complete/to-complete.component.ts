import { Component, signal } from '@angular/core';

@Component({
    selector: 'app-to-complete',
    imports: [],
    templateUrl: './to-complete.component.html',
    styleUrl: './to-complete.component.css'
})
export class ToCompleteComponent {
    public tasks = signal([
        { id: 1, title: 'To completed 01' },
        { id: 2, title: 'To completed 02' },
        { id: 3, title: 'To completed 03' }
    ])
}
