import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { map, catchError } from 'rxjs/operators';
import { GLOBAL } from './global'
import { Receiver } from '../models/Receiver';

@Injectable({
  providedIn: 'root'
})
export class ReceiverService {

  public url: string;
  private httpHeaders = new HttpHeaders({'content-Type': 'application/json' });

  constructor(private _http: HttpClient, private _router: Router) { 
    this.url = GLOBAL.url;
  }

  getReceivers():Observable<Receiver[]>{
    return this._http.get(this.url+'/destinatario', {headers: this.httpHeaders}).pipe(
      map((response) => response as Receiver[]));
  }

  getReceiverById(id:Number):Observable<Receiver>{
    return this._http.get(this.url+'/destinatario/'+id, {headers: this.httpHeaders}).pipe(
      map((response) => response as Receiver));
  }

  create(receiver: Receiver): Observable<Receiver>{
    return this._http.post(this.url+'/destinatario', receiver, {headers: this.httpHeaders}).pipe(
      map((response) => response as Receiver),
      catchError (e =>{
        if(e.status == 400){
           return throwError(e);
        }
      })
    )
  }

  delete(id: Number):Observable<Receiver>{
    return this._http.delete<Receiver>(this.url+'/destinatario/'+id, {headers: this.httpHeaders}).pipe(
      catchError( e => {
        console.error(e.error.mensaje);                              
        return throwError(e);      
        })  
    )
  }

  update(id: Number, receiver: Receiver):Observable<Receiver>{
    return this._http.put<Receiver>(this.url+'/destinatario/'+id, receiver ,{headers: this.httpHeaders}).pipe(
      catchError( e => {
        console.error(e.error.mensaje);                              
        return throwError(e);      
        })  
    )
  }

  
}
