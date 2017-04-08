import { Component, OnInit } from '@angular/core';
import { MdSnackBar } from "@angular/material";
import { FormControl, Validators } from '@angular/forms';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {  

  constructor(public snackBar: MdSnackBar) { }

  password: string;
  email: string;

  validate(): boolean{
    return (this.password && this.email && EMAIL_REGEX.exec(this.email) != null);    
  }

  ngOnInit() {
  }

  tryLogin(): void{
    if(this.validate()){
      this.snackBar.open('Login successful.', '', {
        duration: 20000,
      });
    }
    else{
      this.snackBar.open('Invalid inputs', '', {
        duration: 1000
      });
    }
  }
}
