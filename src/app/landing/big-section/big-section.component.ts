import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-big-section',
  templateUrl: './big-section.component.html',
  styleUrls: ['./big-section.component.scss']
})
export class BigSectionComponent {
  @Input() img: String = ""
  @Input() label: String = ""
  @Input() header: String = ""
}
