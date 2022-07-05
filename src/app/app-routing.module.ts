import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: 'administracion',
    loadChildren: () => import('src/app/pages/administracion/administracion.module').then(m => m.AdministracionModule)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'administracion'
  }
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
