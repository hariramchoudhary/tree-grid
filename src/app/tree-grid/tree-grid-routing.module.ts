import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from "./list/list.component";


const routes: Routes = [
  {
    path: "",
    component: ListComponent,
    pathMatch: "full",
    data: {
      title: "home"
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TreeGridRoutingModule { }
