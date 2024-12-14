import { Component } from '@angular/core'
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrl: './nav.component.css',
    imports: [
        RouterLink,
        RouterLinkActive
    ],
})

export class NavComponent {
    constructor(
        protected router: Router
    ) {}

    activeRoute(): string {
        const nameRoute: string = this.router.url.split('/').reverse()[0]
        return nameRoute === ''? 'home': nameRoute
    }
}
