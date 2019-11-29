//import { CanActivate } from "@angular/router/src/utils/preactivation";
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, ActivatedRoute, Router, CanActivateChild } from "@angular/router";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { AuthService } from "./auth.service";

@Injectable()

export class AuthGuard implements CanActivate, CanActivateChild{
    constructor(private authService: AuthService, private router: Router){

    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        return this.authService.isAuthenticate()
        .then(
            (authenticated: boolean)=>{
                if(authenticated== true){
                    return true;
                }else{
                    this.router.navigate(['/']);
                }
            }
        )
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        return this.canActivate(route,state)
    }
}