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

  constructor(private http: HttpClient, private router: Router) { }


  ngOnInit(): void { }

  login(): void {
    const url = `http://localhost:8080/users/login?emailAddress=${this.user.email}&password=${this.user.password}`;
    this.http.get(url).subscribe(
      (response: any) => {
        // Handle successful login
        // Store authentication token or user data in local storage or NgRx state
        console.log(response);
        this.router.navigate(['/dashboard']); // Replace '/dashboard' with your actual dashboard route
      },
      (error: any) => {
        // Handle login error
        // Display appropriate error message to the user
        this.showWarningMessage = true;
        console.error(error);
      }
    );
  }

  registerUser(): void {
    this.router.navigate(['/registrar-usuario']);
  }

}
