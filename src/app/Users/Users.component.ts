import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { UsersService } from '../services/Users.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { IUser, IUsers } from '../interfaces/user';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    CommonModule,
    MatListModule,
    RouterModule
  ],
  templateUrl: './Users.component.html',
  styleUrl: './Users.component.css',
})
export class UsersComponent { 
  users$: Observable<IUsers>;
  constructor(private readonly serviceUser: UsersService, private readonly router: Router) { 
    this.users$ = this.serviceUser.getUsers();
  }

}
