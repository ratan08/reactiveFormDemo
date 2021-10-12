import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card'; 
import {MatDividerModule} from '@angular/material/divider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,
    MatDividerModule,
    MatToolbarModule,
    MatStepperModule,
    MatButtonModule
  ],
  exports:[
    MatCardModule,
    MatDividerModule,
    MatToolbarModule,
    MatStepperModule,
    MatButtonModule
  ]
})
export class MatrialModule { }
