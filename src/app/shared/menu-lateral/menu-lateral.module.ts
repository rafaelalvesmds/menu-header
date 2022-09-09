import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuLateralComponent } from './menu-lateral.component';
import { MaterialModule } from '../material/material.module';
import { MenuOptionsModule } from '../menu-options/menu-options.module';
import { HeaderModule } from '../header/header.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    MenuLateralComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    MenuOptionsModule,
    HeaderModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    RouterModule,
  ],
  exports: [
    MenuLateralComponent,
  ]
})
export class MenuLateralModule { }
