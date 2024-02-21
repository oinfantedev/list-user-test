import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import {  MatTableDataSource, MatTableModule } from '@angular/material/table';
import { UsersService } from '../services/Users.service';
import {  RouterModule } from '@angular/router';

import { IUser } from '../interfaces/user';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  templateUrl: './Users.component.html',
  styleUrl: './Users.component.css',
})
export class UsersComponent implements AfterViewInit { 

  displayedColumns: string[] = ['id', 'name', 'email', 'username', 'Details'];
  dataSource = new MatTableDataSource<IUser>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  constructor(private readonly serviceUser: UsersService) {
    this.serviceUser.getUsers().subscribe((data) => {
      this.dataSource.data = data;
    });
  }

  applyFilter(event: Event): void {
    const filter = (event.target as HTMLInputElement).value.trim().toLocaleLowerCase();
    this.dataSource.filter = filter;
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  
  clickHandler(row:IUser) {
   
    console.log(row)
}
}
