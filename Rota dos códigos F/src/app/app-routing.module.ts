import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GraficoComponent } from './Components/Grafico/Grafico.component';
import { AppComponent } from './Components/Tabela/Tabela.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';



const routes: Routes = [
  {
    path: "grafico",
    component: GraficoComponent
  },
  {
    path: "tabela",
    component: AppComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }








