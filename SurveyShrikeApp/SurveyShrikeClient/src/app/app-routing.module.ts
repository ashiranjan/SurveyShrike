import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SurveyFormComponent } from 'src/survey/survey-form.component';
import { LoginComponent } from 'src/login/login.component';

const appRoutes: Routes = [
    { path: 'survey', component: SurveyFormComponent },
    {
      path: 'login',
      component: LoginComponent,
    },
    { path: '',
      redirectTo: '/login',
      pathMatch: 'full'
    },
    // { path: '**', component: PageNotFoundComponent }
  ];

  @NgModule({
    imports: [
      RouterModule.forRoot(
        appRoutes,
        { enableTracing: true } // <-- debugging purposes only
      )
      // other imports here
    ],
    exports: [RouterModule],
  })

  export class AppRoutingModule { }