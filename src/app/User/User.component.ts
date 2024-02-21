import { UsersService } from './../services/Users.service';
import { AsyncPipe, CommonModule, JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Params } from '@angular/router';
import { IUser } from '../interfaces/user';
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    CommonModule,
    AsyncPipe,
    JsonPipe
  ],
  templateUrl: './User.component.html',
  styleUrl: './User.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserComponent {
  user$: Observable<IUser>;
  constructor(private readonly usersService: UsersService, private readonly activateRoute: ActivatedRoute) { 
    this.user$ = this.activateRoute.params.pipe(
      switchMap((params: Params) => this.usersService.getUser(params['id']))
    );
  }
 }
