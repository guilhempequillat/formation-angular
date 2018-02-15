import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material';
import {MatCardModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[
    MatToolbarModule,
    MatCardModule
  ],
  declarations: []
})
export class MaterialModule { }
