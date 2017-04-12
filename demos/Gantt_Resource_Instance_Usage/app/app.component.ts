import { Component, OnInit } from '@angular/core';
import { AnychartService } from 'anychart-angular2/components';
import { enableProdMode } from '@angular/core';

enableProdMode();

declare var getData: Function;

@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: `<div anygantt style="width: 100%; height: 479px" [acInstance]="myChart" acTitle="My Gantt Project" [acData]="myData" [acChartDraw]="myAfterDraw" acSplitterPosition="175"></div>`,
})
export class AppComponent {

  constructor(private acService: AnychartService) { }

  myData = anychart.data.tree(getData(), anychart.enums.TreeFillingMethod.AS_TABLE);

  myChart = anychart.ganttResource();

  myAfterDraw = function(chart: any) {
    chart.zoomTo(Date.UTC(2014, 3, 8), Date.UTC(2014, 3, 13));

    var dataGrid = chart.dataGrid();

    // styling the data grid
    dataGrid.rowEvenFill('#e3f2fd');
    dataGrid.rowOddFill('#f6fbfe');
    dataGrid.rowHoverFill('#fff8e1');
    dataGrid.rowSelectedFill('#ffecb3');
    dataGrid.columnStroke('2 #90caf9');
    // disabling default 0-column
    dataGrid.column(0, false);

    // getting chart's timeline
    var timeline = chart.getTimeline();

    // styling the timeline
    timeline.rowEvenFill('#e4e5ea 0.5');
    timeline.rowOddFill('#fff');
    timeline.rowHoverFill('#f4e8ec');
    timeline.rowSelectedFill('#d1b8bf');
    timeline.columnStroke('2 #90caf9');
  };

  ngAfterViewInit() {
    this.acService.drawAll();
  }
}
