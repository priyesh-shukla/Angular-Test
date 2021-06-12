import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { SocialAuthService } from "angularx-social-login";
import { FacebookLoginProvider } from "angularx-social-login";
import { Router} from "@angular/router";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private user: any;
  private loggedIn: boolean;
  users: any;
  constructor(private authService: SocialAuthService,private formBuilder: FormBuilder,private router: Router) { }
  loginForm: FormGroup;
  submitted = false;
  signInWithFB(): void {
    alert();
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }
  signOut(): void {
    this.authService.signOut();
  }
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
  }
  get login() { return this.loginForm.controls; }
  showMsg : any;
  showErrorMsg : any;
  setUserToken:any;
  loginformSubmit() {
    this.users = JSON.parse(localStorage.getItem('Data'));
    this.submitted = true;
    var user = this.loginForm.value;
    if(this.loginForm.valid){
      for (var i = 0; i < this.users.length; i++){
        if(user.email == this.users[i].email && user.password == this.users[i].password){
          localStorage.setItem('userToken', JSON.stringify(user));
          this.showMsg = true;
          setTimeout(function () {
            window.location.href = '/user-list';
          }, 3000);
        }else{
          this.showErrorMsg = true;
        }
      }

  }
  }
}