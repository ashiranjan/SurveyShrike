import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Survey } from 'src/Models/survey.model';
import {Http,RequestMethod, RequestOptions, Headers} from '@angular/http';
import { BehaviorSubject } from 'rxjs';
import { SocialUser } from 'angularx-social-login';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  constructor(
    private http: Http
  ) { }

  readonly rootURL = 'http://localhost:54839/api';
  private currentUser = new BehaviorSubject<SocialUser>(null);

  setUser(user: SocialUser){
    this.currentUser.next(user);
  }

  getUser(): SocialUser{
   return this.currentUser.value;
  }

  postSurvey(survey: Survey) {
    var body = JSON.stringify(survey);
    var headerOptions = new Headers({'Content-Type': 'application/json'});
    var requestOptions = new RequestOptions({method: RequestMethod.Post, headers: headerOptions});

    this.http.post(this.rootURL + '/Survey/PostSurvey' , body, requestOptions).subscribe(
      x => console.log(x)
    );
           
  }

  getSurvey() {
    return this.http.get(this.rootURL + '/user' );
  }
}