import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CountersModule } from './counters/counters.module';
import { HerosModule } from './heros/heros.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CountersModule, HerosModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'basicos';
}
