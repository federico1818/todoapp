import { Component } from '@angular/core'

@Component({
    selector: 'app-home',
    imports: [],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})

export class HomeComponent {
    public tasks = [
        { id: 1, title: 'Task 01' },
        { id: 2, title: 'Task 02' },
        { id: 3, title: 'Task 03' }
    ]
}
