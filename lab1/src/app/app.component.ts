import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentformComponent } from './components/studentform/studentform.component';
import { TracksComponent } from './components/tracks/tracks.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,StudentformComponent,TracksComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myproject';
}
