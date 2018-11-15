import { Component ,OnInit} from '@angular/core';
import { User } from './../../model/user';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { error } from '@angular/compiler/src/util';
import { TokenStorage } from '../../core/token.storage';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



  userId:string = '';
  password:string = '';
  user: User = new User();
  error: any;

  constructor(private loginService: LoginService, private token: TokenStorage, private router: Router) { }

  ngOnInit() {}


  onLogin(){

    this.user.userId = this.userId;
    this.user.userPassword = this.password;

    this.loginService.login(this.user).subscribe(
      data => {
        this.token.saveToken(data['token'], data['userId']);
        this.router.navigate(['home']);
        error => this.error = error;  
      }
    );
  }

}
