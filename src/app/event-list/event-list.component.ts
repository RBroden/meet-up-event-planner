import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { User } from '../services/user.model';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  currentUser: User;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.userService.getUser().subscribe(user => {
      this.currentUser = user;
    });
  }

  goTo(url) {
    this.router.navigate([url]);
  }

}
