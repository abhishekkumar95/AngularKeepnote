import { Injectable } from "@angular/core";

const TOKEN_KEY = 'AuthToken';
const USER_ID = 'UserId';

@Injectable()
export class TokenStorage {

    constructor(){}


    public saveToken(token: string, userId:string){
        window.sessionStorage.removeItem(TOKEN_KEY)
        window.sessionStorage.removeItem(USER_ID);
        window.sessionStorage.setItem(TOKEN_KEY,token);
        window.sessionStorage.setItem(USER_ID,userId);
        
    }

    public getToken(): string {

        return sessionStorage.getItem(TOKEN_KEY);

    }

    public getUserId(): string {

        return sessionStorage.getItem(USER_ID);
    }
}