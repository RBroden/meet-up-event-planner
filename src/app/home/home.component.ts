import { Component, OnInit, trigger, state, style, transition, animate, keyframes } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { User } from '../services/user.model';


// trigger('fadeInDown', [
//       state('in', style({
//         transform: 'translate3d(0, 0, 0)'
//       })),
//       transition('void => *', [
//         animate(300, keyframes([
//           style({opacity: 0, transform: 'translate3d(0, -100%, 0)', offset: 0}),
//           style({opacity: 1, transform: 'translate3d(0, 15px, 0)', offset: 0.3}),
//           style({opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1.0})
//         ]))
//       ]),
//       transition('* => void', [
//         animate(300, keyframes([
//           style({opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 0}),
//           style({opacity: 1, transform: 'translate3d(0, -15px, 0)', offset: 0.7}),
//           style({opacity: 0, transform: 'translate3d(0, 100%, 0)', offset: 1.0})
//         ]))
//       ])
//     ]


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('title', [
      state('fadeInDown', style({ opacity: 1, transform: 'translate3d(0, 0, 0)' })),
      state('fadeOutUp', style({ opacity: 0, transform: 'translate3d(0, -30%, 0)'})),
      transition('* => *', animate('.2s'))
    ]),
    trigger('fade', [
      state('fadeIn', style({ opacity: 1 })),
      state('fadeOut', style({ opacity: 0 })),
      transition('* => *', animate('.5s'))
    ])
  ]
})
export class HomeComponent implements OnInit {

  currentUser: User;
  titleAnimation: string = 'fadeOutUp';
  fadeAnimation: string = 'fadeOut';

  constructor(private router: Router, private userService: UserService) {}

  ngOnInit() {
    this.userService.getUser().subscribe(user => {
      this.currentUser = user;
      return this.currentUser;
    });
    this.triggerHomeAnimation();
  }

  goTo(url) {
    this.router.navigate([url]);
  }

  triggerHomeAnimation() {
    setTimeout(() => {
      this.titleAnimation = 'fadeInDown';
      this.fadeAnimation = 'fadeIn';
    }, 300)
  }

}
