import { Component } from '@angular/core';
import { FormGroup,FormControl, FormControlName } from '@angular/forms';
import { RegistrationService } from '../../services/registration.service';
import { RegistrationBean } from '../../beans/registration-bean';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'register.component.html'
})
export class RegisterComponent {

  private registrationBean: RegistrationBean = new RegistrationBean();

  registrationForm = new FormGroup({
    organizationName:new FormControl(''),
    fullName: new FormControl(''),
    email: new FormControl(''),
    countryCode: new FormControl('1'),
    phoneNumber: new FormControl(''),
    jobType: new FormControl('1'),
    password: new FormControl(''),
    repeatPassword: new FormControl('')
  });

  constructor(private registrationService: RegistrationService) { }

  onSubmit(){
    // To-Do
    // Save Registration Data into Database

    this.registrationBean = new RegistrationBean(this.registrationForm.value);
    console.log(this.registrationBean.fullName);
    this.registrationService.saveUserRegistrationData(this.registrationBean);



  }

}
