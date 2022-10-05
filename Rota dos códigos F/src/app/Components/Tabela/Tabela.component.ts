import { Component, OnInit } from '@angular/core';
import {ClimaTempoService} from './clima.service';

@Component({
  selector: 'app-Tabela',
  templateUrl: './Tabela.component.html',
  styleUrls: ['./Tabela.component.scss']
})
export class AppComponent implements OnInit {
  tabela!:any;


  ngOnInit(): void {

    this.tabela = this.ClimaTempoService.getTabelaClimaTempo();


   }

   constructor(private ClimaTempoService:ClimaTempoService)
   {}

}

