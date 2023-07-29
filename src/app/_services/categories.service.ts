import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders(
    {
      'Content-Type': 'application/x-www-form-urlencoded',
    }
  )
};
@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  constructor(private http:HttpClient) { }
  getCategories(url:string):Observable<object>{
    return this.http.get(url,httpOptions);
  }
}
