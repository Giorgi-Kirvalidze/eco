import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './angular-material.module';
import { AlertComponent } from './components/alert/alert.component';



@NgModule({
  declarations: [
    AlertComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
    MaterialModule,
    AlertComponent
  ]
})
export class SharedModule { }
