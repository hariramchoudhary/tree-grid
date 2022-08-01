import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { VirtualScrollService, TreeGridComponent } from '@syncfusion/ej2-angular-treegrid';
import { dataSource, virtualData } from '../datasource';
import { getValue, isNullOrUndefined } from '@syncfusion/ej2-base';
import { BeforeOpenCloseEventArgs } from '@syncfusion/ej2-inputs';
import { MenuEventArgs } from '@syncfusion/ej2-navigations';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  providers: [VirtualScrollService]
})
export class ListComponent implements OnInit {

  public data: Object[] = [];
  public editSettings: Object = {};
  public contextMenuItems: Object[] =[];
  @ViewChild('treegrid')
  public treeGridObj: any;

  constructor() { }

  ngOnInit(): void {
    dataSource();
    this.data = virtualData;
    this.editSettings = {allowEditing: true, allowAdding: true, allowDeleting: true, mode:"Row"};
  //  this.contextMenuItems = ['AutoFit', 'AutoFitAll', 'SortAscending', 'SortDescending', 'Edit', 'Delete', 'Save', 'Cancel', 'PdfExport', 'ExcelExport', 'CsvExport', 'FirstPage', 'PrevPage', 'LastPage', 'NextPage', 'Indent', 'Outdent'];
    this.editSettings = {allowEditing: true, allowAdding: true, allowDeleting: true, mode:"Row"};
    this.contextMenuItems =  [
            {text: 'EditCol', target: '.e-headercell', id: 'editcol'},
            {text: 'AddCol', target: '.e-headercell', id: 'addcol'},
            {text: 'ViewCol', target: '.e-headercell', id: 'viewcol'},
            {text: 'DelCol', target: '.e-headercell', id: 'delcol'},
            {text: 'ChooseCol', target: '.e-headercell', id: 'choosecol'},
            {text: 'FreezeCol', target: '.e-headercell', id: 'freezecol'},
            {text: 'FilterCol', target: '.e-headercell', id: 'filtercol'},
            {text: 'MultiSort', target: '.e-headercell', id: 'multisort'},
            {text: 'AddNext', target: '.e-content', id: 'addnext'},
            {text: 'AddChild', target: '.e-content', id: 'addchild'},
            {text: 'EditRow', target: '.e-content', id: 'editrow'},
            {text: 'SelectRows', target: '.e-content', id: 'selectrows'},
            {text: 'DelRows', target: '.e-content', id: 'delrows'},
            {text: 'CopyAsNext', target: '.e-content', id: 'copyasnext'},
            {text: 'CopyAsChild', target: '.e-content', id: 'copyaschild'},
            {text: 'MoveAsNext', target: '.e-content', id: 'moveasnext'},
            {text: 'MoveAsChild', target: '.e-content', id: 'moveaschild'}
        ];
  }

contextMenuClick(args?: any): void {
    this.treeGridObj.getColumnByField('taskID');
    if (args.item.id === 'collapserow') {
        this.treeGridObj.collapseRow(<HTMLTableRowElement>(this.treeGridObj.getSelectedRows()[0]));
    } else {
        this.treeGridObj.expandRow(<HTMLTableRowElement>(this.treeGridObj.getSelectedRows()[0]));
        }
}
contextMenuOpen(arg?: any) : void {
    let elem: any = arg.event.target as Element ;
    
    let uid: string = elem.closest('.e-row').getAttribute('data-uid');
    console.log('uid', uid);
   
    // if (isNullOrUndefined(getValue('hasChildRecords', this.treeGridObj.grid.getRowObjectFromUID(uid).data))) {
    //     arg.cancel = true;
    // } else {
    //     let flag: boolean = getValue('expanded', this.treeGridObj.grid.getRowObjectFromUID(uid).data);
    //     let val: string = flag ? 'none' : 'block';
    //     document.querySelectorAll('li#expandrow')[0].setAttribute('style', 'display: ' + val + ';');
    //     val = !flag ? 'none' : 'block';
    //     document.querySelectorAll('li#collapserow')[0].setAttribute('style', 'display: ' + val + ';');
    // }

}
}
