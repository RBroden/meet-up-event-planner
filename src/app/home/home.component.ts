import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { User } from '../services/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  currentUser: User;

  constructor(private router: Router, private userService: UserService) {}

  ngOnInit() {
    this.userService.getUser().subscribe(user => {
      this.currentUser = user;
      return this.currentUser;
    });
  }

  goTo(url) {
    this.router.navigate([url]);
  }

}
