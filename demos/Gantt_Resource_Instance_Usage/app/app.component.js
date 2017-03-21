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
var AppComponent = (function () {
    function AppComponent(acService) {
        this.acService = acService;
        this.myData = anychart.data.tree(getData(), anychart.enums.TreeFillingMethod.AS_TABLE);
        this.myChart = anychart.ganttResource();
        this.myAfterDraw = function (chart) {
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
    }
    AppComponent.prototype.ngAfterViewInit = function () {
        this.acService.drawAll();
    };
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-app',
            template: "<div anygantt style=\"width: 100%; height: 600px\" [acInstance]=\"myChart\" acTitle=\"My Gantt Project\" [acData]=\"myData\" [acChartDraw]=\"myAfterDraw\"></div>",
        }), 
        __metadata('design:paramtypes', [components_1.AnychartService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map