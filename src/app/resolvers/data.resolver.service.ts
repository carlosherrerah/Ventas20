import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { Observable, of } from "rxjs";

const departamentos = ["Marketing", "Sales", "Otros"];  // sustituye al CALL SERVICE de momento

@Injectable({providedIn: 'root'})
export class DataResolverService implements Resolve<any> {
  
  constructor() { }

  resolve(): Observable<any>{
    // TODO: CALL SERVICE
    return of (departamentos);
  }

}
