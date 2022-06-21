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
  {
    path: 'form-template',
    loadChildren: () => import('./form-template/form-template.module').then( m => m.FormTemplatePageModule)
  },
  {
    path: 'form-binding',
    loadChildren: () => import('./form-binding/form-binding.module').then( m => m.FormBindingPageModule)
  },
  {
    path: 'form-send-data',
    loadChildren: () => import('./form-send-data/form-send-data.module').then( m => m.FormSendDataPageModule)
  },
  {
    path: 'form-receive-data',
    loadChildren: () => import('./form-receive-data/form-receive-data.module').then( m => m.FormReceiveDataPageModule)
  },
  {
    path: 'list-template',
    loadChildren: () => import('./list-template/list-template.module').then( m => m.ListTemplatePageModule)
  },
  {
    path: 'form-input-template',
    loadChildren: () => import('./form-input-template/form-input-template.module').then( m => m.FormInputTemplatePageModule)
  },
  {
    path: 'condition-template',
    loadChildren: () => import('./condition-template/condition-template.module').then( m => m.ConditionTemplatePageModule)
  },
  {
    path: 'agreement-template',
    loadChildren: () => import('./agreement-template/agreement-template.module').then( m => m.AgreementTemplatePageModule)
  },
  {
    path: 'consent-info-user-template',
    loadChildren: () => import('./consent-info-user-template/consent-info-user-template.module').then( m => m.ConsentInfoUserTemplatePageModule)
  },
  {
    path: 'consent-info-manager-template',
    loadChildren: () => import('./consent-info-manager-template/consent-info-manager-template.module').then( m => m.ConsentInfoManagerTemplatePageModule)
  },
  {
    path: 'home-template',
    loadChildren: () => import('./home-template/home-template.module').then( m => m.HomeTemplatePageModule)
  },
  {
    path: 'condition-timer-template',
    loadChildren: () => import('./condition-timer-template/condition-timer-template.module').then( m => m.ConditionTimerTemplatePageModule)
  },
  {
    path: 'consent-register-template',
    loadChildren: () => import('./consent-register-template/consent-register-template.module').then( m => m.ConsentRegisterTemplatePageModule)
  },
  {
    path: 'option-dialog-binding',
    loadChildren: () => import('./option-dialog-binding/option-dialog-binding.module').then( m => m.OptionDialogBindingPageModule)
  },
  {
    path: 'form-confirm-dialog',
    loadChildren: () => import('./form-confirm-dialog/form-confirm-dialog.module').then( m => m.FormConfirmDialogPageModule)
  },
  {
    path: 'form-service',
    loadChildren: () => import('./form-service/form-service.module').then( m => m.FormServicePageModule)
  },
  {
    path: 'option-dialog-no-submit',
    loadChildren: () => import('./option-dialog-no-submit/option-dialog-no-submit.module').then( m => m.OptionDialogNoSubmitPageModule)
  },
  {
    path: 'consent-i',
    loadChildren: () => import('./consent-i/consent-i.module').then( m => m.ConsentIPageModule)
  },
  {
    path: 'consent-j',
    loadChildren: () => import('./consent-j/consent-j.module').then( m => m.ConsentJPageModule)
  },
  {
    path: 'demo-a',
    loadChildren: () => import('./demo-a/demo-a.module').then( m => m.DemoAPageModule)
  },
  {
    path: 'demo-b',
    loadChildren: () => import('./demo-b/demo-b.module').then( m => m.DemoBPageModule)
  },
  {
    path: 'demo-c',
    loadChildren: () => import('./demo-c/demo-c.module').then( m => m.DemoCPageModule)
  },
  {
    path: 'demo-d',
    loadChildren: () => import('./demo-d/demo-d.module').then( m => m.DemoDPageModule)
  },
  {
    path: 'dev2deli',
    loadChildren: () => import('./dev2deli/dev2deli.module').then( m => m.Dev2deliPageModule)
  },
  {
    path: 'dev2deli-b',
    loadChildren: () => import('./dev2deli-b/dev2deli-b.module').then( m => m.Dev2deliBPageModule)
  },
  {
    path: 'dev2deli-a',
    loadChildren: () => import('./dev2deli-a/dev2deli-a.module').then( m => m.Dev2deliAPageModule)
  },
  {
    path: 'dev2deli-c',
    loadChildren: () => import('./dev2deli-c/dev2deli-c.module').then( m => m.Dev2deliCPageModule)
  },
  {
    path: 'cdexp-a',
    loadChildren: () => import('./cdexp-a/cdexp-a.module').then( m => m.CdexpAPageModule)
  },
  {
    path: 'cdexp-b',
    loadChildren: () => import('./cdexp-b/cdexp-b.module').then( m => m.CdexpBPageModule)
  },
  {
    path: 'demo-input',
    loadChildren: () => import('./demo-input/demo-input.module').then( m => m.DemoInputPageModule)
  },  {
    path: 'demo-kyc',
    loadChildren: () => import('./demo-kyc/demo-kyc.module').then( m => m.DemoKycPageModule)
  },
  {
    path: 'demo-kyc-address-idcard',
    loadChildren: () => import('./demo-kyc-address-idcard/demo-kyc-address-idcard.module').then( m => m.DemoKycAddressIdcardPageModule)
  },
  {
    path: 'demo-kyc-address-current',
    loadChildren: () => import('./demo-kyc-address-current/demo-kyc-address-current.module').then( m => m.DemoKycAddressCurrentPageModule)
  },
  {
    path: 'demo-kyc-tel',
    loadChildren: () => import('./demo-kyc-tel/demo-kyc-tel.module').then( m => m.DemoKycTelPageModule)
  },







];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
