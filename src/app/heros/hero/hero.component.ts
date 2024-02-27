import { Component } from '@angular/core';

@Component({
  selector: 'app-heros-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'ironman';
  public age: number = 45;

  changeHero():void{
    this.name = 'Spiderman'
  }

  changeAge():void{
    this.age = 25;
  }

  reset():void{
    this.name ="ironman"
    this.age = 45;
  }

  get capitalizedName():string{
    return this.name.toUpperCase();
  }

  get HeroeDescription(): string{
    return `${this.name} - ${this.age}`;
  }
}
