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

  emailControl = new FormControl('', [Validators.required, Validators.pattern(EMAIL_REGEX)]);

  ngOnInit() {
  }

  tryLogin(): void{
    this.snackBar.open('Login successful.', '', {
      duration: 20000,
    });
  }
}
