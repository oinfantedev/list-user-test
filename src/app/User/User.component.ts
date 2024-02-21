import { UsersService } from './../services/Users.service';
import { AsyncPipe, CommonModule, JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Observable, map } from 'rxjs';
import { IUser } from '../interfaces/user';
import {MatCardModule} from '@angular/material/card';
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    CommonModule,
    AsyncPipe,
    JsonPipe,
    MatCardModule,
    RouterLink
  ],
  templateUrl: './User.component.html',
  styleUrl: './User.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserComponent {
  user$: Observable<IUser>;
  constructor( private readonly activateRoute: ActivatedRoute) { 
    this.user$ = this.activateRoute.data.pipe(map(({user}) => user));
  }
 }
