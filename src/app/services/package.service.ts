import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { map, catchError } from 'rxjs/operators';
import { GLOBAL } from './global'
import { Package } from '../models/Package';


@Injectable({
  providedIn: 'root'
})
export class PackageService {

  public url: string;
  private httpHeaders = new HttpHeaders({'content-Type': 'application/json' });

  constructor(private _http: HttpClient, private _router: Router) { 
    this.url = GLOBAL.url;
  }

  getPackages():Observable<Package[]>{
    return this._http.get(this.url+'/paquete', {headers: this.httpHeaders}).pipe(
      map((response) => response as Package[]));
  }

  getPackageById(id:Number):Observable<Package>{
    return this._http.get(this.url+'/paquete/'+id, {headers: this.httpHeaders}).pipe(
      map((response) => response as Package));
  }

  create(_package: Package): Observable<Package>{
    return this._http.post(this.url+'/paquete', _package, {headers: this.httpHeaders}).pipe(
      map((response) => response as Package),
      catchError (e =>{
        if(e.status == 400){
           return throwError(e);
        }
      })
    )
  }

  delete(id: Number):Observable<Package>{
    return this._http.delete<Package>(this.url+'/paquete/'+id, {headers: this.httpHeaders}).pipe(
      catchError( e => {
        console.error(e.error.mensaje);                              
        return throwError(e);      
        })  
    )
  }

  update(id: Number, _package: Package):Observable<Package>{
    return this._http.put<Package>(this.url+'/paquete/'+id, _package ,{headers: this.httpHeaders}).pipe(
      catchError( e => {
        console.error(e.error.mensaje);                              
        return throwError(e);      
        })  
    )
  }

  
}
