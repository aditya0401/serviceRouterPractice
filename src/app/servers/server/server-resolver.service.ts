import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { ServersService } from "../servers.service";


interface Server {
    id: number,
    name: string,
    status: string
}
@Injectable()

export class ServerResolver implements Resolve<Server>{

    constructor(private serversService : ServersService){

    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Server> | Promise<Server> | Server{
        console.log(+route.params['id']);
        console.log("this.serversService.getServer(+route.params['id']);", this.serversService.getServer(+route.params['id']));
        
        return this.serversService.getServer(+route.params['id']);
    }
}