import { HttpClient } from '@angular/common/http';
import { Category } from './../components/model/category';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private getCategoryUrl: string = 'http://localhost:8083/api/v1/category/user/Chandan3706';

  constructor(private http: HttpClient) { }

  getAllCategory(): Observable<Category[]>{
    return this.http.get<Category[]>(this.getCategoryUrl);

  }
}
