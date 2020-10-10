import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { Sender } from '../models/Sender';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { map, catchError } from 'rxjs/operators';
import { GLOBAL } from './global'

@Injectable({
  providedIn: 'root'
})
export class SenderService {

  public url: string;
  private httpHeaders = new HttpHeaders({'content-Type': 'application/json' });

  constructor(private _http: HttpClient, private _router: Router) { 
    this.url = GLOBAL.url;
  }

  getSenders():Observable<Sender[]>{
    return this._http.get(this.url+'/remitente', {headers: this.httpHeaders}).pipe(
      map((response) => response as Sender[]));
  }

  getSenderById(id:Number):Observable<Sender>{
    return this._http.get(this.url+'/remitente/'+id, {headers: this.httpHeaders}).pipe(
      map((response) => response as Sender));
  }

  create(sender: Sender): Observable<Sender>{
    return this._http.post(this.url+'/remitente', sender, {headers: this.httpHeaders}).pipe(
      map((response) => response as Sender),
      catchError (e =>{
        if(e.status == 400){
           return throwError(e);
        }
      })
    )
  }

  delete(id: Number):Observable<Sender>{
    return this._http.delete<Sender>(this.url+'/remitente/'+id, {headers: this.httpHeaders}).pipe(
      catchError( e => {
        console.error(e.error.mensaje);                              
        return throwError(e);      
        })  
    )
  }

  update(id: Number, sender: Sender):Observable<Sender>{
    return this._http.put<Sender>(this.url+'/remitente/'+id, sender ,{headers: this.httpHeaders}).pipe(
      catchError( e => {
        console.error(e.error.mensaje);                              
        return throwError(e);      
        })  
    )
  }

  
}
