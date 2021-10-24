import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from './angular-material.module';
import {AlertComponent} from './components/alert/alert.component';
import {AddSpaceDirective} from "./directives/addSpace.directive";
import {OnlynumberDirective} from "./directives/onlyNumbers.directive";
import {AdHostDirective} from "./directives/adHost.directive";
import {AdBannerComponent} from './components/ad-banner/ad-banner.component';
import {ProductAdComponent} from "./components/product-ad.components";
import {MaturityPipe} from "./pipes/maturity.pipe";
import {TimepassDirective} from "./directives/timepass.directive";
import {CountdownDirective} from "./directives/countDown.directive";


@NgModule({
  declarations: [
    AlertComponent,
    AddSpaceDirective,
    OnlynumberDirective,
    TimepassDirective,
    AdHostDirective,
    CountdownDirective,
    AdBannerComponent,
    ProductAdComponent,
    MaturityPipe
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    MaterialModule,
    AlertComponent,
    AddSpaceDirective,
    OnlynumberDirective,
    AdHostDirective,
    TimepassDirective,
    CountdownDirective,
    AdBannerComponent,
    ProductAdComponent,
    MaturityPipe
  ]
})
export class SharedModule {
}
