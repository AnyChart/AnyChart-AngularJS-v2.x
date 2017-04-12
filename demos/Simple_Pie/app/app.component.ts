import { Component, OnInit } from '@angular/core';
import { AnychartService } from 'anychart-angular2/components';
import { enableProdMode } from '@angular/core';

enableProdMode();

@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: `<div anychart style="width: 100%; height: 521px;" acType="pie" acTitle="My Simple Pie" [acData]="myData"></div>`,
})
export class AppComponent {

  constructor(private acService: AnychartService) { }

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
