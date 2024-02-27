import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountersComponent } from './counters.component';



@NgModule({
  declarations: [
    CountersComponent
  ],
  imports: [
    CommonModule
  ]
  , exports:[
    CountersComponent
  ]
})
export class CountersModule { }
