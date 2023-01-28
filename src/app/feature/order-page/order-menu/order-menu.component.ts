import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-order-menu',
  templateUrl: './order-menu.component.html',
  styleUrls: ['./order-menu.component.scss']
})
export class OrderMenuComponent {
  constructor(public auth: AuthService) { }

  guest = false;

  loginWithRedirect() {
    this.auth.loginWithRedirect();
  }

  continueAsGuest() {
    this.guest = true;
  }
}
