import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanActivateFn, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';

/*
export const permissionsGuard: CanActivateFn = (route, state) => {
  return true;
};
*/

@Injectable({
  providedIn: 'root',
})
export class PermissionsGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate: CanActivateFn = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree => {
    if (this.hasUser()) {
      return true;
    } else {
      alert('Sin permisos');
      // You might want to navigate to a different route or return a UrlTree here
      // depending on your application logic.
      //return this.router.createUrlTree(['/login']);
      return false;
    }
  }

  hasUser(): boolean {
    // Replace this with your actual logic to check if the user has the required permissions.
    // For now, it always returns false.
    return false;
  }
}
