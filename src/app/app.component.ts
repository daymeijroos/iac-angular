import { HttpClient } from '@angular/common/http';
import { Component, OnInit} from '@angular/core';
import { AuthService, User } from '@auth0/auth0-angular';
import { concatMap, map, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'WebShop-Ang';

  constructor(public auth: AuthService, private http: HttpClient) {}
  
  ngOnInit() {}
}
