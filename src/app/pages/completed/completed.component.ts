import { Component, signal } from '@angular/core'

@Component({
    selector: 'app-completed',
    imports: [],
    templateUrl: './completed.component.html',
    styleUrl: './completed.component.css'
})

export class CompletedComponent {
    public tasks = signal([
        { id: 1, title: 'Completed 01' },
        { id: 2, title: 'Completed 02' },
        { id: 3, title: 'Completed 03' }
    ])
}
