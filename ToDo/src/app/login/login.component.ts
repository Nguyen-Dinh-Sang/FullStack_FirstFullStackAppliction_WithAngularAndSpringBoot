import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = 'sangnd';
  password = '123';
  errorMessage = "Invalid Credentials";
  invalidLogin = false;

  // Router
  // Angular.giveMeRouter
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  handleLogin() {
    if (this.username === 'sangnd' && this.password === '123') {
      this.invalidLogin = false;
      
      // Redirect to Welcome Page
      this.router.navigate(['welcome', this.username]);
    } else {
      this.invalidLogin = true;
    }

    // console.log(this.username);
    // console.log(this.password);
    // console.log(this.invalidLogin);
  }
} 
