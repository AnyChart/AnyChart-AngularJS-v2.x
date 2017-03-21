import { Component, OnInit } from '@angular/core';
import { AnychartService } from 'anychart-angular2/components';


declare var get_msft_daily_short_data: Function;
declare var get_orcl_daily_short_data: Function;
declare var get_csco_daily_short_data: Function;
declare var get_ibm_daily_short_data: Function;

@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: `<div anystock style="width: 100%; height: 521px;" acTitle="Simple Stock Demo" [acInstance]="myChart" [acChartDraw]="selectRange"></div>`,
})
export class AppComponent {

  constructor(private acService: AnychartService) {
    // create data tables on loaded data
    let msftDataTable = anychart.data.table();
    msftDataTable.addData(get_msft_daily_short_data());

    let orclDataTable = anychart.data.table();
    orclDataTable.addData(get_orcl_daily_short_data());

    let cscoDataTable = anychart.data.table();
    cscoDataTable.addData(get_csco_daily_short_data());

    let ibmDataTable = anychart.data.table();
    ibmDataTable.addData(get_ibm_daily_short_data());

    let firstPlot = this.myChart.plot(0);
    firstPlot.area(msftDataTable.mapAs({'value': 4})).name('MSFT');

    let secondPlot = this.myChart.plot(1);
    secondPlot.splineArea(orclDataTable.mapAs({'value': 4})).fill('#1976d2 0.65').stroke('1.5 #1976d2').name('ORCL');

    let thirdPlot = this.myChart.plot(2);
    thirdPlot.stepArea(cscoDataTable.mapAs({'value': 4})).fill('#ef6c00 0.65').stroke('1.5 #ef6c00').name('CSCO');

    let forthPlot = this.myChart.plot(3);
    forthPlot.line(msftDataTable.mapAs({'value': 4})).name('MSFT').tooltip(null);
    forthPlot.spline(orclDataTable.mapAs({'value': 4})).name('ORCL').tooltip(null);
    forthPlot.stepLine(cscoDataTable.mapAs({'value': 4})).name('CSCO').tooltip(null);

    this.myChart.scroller().area(msftDataTable.mapAs({'value': 4}));
  }

  myChart = anychart.stock();

  selectRange = function(chart: any) {
    chart.selectRange('2005-01-03', '2005-11-20');
  };

  ngAfterViewInit() {
    this.acService.drawAll();
  }

}
