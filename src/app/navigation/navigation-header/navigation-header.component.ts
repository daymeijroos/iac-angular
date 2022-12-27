import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navigation-header',
  templateUrl: './navigation-header.component.html',
  styleUrls: ['./navigation-header.component.scss']
})
export class NavigationHeaderComponent {
  @Input() categories: string[] = ["Gathering", "Transport", "Maintenance", "Sport", "Upcoming"]
}
​