/* tslint:disable:no-unused-variable */

import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';

describe('Component: Home', () => {
  let component: HomeComponent;
  let userService: UserService;
  let router: Router;
  

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      providers: [ 
        { provide: UserService, useValue: UserServiceStub },
        { provide: Router, useValue: RouterStub }
      ]
    })
  }); 

  it('should create an instance', () => {
    expect(component).toBeTruthy();
  });
});


///////// Helpers /////////

class UserServiceStub {
  public currentUser;
  private user;

  getUser() {
    return Observable.of({
      fname: 'Phil',
      lname: 'Merrell',
      email: 'philbot5000@gmail.com',
      password: '',
      verifyPassword: '',
      bio: ''
    });
  }
}

class RouterStub {

}