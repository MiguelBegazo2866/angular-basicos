import { Component } from '@angular/core';

@Component({
  selector: 'app-counters',
  templateUrl: './counters.component.html',
  styleUrl: './counters.component.css'
})
export class CountersComponent {
  constructor() { }

  public ini: number = 10;
  public counter: number = this.ini;
  incdecBy(value: number): void{
    this.counter+=value;
  }
  reset():void{
    this.counter = this.ini;
  }
}
