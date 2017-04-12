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
        this.dataSet = anychart.data.set([
            ['1986', 41, 36, 31],
            ['1987', 37, 34, 29],
            ['1988', 48, 47, 40],
            ['1989', 53, 52, 45],
            ['1990', 49, 49, 42],
            ['1991', 49, 47, 40],
            ['1992', 41, 39, 33],
            ['1993', 39, 36, 31],
            ['1994', 34, 31, 27],
            ['1995', 38, 35, 30],
            ['1996', 29, 28, 24],
            ['1997', 33, 32, 27],
            ['1998', 31, 33, 28],
            ['1999', 31, 32, 28],
            ['2000', 37, 40, 34],
            ['2001', 35, 40, 34],
            ['2002', 43, 48, 41],
            ['2003', 43, 47, 40],
            ['2004', 51, 47, 40],
            ['2005', 56, 50, 43],
            ['2006', 62, 56, 48]
        ]);
        this.myChart = anychart.line();
        this.myAfterDraw = function (chart) {
            chart.padding([10, 180, 5, 20]);
            chart.title().padding([0, 0, 5, 0]);
            chart.yScale().minimum(20).maximum(65);
            // tune y scale
            chart.yScale().ticks().set([20, 28, 38, 48, 65]);
            // change yAxis title text settings
            chart.yAxis().title('DTI');
            // format y axis labels
            chart.yAxis().labels().textFormatter("{%Value}%");
            // create extra y axis on the right
            // primary Y Scale setup earlier is used by default
            // setting it up explictly look like this: chart.yAxis(1).scale(chart.yScale());
            chart.yAxis(1).orientation('right').enabled(true);
            chart.yAxis(1).labels().textFormatter("{%Value}%");
            // create range axes markers
            chart.rangeMarker().from(20).to(28).fill('#4db6ac 0.4');
            chart.rangeMarker(1).from(28).to(38).fill('#80cbc4 0.4');
            chart.rangeMarker(2).from(38).to(48).fill('#b2dfdb 0.4');
            chart.rangeMarker(3).from(38).to(65).fill('#e0f2f1 0.4');
            // create text axes markers
            chart.textMarker()
                .value(24)
                .fontColor('#263238')
                .align('right')
                .anchor('leftcenter')
                .offsetX(10)
                .useHtml(true)
                .text('<strong>Below 28%</strong><br/>Buy! Buy! Buy!');
            chart.textMarker(1)
                .value(33)
                .fontColor('#263238')
                .align('right')
                .anchor('leftcenter')
                .offsetX(10)
                .useHtml(true)
                .text('<strong>28%-38%</strong><br/>Marginally affordable with<br/>fixed-rate mortgages.');
            chart.textMarker(2)
                .value(43)
                .fontColor('#263238')
                .align('right')
                .anchor('leftcenter')
                .offsetX(10)
                .useHtml(true)
                .text('<strong>38%-48%</strong><br/>Purchase is not affordable<br/>with fixed-rate mortgage.');
            chart.textMarker(3)
                .value(56)
                .align('right')
                .fontColor('#263238')
                .anchor('leftcenter')
                .offsetX(10)
                .useHtml(true)
                .text('<strong>48% or greater</strong><br/>Not affordable with fixed<br/>or interest only.<br/>Negative amortization<br/>only option.');
            chart.legend().fontSize(13).padding([0, 0, 15, 0]);
            var loader = window.parent.document.getElementById('loader-wrapper');
            if (loader) {
                loader.style.display = 'none';
            }
        };
        var seriesData_1 = this.dataSet.mapAs({ x: [0], value: [1] });
        var seriesData_2 = this.dataSet.mapAs({ x: [0], value: [2] });
        var seriesData_3 = this.dataSet.mapAs({ x: [0], value: [3] });
        // create 3 line series and tune them using chaining calls
        var s1;
        var s2;
        var s3;
        s1 = this.myChart.line(seriesData_1);
        s1.name('Beechum County').hoverMarkers().enabled(true).type('circle').size(4);
        s2 = this.myChart.line(seriesData_2);
        s2.name('Greenbow County').hoverMarkers().enabled(true).type('circle').size(4);
        s3 = this.myChart.line(seriesData_3);
        s3.name('Belle Reve Parish').hoverMarkers().enabled(true).type('circle').size(4);
    }
    AppComponent.prototype.ngAfterViewInit = function () {
        this.acService.drawAll();
    };
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-app',
            template: "<div anychart style=\"width: 100%; height: 521px\" [acInstance]=\"myChart\" acTitle=\"Debt-To-Income Ratios 1986-2006\" acLegend=\"true\" [acChartDraw]=\"myAfterDraw\"></div>",
        }), 
        __metadata('design:paramtypes', [components_1.AnychartService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map