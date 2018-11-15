import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../services/register.service';
import { RegisterUser } from '../../model/register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor( private registerService: RegisterService) { }

  ngOnInit() { }

  userId: string = '';
  firstName: string = '';
  lastName: string = '';
  password: string = '';

  userInfo: RegisterUser = new RegisterUser;

  onRegister(){

          this.userInfo.userId = this.userId;
          this.userInfo.firstName=this.firstName;
          this.userInfo.lastName=this.lastName;
          this.userInfo.userPassword=this.password;
          this.registerService.registerUser(this.userInfo).subscribe(data => console.log(data));

  }

}
