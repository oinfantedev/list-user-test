import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./Users/Users.component').then(m => m.UsersComponent),
    },
    {
        path: 'user/:id',
        loadComponent: () => import('./User/User.component').then(m => m.UserComponent)
    },
    {
        path: '*',
        redirectTo: '',
        pathMatch: 'full'
    }
];
