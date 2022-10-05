import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Chart, registerables } from 'chart.js';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  template:``,
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {


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



      this.rows.push({ casa: this.result.map((coins:any)=>[coins.wind_speed]), b: 'Make', c: 'KFC' });










      this.date= this.result.map((coins:any)=>coins.date)


      this.humidity= this.result.map((coins:any)=>coins.humidity)

      this.wind_speed= this.result.map((coins:any)=>coins.wind_speed)
      this.meanpressure= this.result.map((coins:any)=>coins.meanpressure)
      this.meantemp= this.result.map((coins:any)=>coins.date)





      this.chart = new Chart('canvas', {
        type: 'bar',
        data: {

         labels: this.date,

          datasets: [
            {

             data: this.wind_speed,
              borderColor: 'red',

              label: 'velocidade do vento',
              backgroundColor: 'red',
              borderWidth: 3,
            },
            {

              data: this.humidity,
               borderColor: 'blue',

               label: 'humidade',
               backgroundColor: 'blue',
               borderWidth: 3,
             },
             {

              data: this.meantemp,
               borderColor: 'green',

               label: 'Tempo médio',
               backgroundColor: 'green',
               borderWidth: 3,
             },
             {

              data: this.meanpressure,
               borderColor: 'black',

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
