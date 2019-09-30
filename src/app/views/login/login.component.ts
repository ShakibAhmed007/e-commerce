import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent { 

  userName = 'default';
  password = '12345';

  constructor(private router: Router){

  }

  userLogin(){
    if(this.userName === 'admin' && this.password === '12345'){
      this.router.navigate(['dashboard']);

    }
  }

}
