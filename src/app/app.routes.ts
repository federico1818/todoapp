import { Routes } from '@angular/router'
import { HomeComponent } from './pages/home/home.component'
import { CompletedComponent } from './pages/completed/completed.component'
import { ToCompleteComponent } from './pages/to-complete/to-complete.component'

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'to-complete',
        component: ToCompleteComponent
    },
    {
        path: 'completed',
        component: CompletedComponent
    }
]
