import { LibroComponent } from './libro/libro.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FichaComponent } from './libro/ficha/ficha.component';


const routes: Routes = [
    {
        path: '',
        
        data: {
            title: 'Administración'
        },
        children: [
            {
                path: 'libro',
                component: LibroComponent,
                data :{ subtitle:'LIBRO'}
            },
            {
                path: 'libro/ficha',
                component: FichaComponent,
                data: { subtitle:'FICHA'}
            },
            {
                path: '',
                redirectTo: 'libro',
                pathMatch: 'full',
            }
        ]
    },
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class AdministracionRoutingModule { }
