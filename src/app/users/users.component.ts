import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor() { }
  userData:any;
  userToken: any;
  ngOnInit() {
    this.userData = JSON.parse(localStorage.getItem('Data') || '[]');
    this.userToken = JSON.parse(localStorage.getItem('userToken'));
  }
}
