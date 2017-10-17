import { Component, OnInit } from '@angular/core';
import { AnychartService } from 'anychart-angular2/components';


@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: `<div anymap style="width: 100%; height: 521px;" acType="choropleth" [acData]="mySeriesData" acGeoData="anychart.maps.australia" acTitle="Simple Map Demo"></div>`,
})
export class AppComponent {

  constructor(private acService: AnychartService) {
  }

  mySeriesData = anychart.data.set([
    {'id': 'AU.WA', 'value': 300},
    {'id': 'AU.JB', 'value': 230},
    {'id': 'AU.NS', 'value': 240},
    {'id': 'AU.VI', 'value': 275},
    {'id': 'AU.NT', 'value': 130},
    {'id': 'AU.TS', 'value': 190},
    {'id': 'AU.CT', 'value': 100},
    {'id': 'AU.SA', 'value': 305},
    {'id': 'AU.QL', 'value': 190}
  ]);

  ngAfterViewInit() {
    this.acService.drawAll();
  }

}
