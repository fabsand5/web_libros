import { FichaComponent } from './ficha/ficha.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { LibroTO } from 'src/app/rest/models/libroTO';
import { AdministracionDAOService } from 'src/app/rest/administracion-dao.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Table } from 'primeng/table';
import data from 'src/assets/libros.json';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.scss'],
  providers: [ConfirmationService, DialogService, MessageService, AdministracionDAOService]
})
export class LibroComponent implements OnInit {

  jsonObject: JSON;

  libros:any;
  libro:LibroTO;
  listaLibros: LibroTO[]=[];

  activeItemLibro: LibroTO;

  @ViewChild('dt') dt: Table | undefined;

  constructor(
    private confirmationService: ConfirmationService, 
    public dialogService: DialogService, 
    private messageService: MessageService,
    public service: AdministracionDAOService,
    private router:Router, 
    private route: ActivatedRoute, 
  ) 
  {
    this.libros = data;
  }

  ngOnInit(): void 
  {
    this.listaLibros = data.libro.map((item: LibroTO) => 
    {
      return {
        id: item.id,
        titulo : item.titulo,
        autor : item.autor,
        editorial: item.editorial,
        descripcion: item.descripcion
      }
    })

    //console.log(this.listaLibros);
  }


  applyFilterGlobal($event: any, stringVal: any) { 
    this.dt?.filterGlobal(($event.target as HTMLInputElement).value, stringVal); 
  } 

  goFicha(){
    //console.log(this.activeItemLibro);
    {
      this.router.navigate(["/administracion/libro/ficha"], { queryParams: { 
        id: this.activeItemLibro.id, 
        titulo: this.activeItemLibro.titulo,
        autor: this.activeItemLibro.autor,
        editorial: this.activeItemLibro.editorial,
        descripcion: this.activeItemLibro.descripcion
      }});

    }
  }
}
