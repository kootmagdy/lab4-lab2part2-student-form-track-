import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tracks',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './tracks.component.html',
  styleUrl: './tracks.component.css'
})
export class TracksComponent {

  selectedTrack: string | null = null;
  locations: { track: string, locations: string[] }[] = [
    { track: 'SD', locations: ['Cairo', 'Alexandria', 'Mansoura'] },
    { track: 'Bi', locations: ['Giza', 'Luxor', 'Aswan'] },
    { track: 'Android', locations: ['Tanta', 'Port Said', 'Suez'] }
  ];
  trackLocations: string[] = [];

  onTrackChange(): void {
    const selected = this.locations.find(item => item.track === this.selectedTrack);
    this.trackLocations = selected ? selected.locations : [];
  }

}
