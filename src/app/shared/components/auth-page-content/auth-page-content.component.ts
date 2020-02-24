import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-auth-page-content',
  templateUrl: './auth-page-content.component.html',
  styleUrls: ['./auth-page-content.component.scss']
})
export class AuthPageContentComponent {
  @Input() title: string;
  @Input() description: string;
}
