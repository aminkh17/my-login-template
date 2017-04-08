import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

@Injectable()
export class AuthService {
  isLogged: boolean = false;  
  redirectTo: string = '/login';

  constructor() { }


  login(): void{
      this.isLogged = true;
      return;//Observable.of(true).delay(1000).do(val => this.isLogged = true);
  }

  logout(): void{
    this.isLogged = false;
  }
}
