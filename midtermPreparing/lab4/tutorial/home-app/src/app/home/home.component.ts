import { Component } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housing-location';

@Component({
  standalone: true,
  selector: 'app-home',
  template: `
    <section>
      <input type="text" class="input" placeholder="Filter by city">
      <button type="button">Click me!</button>
    </section>
    <section class="results">
      <app-housing-location *ngFor="let housingLocation of housingLocationList" 
        [housingLocation]="housingLocation">
      </app-housing-location>
    </section>
  `,
  styleUrls: ['./home.component.css'],
  imports: [HousingLocationComponent] // Добавляем standalone-компонент
})
export class HomeComponent {
  housingLocationList: HousingLocation[] = [
    {
      id: 0,
      name: "Ache Fresh Start Housing",
      city: "Chicago",
      state: "IL",
      photo: "assets/home1.jpeg",
      availableUnits: 4,
      wifi: true,
      laundry: true
    },
    {
      id: 1,
      name: "Ache Fresh Start Housing",
      city: "Washington",
      state: "LU",
      photo: "assets/home2.jpeg",
      availableUnits: 3,
      wifi: true,
      laundry: true
    },
  ];
}
