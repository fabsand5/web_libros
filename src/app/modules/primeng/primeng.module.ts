import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionModule } from 'primeng/accordion';     //accordion and accordion tab
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { TooltipModule } from 'primeng/tooltip';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { MenuModule } from 'primeng/menu';
import { PaginatorModule } from 'primeng/paginator';
import { AutoCompleteModule } from 'primeng/autocomplete';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ToastModule} from 'primeng/toast';
import {ListboxModule} from 'primeng/listbox';
import {KeyFilterModule} from 'primeng/keyfilter';
import { TagModule } from 'primeng/tag';
import {SelectButtonModule} from 'primeng/selectbutton';
import {CalendarModule} from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {InputSwitchModule} from 'primeng/inputswitch';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {PickListModule} from 'primeng/picklist';
import {InputMaskModule} from 'primeng/inputmask';
import {InputNumberModule} from 'primeng/inputnumber';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AccordionModule,
    ButtonModule,
    CardModule,
    TooltipModule,
    DynamicDialogModule,
    DropdownModule,
    TableModule,
    MenuModule,
    PaginatorModule,
    AutoCompleteModule,
    ConfirmDialogModule,
    ToastModule,
    ListboxModule,
    KeyFilterModule,
    TagModule,
    SelectButtonModule,
    CalendarModule,
    FormsModule,
    MessagesModule,
    MessageModule,
    InputSwitchModule,
    OverlayPanelModule,
    PickListModule,
    InputMaskModule,
    InputNumberModule
  ],
  exports: [
    AccordionModule,
    ButtonModule,
    InputTextModule,
    CardModule,
    TooltipModule,
    DynamicDialogModule,
    DropdownModule,
    TableModule,
    MenuModule,
    PaginatorModule,
    AutoCompleteModule,
    ConfirmDialogModule,
    ToastModule,
    ListboxModule,
    KeyFilterModule,
    TagModule,
    SelectButtonModule,
    CalendarModule,
    MessagesModule,
    MessageModule,
    InputSwitchModule,
    OverlayPanelModule,
    PickListModule,
    InputMaskModule,
    InputNumberModule
  ]
})
export class PrimengModule { }
