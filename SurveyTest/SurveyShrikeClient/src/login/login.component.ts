

import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService, GoogleLoginProvider, SocialUser } from 'angularx-social-login';
import { Router } from '@angular/router';
import { SurveyService } from 'src/services/survey.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  constructor(
    private authService: AuthService,
    private router: Router,
    private surveyService: SurveyService
    ) { }

    user: SocialUser;
    loggedIn = false;

    ngOnInit() {
      this.authService.authState.subscribe((user) => {
        this.user = user;
        if (this.user) {
          this.router.navigateByUrl('survey');
          this.surveyService.setUser(this.user);
        }
        this.loggedIn = (user != null);
      });
    }

    signInWithGoogle(): void {
      this.authService.signIn(GoogleLoginProvider.PROVIDER_ID) ;
    }
    signOut(): void {
      this.authService.signOut();
    }

    ngOnDestroy() {
      this.signOut();
    }
}
