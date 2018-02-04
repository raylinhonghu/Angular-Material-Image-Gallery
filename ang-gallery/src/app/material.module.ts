import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
@NgModule({
  imports: [ MatToolbarModule,MatMenuModule],
  exports: [ MatToolbarModule,MatMenuModule]
})

export class MaterialModule { }
