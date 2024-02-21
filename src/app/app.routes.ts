import { Routes } from '@angular/router';
import { UserResolver } from './services/user.resolve';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./Users/Users.component').then(m => m.UsersComponent),
    },
    {
        path: 'user/:id',
        loadComponent: () => import('./User/User.component').then(m => m.UserComponent),
        resolve: { user: UserResolver }
    },
    {
        path: '*',
        redirectTo: '',
        pathMatch: 'full'
    }
];
