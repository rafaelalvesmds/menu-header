import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuLateralComponent } from './shared/menu-lateral/menu-lateral.component';

const routes: Routes = [
  {
    path: '', component: MenuLateralComponent, children: [
      { path: 'home', loadChildren: () => import('../app/pages/home/home.module').then(m => m.HomeModule) }
    ]
  }]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
