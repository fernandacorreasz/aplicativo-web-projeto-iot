import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

interface User {
  email: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = {
    email: '',
    password: ''
  };

  showWarningMessage = false;

  constructor(private router: Router) { }

  ngOnInit(): void { }

  login(): void {

    const mockUser = {
      email: 'admin',
      password: 'admin'
    };

    if (this.user.email === mockUser.email && this.user.password === mockUser.password) {
      this.showWarningMessage = false;
      console.log('Login successful');
      this.router.navigate(['/dashboard']);
    } else {
      this.showWarningMessage = true;
      console.error('Login failed');
    }
  }

  registerUser(): void {
    this.router.navigate(['/registrar-usuario']);
  }

}
