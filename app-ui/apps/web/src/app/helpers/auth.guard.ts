import { inject, Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { RouteList } from '@app/app.routes';
import { AuthenticationService } from '@services/authentication.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const user = this.authenticationService.currentUser$();
    if (user) {
      console.log("check if route is restricted by role", user);
      if (route.data['roles'] && route.data['roles'].indexOf(user.Accesslevel) === -1) {
        console.log("role not authorised so redirect to user page", user.Accesslevel);
        this.router.navigate([RouteList.user]);
        return false;
      }

      // authorised so return true
      return true;
    }

    // not logged in so redirect to login page with the return url
    this.router.navigate([RouteList.login], { queryParams: { returnUrl: state.url } });
    return false;
  }
}