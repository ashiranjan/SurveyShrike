import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SocialLoginModule, AuthServiceConfig, FacebookLoginProvider, GoogleLoginProvider } from 'angularx-social-login';
import { AppRoutingModule } from './app-routing.module';
import { SurveyFormComponent } from 'src/survey/survey-form.component';
import { LoginComponent } from 'src/login/login.component';
import { SurveyService } from 'src/services/survey.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

const config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider('985653763051-angkujqk5upj0lo5ejauinl6omda1hk0.apps.googleusercontent.com')
  }
]);
export function provideConfig() {
  return config;
}
@NgModule({
  declarations: [
    AppComponent,
    SurveyFormComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    SocialLoginModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    },
    SurveyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
