import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  constructor(
    private http: HttpClient
  ) { }

  readonly rootURL = 'http://localhost:44373/api';

//   postUser(user: User) {
//     return this.http.post(this.rootURL + '/User/CreateUser' , user);
//   }
}