import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogService, DynamicDialogConfig, DynamicDialogModule, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AdministracionDAOService } from 'src/app/rest/administracion-dao.service';
import { LibroTO } from '../../../../rest/models/libroTO';


@Component({
  selector: 'app-ficha',
  templateUrl: './ficha.component.html',
  styleUrls: ['./ficha.component.scss'],
  providers: [ConfirmationService, DialogService, MessageService, AdministracionDAOService]
})
export class FichaComponent implements OnInit {

  @ViewChild('emailAgente') emailElement: ElementRef;

  id:any;
  titulo:any;
  autor:any;
  editorial:any;
  descripcion:any;

  constructor(
    public service: AdministracionDAOService,
    private router:Router, 
    private route: ActivatedRoute, 
    private messageService: MessageService, 
    private confirmationService: ConfirmationService,
    public dialogService: DialogService,
    public dynamicDialogModule: DynamicDialogModule) 
    {
      this.route.queryParams.subscribe(params => 
        {
          this.id = params['id'];
          this.titulo = params['titulo'];
          this.autor = params['autor'];
          this.editorial = params['editorial'];
          this.descripcion = params['descripcion'];
        });
    
        //this.libro = JSON.parse(sessionStorage.getItem("libro"));
  }

  ngOnInit(): void {
    //console.log(this.libro);
    
  }

 
}
