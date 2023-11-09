import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  isActive = false;

  constructor(private router: Router) {

  }

  dashboard() {
    this.router.navigate(['/dashboard']);
    this.isActive = true;
  }

  stockEquipment() {
    this.router.navigate(['/dashboard']);
    this.isActive = true;
  }

  logout() {
    this.router.navigate(['/']);
  }
}
