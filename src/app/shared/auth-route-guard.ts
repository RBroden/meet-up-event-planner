import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { UserService } from '../services/user.service';

@Injectable()
export class AuthRouteGuard implements CanActivate {
    
    constructor(private userService: UserService) {}

    canActivate() {
        return this.userService.userIsLoggedIn();
    }
}
