"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var components_1 = require('anychart-angular2/components');
var core_2 = require('@angular/core');
core_2.enableProdMode();
var AppComponent = (function () {
    function AppComponent(acService) {
        this.acService = acService;
        this.myChart = anychart.stock();
        this.selectRange = function (chart) {
            chart.selectRange('2005-01-03', '2005-11-20');
        };
        // create data tables on loaded data
        var msftDataTable = anychart.data.table();
        msftDataTable.addData(get_msft_daily_short_data());
        var orclDataTable = anychart.data.table();
        orclDataTable.addData(get_orcl_daily_short_data());
        var cscoDataTable = anychart.data.table();
        cscoDataTable.addData(get_csco_daily_short_data());
        var ibmDataTable = anychart.data.table();
        ibmDataTable.addData(get_ibm_daily_short_data());
        var firstPlot = this.myChart.plot(0);
        firstPlot.area(msftDataTable.mapAs({ 'value': 4 })).name('MSFT');
        var secondPlot = this.myChart.plot(1);
        secondPlot.splineArea(orclDataTable.mapAs({ 'value': 4 })).fill('#1976d2 0.65').stroke('1.5 #1976d2').name('ORCL');
        var thirdPlot = this.myChart.plot(2);
        thirdPlot.stepArea(cscoDataTable.mapAs({ 'value': 4 })).fill('#ef6c00 0.65').stroke('1.5 #ef6c00').name('CSCO');
        var forthPlot = this.myChart.plot(3);
        forthPlot.line(msftDataTable.mapAs({ 'value': 4 })).name('MSFT').tooltip(null);
        forthPlot.spline(orclDataTable.mapAs({ 'value': 4 })).name('ORCL').tooltip(null);
        forthPlot.stepLine(cscoDataTable.mapAs({ 'value': 4 })).name('CSCO').tooltip(null);
        this.myChart.scroller().area(msftDataTable.mapAs({ 'value': 4 }));
    }
    AppComponent.prototype.ngAfterViewInit = function () {
        this.acService.drawAll();
    };
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-app',
            template: "<div anystock style=\"width: 100%; height: 521px;\" acTitle=\"Simple Stock Demo\" [acInstance]=\"myChart\" [acChartDraw]=\"selectRange\"></div>",
        }), 
        __metadata('design:paramtypes', [components_1.AnychartService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map