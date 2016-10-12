import { Component, trigger, state, transition, style, animate } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './services/user.service';
import { User } from './services/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('shrink', [
      state('in', style({ height: '54px' })),
      state('out', style({ height: '200px' })),
      transition('in => out', animate('.2s')),
      transition('out => in', animate('.2s'))
    ]),
    trigger('fade', [
      state('out', style({ opacity: 1 })),
      state('in', style({ opacity: 0 })),
      transition('* => *', animate('.5s'))
    ])
  ]
})
export class AppComponent {

  currentUser: User;
  hideNav: boolean = true;
  menuAnimation: string = 'in';

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
    this.router.navigate(['/']);
  }

  goTo(url, event) {
    event.preventDefault();
    this.hideNav = true;
    this.menuAnimation = 'in';
    this.router.navigate([url]);
  }

  toggleNavbar() {
    this.hideNav = !this.hideNav;
    if(this.hideNav) {
      this.menuAnimation = 'in';
    } else {
      this.menuAnimation = 'out';
    }
  }


  
}