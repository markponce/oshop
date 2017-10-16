import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from 'app/services/auth.service';
import { UserService } from 'app/services/user.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AdminAuthGuardService implements CanActivate{

  constructor(
    private auth: AuthService, 
    private router: Router, 
    private userService: UserService) { }

  canActivate(): Observable<boolean> {

    return this.auth.appUser$
      .map(appUser => appUser.isAdmin);

      
  }
}
