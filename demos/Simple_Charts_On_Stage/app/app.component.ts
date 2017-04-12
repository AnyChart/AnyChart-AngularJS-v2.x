import { Component, OnInit } from '@angular/core';
import { AnychartService } from 'anychart-angular2/components';
import { enableProdMode } from '@angular/core';

enableProdMode();

@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: `<div anychartStage style="width: 100%; height: 521px;"></div>`,
})
export class AppComponent {

  constructor(private acService: AnychartService) {
    let pie = anychart.pie(this.myData);
    pie.title('Top 5 pancake fillings');
    pie.bounds(0, 0, '50%', '100%');


    let line = anychart.line(this.myData);
    line.title('Top 5 pancake fillings');
    line.bounds('50%', 0, '50%', '100%');

    this.acService.addChart(pie);
    this.acService.addChart(line, function(chart) {
      chart.title('After Draw Title');
    });
  }

  myData = [
    ["Chocolate", 5],
    ["Rhubarb compote", 2],
    ["Crêpe Suzette", 2],
    ["American blueberry", 2],
    ["Buttermilk", 1]
  ];


  ngAfterViewInit() {
    this.acService.drawAll();
  }
}
