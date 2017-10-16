import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import * as firebase from 'firebase';
import { AppUser } from 'app/models/app-user';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {
  userRef;
  constructor(private db: AngularFireDatabase) { 
    this.userRef = this.db.list('users');
    
  }

  save(user: firebase.User) {

    this.userRef.update(user.uid, {
      name: user.displayName,
      email: user.email
    });

  }

  get(uid: string): Observable<AppUser>{
    return this.db.object('users/'+uid).valueChanges();
    
  }

}
