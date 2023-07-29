import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
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
export class TrainingService {
  constructor(private http:HttpClient) { }
  getTraining(url:string):Observable<object>{
    return this.http.get(url,httpOptions);
  }
}
