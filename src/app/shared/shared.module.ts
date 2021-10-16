import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './angular-material.module';
import { AlertComponent } from './components/alert/alert.component';
import {AddSpaceDirective} from "./directives/addSpace.directive";
import {OnlynumberDirective} from "./directives/onlyNumbers.directive";
import {AdHostDirective} from "./directives/adHost.directive";
import { AdBannerComponent } from './components/ad-banner/ad-banner.component';
import {ProductAdComponent} from "./components/product-ad.components";


@NgModule({
  declarations: [
    AlertComponent,
    AddSpaceDirective,
    OnlynumberDirective,
    AdHostDirective,
    AdBannerComponent,
    ProductAdComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    MaterialModule,
    AlertComponent,
    AddSpaceDirective,
    OnlynumberDirective,
    AdHostDirective,
    AdBannerComponent,
    ProductAdComponent
  ]
})
export class SharedModule { }
