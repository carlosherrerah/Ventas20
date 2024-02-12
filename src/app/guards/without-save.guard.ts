import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, CanDeactivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

/*
export const withoutSaveGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
  return true;
};
*/

export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree;
}

@Injectable({
  providedIn: 'root',
})
export class WithoutSaveGuard implements CanDeactivate<CanComponentDeactivate> {

  constructor(private router: Router) { }

  canDeactivate()
    //component: RouterStateSnapshot,
    //route: ActivatedRouteSnapshot,
    //state: RouterStateSnapshot
  : Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.hasUser()) {
      return true;
    } else {
      return confirm('No has salvado cambios');
    }
  }

  hasUser(): boolean {
    return false;
  }

}


