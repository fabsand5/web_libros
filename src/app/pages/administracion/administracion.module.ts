import { AdministracionRoutingModule } from './administracion-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PrimengModule } from 'src/app/modules/primeng/primeng.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FichaComponent } from './libro/ficha/ficha.component';
import { LibroComponent } from './libro/libro.component';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [
    LibroComponent,
    FichaComponent
   ],
  imports: [
    CommonModule,
    AdministracionRoutingModule,
    RouterModule,
    PrimengModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class AdministracionModule { }
