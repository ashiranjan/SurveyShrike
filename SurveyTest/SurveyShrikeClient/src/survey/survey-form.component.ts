import { Component, OnInit } from '@angular/core';
import { AuthService, SocialUser } from 'angularx-social-login';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SurveyService } from 'src/services/survey.service';
import { Survey } from 'src/Models/survey.model';

@Component({
  selector: 'app-survey-form',
  templateUrl: './survey-form.component.html',
  styleUrls: ['./survey-form.component.scss']
})
export class SurveyFormComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router,
    private surveyService: SurveyService
    ) { }

    surveyForm: FormGroup;
    yesNo = true;
    user: SocialUser;
    saveSuccess: boolean;
    ngOnInit() {

      this.formInit();
      this.authService.authState.subscribe((user) => {
        this.user = user;
       
      });
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
            usedDate: [],
            signature:[],
            email:[],

        }); 
    }

    SaveSurvey() {
     
      let formValue = this.surveyForm.value;
      let survey = new Survey();
      survey.ProductName = formValue.name;
      survey.ProductStartDate = formValue.usedDate;
      survey.ReasonForDissatisfaction  = formValue.reasonfordisatisfication;
      survey.LeastSatisfiedTypeId = formValue.leastsatisfied;
      survey.MostSatisfiedTypeId = formValue.mostsatisfied;
      survey.IsExpected = formValue.expectation;
      survey.DoRecommend = formValue.recommendation;
      survey.Signature = formValue.signature;
      survey.RatingId = formValue.satisfication;
      this.surveyService.postSurvey(survey);
      if (survey){
        this.saveSuccess = true;
    }
    else{
        this.saveSuccess = false;
    }
    }

    ExitSurvey(): void {
      this.router.navigateByUrl('login');
    }
}