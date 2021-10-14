import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './angular-material.module';
import { AlertComponent } from './components/alert/alert.component';
import {AddSpaceDirective} from "./directives/addSpace.directive";
import {OnlynumberDirective} from "./directives/onlyNumbers.directive";



@NgModule({
  declarations: [
    AlertComponent,
    AddSpaceDirective,
    OnlynumberDirective
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
    MaterialModule,
    AlertComponent,
    AddSpaceDirective,
    OnlynumberDirective  ]
})
export class SharedModule { }
