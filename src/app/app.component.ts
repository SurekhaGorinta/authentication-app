import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [] // No extra modules needed here
})
export class AppComponent {
  title = 'user-authentication-app';
}
