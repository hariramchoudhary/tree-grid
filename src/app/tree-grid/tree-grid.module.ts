import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeGridModule as Tree } from '@syncfusion/ej2-angular-treegrid';
import { VirtualScrollService, TreeGridComponent } from '@syncfusion/ej2-angular-treegrid';
import { PageService, SortService, FilterService,EditService,ToolbarService } from '@syncfusion/ej2-angular-treegrid';
import { ResizeService, ExcelExportService, PdfExportService, ContextMenuService } from '@syncfusion/ej2-angular-treegrid';
import {ButtonModule} from '@syncfusion/ej2-angular-buttons';
import { DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns';
import { TreeGridRoutingModule } from './tree-grid-routing.module';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [
    ListComponent
    
  ],
  imports: [
    CommonModule,
    TreeGridRoutingModule,
    Tree,
    ButtonModule,
    DropDownListAllModule
  ],
  providers: [ 
    VirtualScrollService, 
    PageService,
    SortService,
    FilterService,
    EditService,
    SortService, ResizeService, 
    ExcelExportService, 
    PdfExportService, ContextMenuService,
    ToolbarService],
})
export class TreeGridModule { }
