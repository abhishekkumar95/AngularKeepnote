import { Observable } from 'rxjs';
import { HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { HttpRequest } from '@angular/common/http';
import { TokenStorage } from './../../Login/core/token.storage';
import { HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, tap } from 'rxjs/operators';


const TOKEN_HEADER_KEY = 'Authorization';


@Injectable()
export class TokenInterceptor implements HttpInterceptor{

    constructor(private token: TokenStorage, private router: Router) {}
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
        let authRequest = request;
        if(this.token.getToken() != null){
            authRequest = request.clone({headers: request.headers.set(TOKEN_HEADER_KEY, `Bearer ${this.token.getToken()}`)});

        }

             
    


         return next.handle(authRequest)
         .pipe(
             tap((err:any) => {
                 if(err instanceof HttpErrorResponse){
                     if(err.status === 401){
                         this.router.navigate(['/login']);
                     }}} ));

    
    }
}