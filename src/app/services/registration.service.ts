import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { RegistrationBean } from '../beans/registration-bean';
import { JsonPipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(
    private httpClient: HttpClient
    ) { }

  saveUserRegistrationData(registrationBean:RegistrationBean){
    let url = 'http://localhost:9080/get-products-list';
    
    // creating json data
    let registrationJsonData = {
      "request_type":"USER_REGISTRATION",
      "registration_data":JSON.stringify(registrationBean)
    }

    // Request Header
    let head = new Headers({
      'Content-Type': 'application/json'
    });


    console.log(JSON.stringify(registrationJsonData));


  // calling rest api
  // this.http.post(url, body, {headers : head})
  //     .map(res =>  res.json())
  //     .subscribe(
  //         data => {console.log(data);},
  //         err => console.log(err),
  //         () => console.log('Fetching complete for Server Metrics')
  //     );

  }
}
