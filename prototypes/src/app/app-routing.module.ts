import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'cart-edit-template',
    loadChildren: () => import('./cart-edit-template/cart-edit-template.module').then( m => m.CartEditTemplatePageModule)
  },
  {
    path: 'cart-checkout-template',
    loadChildren: () => import('./cart-checkout-template/cart-checkout-template.module').then( m => m.CartCheckoutTemplatePageModule)
  },
  {
    path: 'option-dialog-template',
    loadChildren: () => import('./option-dialog-template/option-dialog-template.module').then( m => m.OptionDialogTemplatePageModule)
  },
  {
    path: 'cart-dialog-template',
    loadChildren: () => import('./cart-dialog-template/cart-dialog-template.module').then( m => m.CartDialogTemplatePageModule)
  },
    path: 'form-template',
    loadChildren: () => import('./form-template/form-template.module').then( m => m.FormTemplatePageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }