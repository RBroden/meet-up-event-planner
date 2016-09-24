import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './services/user.service';
import { User } from './services/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  currentUser: User;

  constructor(private router: Router, private userService: UserService) {
    this.getCurrentUser();
  }

  signUp() {
    this.router.navigate(['/create-account']);
  }

  getCurrentUser() {
    this.userService.getUser().subscribe(user => {
      this.currentUser = user;
      console.log(user);
      return this.currentUser;
    });
  }

  logOut() {
    this.userService.setUser(null);
  }


  
}