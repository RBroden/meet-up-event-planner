import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs/Rx';
import { User } from './user.model';

@Injectable()
export class UserService {
  public currentUser: BehaviorSubject<User> = new BehaviorSubject(null);
  private user: User;

  constructor() {}

  public getUser(): Observable<User> {
    return this.currentUser.asObservable();
  }

  public setUser(user: User): void {
    this.user = user;
    this.currentUser.next(user);
  }

  public userIsLoggedIn(): boolean {
    return this.user ? true : false;
  }
}