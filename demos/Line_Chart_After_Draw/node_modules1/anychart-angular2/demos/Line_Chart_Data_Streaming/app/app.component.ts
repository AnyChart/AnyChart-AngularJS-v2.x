import { Component, OnInit } from '@angular/core';
import { AnychartService } from 'anychart-angular2/components';


@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: `<div anychart style="width: 800px; height: 400px" [acData]="myData" [acChartDraw]="myAfterDraw"></div>`,
})
export class AppComponent {

  constructor(private acService: AnychartService) {
    let data: Array<Array<Number>> = [];
    for (let i = 0; i < 50; i++)
      data.push([this.counter++, this.random()]);
    this.myData = anychart.data.set(data);
  }

  counter = 0;

  myData: any = null;

  myAfterDraw = function(chart: any) {
    chart.yScale().minimum(0).maximum(100);
  };


  ngAfterViewInit() {
    this.acService.drawAll();
    let self = this;
    setInterval(function() {
      self.myData.remove(0);
      self.myData.append([self.counter++, self.random()]);
    }, 500);
  }

  random() {
    return 100 - Math.round(100 * Math.random());
  }
}
