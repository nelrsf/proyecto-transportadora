import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { map, catchError } from 'rxjs/operators';
import { GLOBAL } from './global'
import { Driver } from '../models/Driver';


@Injectable({
  providedIn: 'root'
})
export class DriverService {

  public url: string;
  private httpHeaders = new HttpHeaders({'content-Type': 'application/json' });

  constructor(private _http: HttpClient, private _router: Router) { 
    this.url = GLOBAL.url;
  }

  getDrivers():Observable<Driver[]>{
    return this._http.get(this.url+'/conductor', {headers: this.httpHeaders}).pipe(
      map((response) => response as Driver[]));
  }

  getDriverById(id:Number):Observable<Driver>{
    return this._http.get(this.url+'/conductor/'+id, {headers: this.httpHeaders}).pipe(
      map((response) => response as Driver));
  }

  create(driver: Driver): Observable<Driver>{
    return this._http.post(this.url+'/conductor', driver, {headers: this.httpHeaders}).pipe(
      map((response) => response as Driver),
      catchError (e =>{
        if(e.status == 400){
           return throwError(e);
        }
      })
    )
  }

  delete(id: Number):Observable<Driver>{
    return this._http.delete<Driver>(this.url+'/conductor/'+id, {headers: this.httpHeaders}).pipe(
      catchError( e => {
        console.error(e.error.mensaje);                              
        return throwError(e);      
        })  
    )
  }

  update(id: Number, driver: Driver):Observable<Driver>{
    return this._http.put<Driver>(this.url+'/conductor/'+id, driver ,{headers: this.httpHeaders}).pipe(
      catchError( e => {
        console.error(e.error.mensaje);                              
        return throwError(e);      
        })  
    )
  }

  
}
