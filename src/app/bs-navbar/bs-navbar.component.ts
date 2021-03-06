import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {AuthService} from './../services/auth.service';
import { AdminAuthGuardService } from 'app/services/admin-auth-guard.service';
import { AppUser } from 'app/models/app-user';




@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {

  appUser: AppUser;
  constructor(private auth: AuthService ) { 
    auth.appUser$.subscribe(appUser => this.appUser = appUser);

  }

  ngOnInit() {
    
  }

  logout() {
    this.auth.logout();
  }

}
