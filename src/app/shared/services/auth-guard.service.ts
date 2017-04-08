import { Injectable } from '@angular/core';
import { AuthService } from "./auth-service.service";
import { 
  CanActivate, Router,
  RouterStateSnapshot, ActivatedRouteSnapshot
 } from "@angular/router";
import { Observable } from 'rxjs/Observable';


@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

 

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url: string = state.url;

    return this.checkLogin(url);
  }

  checkLogin(url: string): boolean {
    if (this.authService.isLogged) { return true; }

    // Store the attempted URL for redirecting
    this.authService.redirectTo = url;

    // Navigate to the login page with extras
    this.router.navigate(['/login']);
    return false;
  }

}
