import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from '../material/material.module';
import {HeaderComponent} from './header.component';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports:[
    HeaderComponent
  ],
  declarations: [
    HeaderComponent
  ]
})
export class HeaderModule { }
