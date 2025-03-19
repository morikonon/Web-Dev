import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';

@Component({
  standalone: true,
  selector: 'app-root',
  template: `
    <main>
      <h1>Home app</h1>
    </main>
    <section>
      <app-home></app-home>
    </section>
  `,
  styleUrls: ['./app.component.css'],
  imports: [HomeComponent] // Добавили импорт HomeComponent
})
export class AppComponent {
  title = 'Home-app';
}
