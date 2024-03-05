import {Component} from '@angular/core';
import {AuthService} from "../../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username!: string;
  password!: string;
  errorMessage: string = '';

  constructor(private _authService: AuthService, private _router: Router) {
  }

  onSubmit(){
    console.log('Submitting login form with username:', this.username);
    this._authService.login(this.username, this.password).subscribe(response=> {
      console.log('Login successful. Response:', response);
      this._authService.userRole = response.role;
      this._router.navigate(['home'])
      console.log(response)
      }, error => {
          console.error('Login failed. Error:', error);

          if(error.status === 403){
            this.errorMessage = 'Invalid username or password';
          } else{
            this.errorMessage = 'An error occurred. Please try again later.';
          }
      })
  }

}
