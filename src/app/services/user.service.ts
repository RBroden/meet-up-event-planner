import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  private user = {
    name: 'Phil Merrell',
  };

  constructor() {}

  getUser() {
    return this.user;
  }

  setUser(user) {
    this.user = user;
  }

  

}
