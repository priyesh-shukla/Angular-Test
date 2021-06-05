import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }
  signupSubmitted = false;
  regForm: FormGroup;
  ngOnInit() {
    this.regForm = this.formBuilder.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }
  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      alert('Only Number are Allowed');
      event.preventDefault();
    }
  }
  get f() { return this.regForm.controls; }
  regdetail: any;
  showMsg : any;
  regSubmit() {
    this.signupSubmitted = true;
    console.log(this.regForm.value);
    var userDetail = this.regForm.value;
    var getData = JSON.parse(localStorage.getItem('Data') || '[]');
    getData.push(userDetail);
    localStorage.setItem('Data', JSON.stringify(getData));
    console.log(getData.length);
    if(getData.length > 0){
      this.showMsg = true;
      setTimeout(function () {
        window.location.reload();
      }, 3000);
    }
  }
}
