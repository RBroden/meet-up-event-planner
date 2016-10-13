/* tslint:disable:no-unused-variable */

import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { HomeComponent } from './home.component';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';

describe('Component: Home', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let userService: UserService;
  let router: Router;

  let de: DebugElement;
  let el: HTMLElement;

  let UserServiceStub = {
    currentUser: null,
    getUser: () => {
      return Observable.of(this.currentUser);
    },
    setUser: (user) => {
      this.currentUser = user;
    }
  };


  beforeEach(() => {
    // TestBed.configureTestingModule takes an @NgModule-like metadata object. This one simply declares the component to test.
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      providers: [
        { provide: UserService, useValue: UserServiceStub },
        { provide: Router, useValue: RouterStub }
      ]
    });

    // TestBed.createComponent creates an instance of BannerComponent to test and returns a fixture.
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;

    userService = TestBed.get(UserService);

  });

  it('should create an instance', () => {
    expect(component).toBeTruthy();
  });

  it('should display "Meet Up" in an h1 tag when no user is signed in', () => {
    fixture.detectChanges();
    de = fixture.debugElement.query(By.css('h1'));
    el = de.nativeElement;
    expect(el.textContent).toBe('Meet Up');
  });

  it('should display the first name of a user when logged in', () => {
    userService.setUser({
      fname: 'Phil',
      lname: 'Merrell',
      email: 'philbot5000@gmail.com',
      password: '',
      verifyPassword: '',
      bio: ''
    });
    fixture.detectChanges();
    de = fixture.debugElement.query(By.css('h1'));
    el = de.nativeElement;
    expect(el.textContent).toBe('Hey, Phil');
  });
});


///////// Helpers /////////



class RouterStub {

}
