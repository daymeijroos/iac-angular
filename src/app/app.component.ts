import { HttpClient } from '@angular/common/http';
import { Component, OnInit} from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'WebShop-Ang';

  constructor(public auth: AuthService, private http: HttpClient) {}

  ngOnInit() {
    console.log("shit")
    this.http.delete("/api/admin/category", {
      params: {
        'prompt': 'consent',
        "id": "2"
      }
    }).subscribe()
  }
}
