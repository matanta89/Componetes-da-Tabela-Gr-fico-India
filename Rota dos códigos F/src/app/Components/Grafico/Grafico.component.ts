import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-Grafico',
  templateUrl: './Grafico.component.html',
  styleUrls: ['./Grafico.component.scss']
})
export class GraficoComponent implements OnInit {

  //tabela!:any;
  tabela:any = []
  result: any;
  meantemp: any;
  humidity: any;
  wind_speed: any;
  meanpressure: any;
  date: any;
  chart: any = [];
  chart2: any = [];
  rows:any = [];
  columns:any = [];
  casa = [];
  dados =[];


  constructor(private service: AuthService) {
    Chart.register(...registerables);
  }

  ngOnInit() {

    this.service.cryptoData().then((res) => {
      this.result = res;

      console.log("1",this.result.map((coins:any)=>coins.wind_speed));


      this.columns = [{ name: 'casa', }, { name: 'b' }, { name: 'c' }];
      this.rows = [
        //{ c1: this.humidity, c2: this.humidity, c3: this.humidity },
        //{ a: 'Dany', b: 'Male', c: 'KFC' },
        //{ a: 'Molly', b: 'Female', c: 'Burger King' }

      ];
      this.rows.push({ casa: this.result.map((coins:any)=>[coins.wind_speed]), b: 'Make', c: 'KFC' });










      this.date= this.result.map((coins:any)=>coins.date)
     // console.log("a",this.date);

      this.humidity= this.result.map((coins:any)=>coins.humidity)
      //console.log("b",this.humidity);
      this.wind_speed= this.result.map((coins:any)=>coins.wind_speed)
      this.meanpressure= this.result.map((coins:any)=>coins.meanpressure)
      this.meantemp= this.result.map((coins:any)=>coins.date)

      // console.log(this.coinPrice);
      // console.log(this.coinName);



      this.chart = new Chart('canvas', {
        type: 'bar',
        data: {
         // labels: this.coinName,
         labels: this.date,

          datasets: [
            {
             // data: this.coinPrice,
             data: this.wind_speed,
              borderColor: 'red',
             // fill: false,
              label: 'velocidade do vento',
              backgroundColor: 'red',
              borderWidth: 3,
            },
            {
              // data: this.coinPrice,
              data: this.humidity,
               borderColor: 'blue',
              // fill: false,
               label: 'humidade',
               backgroundColor: 'blue',
               borderWidth: 3,
             },
             {
              // data: this.coinPrice,
              data: this.meantemp,
               borderColor: 'green',
              // fill: false,
               label: 'Tempo médio',
               backgroundColor: 'green',
               borderWidth: 3,
             },
             {
              // data: this.coinPrice,
              data: this.meanpressure,
               borderColor: 'black',
              // fill: false,
               label: 'Pressão méida',
               backgroundColor: 'black',
               borderWidth: 3,
             },
          ],
        },
      });

    });
  }


}

