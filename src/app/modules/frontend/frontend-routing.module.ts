import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { FrontendComponent } from './frontend.component';

const routes: Routes = [
  {
    path:'',component:FrontendComponent,
    children:[
      {
        path:'auth',
        loadChildren: ()=>import('./modules/auth/auth.module').then(m=>m.AuthModule)
      }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class FrontendRoutingModule { }
