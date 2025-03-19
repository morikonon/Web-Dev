import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housing-location';

@Component({
  standalone: true, // Делаем standalone
  selector: 'app-housing-location',
  imports: [CommonModule],
  template: `
    <section class="listing">
      <img class="photo-listing" [src]="housingLocation.photo" alt="Exterior photo of {{ housingLocation.name }}">
      <h2 class="heading-listing">{{ housingLocation.name }}</h2>
      <p class="location-listing">{{ housingLocation.city }}, {{ housingLocation.state }}</p>
    </section>
  `,
  styleUrls: ['./housing-location.component.css'] // Исправлено с styleUrl на styleUrls
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;
}
