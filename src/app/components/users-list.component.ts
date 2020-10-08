import { Component, OnInit } from '@angular/core';
import { User } from '../models/User';
import { USERS } from '../models/users.json';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: '../views/users-list.component.html',
  styleUrls: ['../views/users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users: User[];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
     this.getUsers();
  }

  getUsers(){
    this.users = USERS;
    //this.userService.getUsers().subscribe(
    //  (users) => {this.users = users}
    //)
  }

}
