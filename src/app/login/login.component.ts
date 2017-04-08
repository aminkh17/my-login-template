import { Component, OnInit } from '@angular/core';
import { MdSnackBar } from "@angular/material";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public snackBar: MdSnackBar) { }

  ngOnInit() {
  }

  tryLogin(): void{
    this.snackBar.open('Login successful.', '', {
      duration: 20000,
    });
  }
}
