import { RegisterUser } from './../model/register';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';



const httpOptions = {
  headers: new HttpHeaders({'Content-type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})


export class RegisterService {

  private registerUrl: string = 'http://localhost:8089/api/v1/auth/register';

  constructor(private http: HttpClient) { }

  registerUser(userInfo: RegisterUser): Observable<RegisterUser>{

    console.log(userInfo);

    return this.http.post<RegisterUser>(this.registerUrl,userInfo,httpOptions).pipe(catchError(this.handleError<RegisterUser>('registerUser')));

  }

  private handleError<T>(operation = 'operation', result?: T){

    return (error:any): Observable<T> =>{

      console.error(error);

      return  of(result as T);

    };
  }

  
}
