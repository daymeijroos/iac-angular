import { Component, Inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login-button',
  templateUrl: './login-button.component.html',
  styleUrls: ['./login-button.component.scss']
})
export class LoginButtonComponent {
  constructor(@Inject(DOCUMENT) private document: Document, public auth: AuthService, public route: ActivatedRoute) {}

  login() {
    this.auth.loginWithRedirect();
  }

  logout() {
    this.auth.logout({ returnTo: this.document.location.origin });
  }
}
