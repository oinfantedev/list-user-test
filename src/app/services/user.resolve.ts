import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { IUser } from '../interfaces/user';
import { UsersService } from './Users.service';
 
export const UserResolver: ResolveFn<IUser> = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ) => {
    return inject(UsersService).getUser(route.paramMap.get('id')!);
  };
  
