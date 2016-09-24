import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs/Rx';
import { User } from './user.model';

@Injectable()
export class UserService {
  public currentUser: BehaviorSubject<User> = new BehaviorSubject(null);

  constructor() {}

  public getUser(): Observable<User> {
    return this.currentUser.asObservable();
  }

  public setUser(user: User): void {
    this.currentUser.next(user);
  }
}