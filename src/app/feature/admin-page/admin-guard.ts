import { AdminService } from './admin.service'
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { AuthService } from "@auth0/auth0-angular";
import { map, Observable, tap } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private auth: AuthService, private adminService: AdminService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return this.adminService.isAdmin().pipe(
      tap(isAdmin => {
        if (!isAdmin) {
          this.auth.loginWithRedirect({ appState: { target: state.url } });
        }
      }),
      map(
        isAdmin => isAdmin
      )
    );
  }
}