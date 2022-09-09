import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuOptionsComponent } from './menu-options.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    MenuOptionsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,

  ],
  exports: [
    MenuOptionsComponent
  ]
})
export class MenuOptionsModule { }
