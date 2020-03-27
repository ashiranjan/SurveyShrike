import { Component, OnInit } from '@angular/core';
import { AuthService, SocialUser } from 'angularx-social-login';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-survey-form',
  templateUrl: './survey-form.component.html',
  styleUrls: ['./survey-form.component.scss']
})
export class SurveyFormComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router
    ) { }

    surveyForm: FormGroup;
    yesNo = true;

    ngOnInit() {

      this.formInit();
    }
    
    formInit(): void {
        this.surveyForm = this.fb.group({
            name: [],
            expectation: [],
            recommendation: [],
            satisfication: [],
            mostsatisfied: [],
            leastsatisfied: [],
            reasonfordisatisfication: [],
            usedDate: []
        }); 
    }

    SaveSurvey() {
      console.log(this.surveyForm);
    }

    ExitSurvey(): void {
      this.router.navigateByUrl('login');
    }
}