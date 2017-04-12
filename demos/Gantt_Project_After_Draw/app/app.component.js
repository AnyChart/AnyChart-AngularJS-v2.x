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
        this.myRawData = [
            { id: "1", name: "Phase 1 - Strategic Plan", progressValue: "14%", actualStart: 951350400000, actualEnd: 954201600000 },
            { id: "2", name: "Self-Assessment", parent: "1", progressValue: "25%", actualStart: 951350400000, actualEnd: 951955200000 },
            { id: "3", name: "Define business vision", parent: "2", progressValue: "0%", actualStart: 951408000000, actualEnd: 951440400000, connectTo: "4", connectorType: "FinishStart" },
            { id: "4", name: "Identify available skills, information and support", parent: "2", progressValue: "0%", actualStart: 951494400000, actualEnd: 951526800000, connectTo: "5", connectorType: "FinishStart" },
            { id: "5", name: "Decide whether to proceed", parent: "2", progressValue: "0%", actualStart: 951753600000, actualEnd: 951786000000, connectTo: "7", connectorType: "FinishStart" },
            { id: "6", name: "Define the Opportunity", parent: "1", progressValue: "27%", actualStart: 951782400000, actualEnd: 952992000000 },
            { id: "7", name: "Research the market and competition", parent: "6", progressValue: "0%", actualStart: 951840000000, actualEnd: 951872400000, connectTo: "8", connectorType: "FinishStart" },
            { id: "8", name: "Interview owners of similar businesses", parent: "6", progressValue: "60%", actualStart: 951868800000, actualEnd: 952473600000, connectTo: "9", connectorType: "FinishStart" },
            { id: "9", name: "Identify needed resources", parent: "6", progressValue: "0%", actualStart: 952531200000, actualEnd: 952650000000, connectTo: "10", connectorType: "FinishStart" },
            { id: "10", name: "Identify operating cost elements", parent: "6", progressValue: "0%", actualStart: 952704000000, actualEnd: 952995600000 },
            { id: "26", name: "Phase 2 - Define the Business Opportunity", progressValue: "19%", actualStart: 954201600000, actualEnd: 957312000000 },
            { id: "27", name: "Define the Market", parent: "26", progressValue: "28%", actualStart: 954201600000, actualEnd: 955670400000 },
            { id: "28", name: "Access available information", parent: "27", progressValue: "0%", actualStart: 954262800000, actualEnd: 954295200000, connectTo: "35", connectorType: "StartStart" },
            { id: "29", name: "Create market analysis plan", parent: "27", progressValue: "0%", actualStart: 954349200000, actualEnd: 954468000000 },
            { id: "30", name: "Implement market analysis plan", parent: "27", progressValue: "40%", actualStart: 954460800000, actualEnd: 955065600000, connectTo: "31", connectorType: "FinishStart" },
            { id: "31", name: "Identify competition", parent: "27", progressValue: "60%", actualStart: 955065600000, actualEnd: 955411200000, connectTo: "32", connectorType: "FinishStart" },
            { id: "32", name: "Summarize the market", parent: "27", progressValue: "0%", actualStart: 955472400000, actualEnd: 955591200000, connectTo: "33", connectorType: "FinishStart" },
            { id: "33", name: "Identify target market niche", parent: "27", progressValue: "0%", actualStart: 955645200000, actualEnd: 955677600000 }
        ];
        this.myData = anychart.data.tree(this.myRawData, anychart.enums.TreeFillingMethod.AS_TABLE);
        this.myAfterDraw = function (chart) {
            chart.fitAll();
            var loader = window.parent.document.getElementById('loader-wrapper');
            if (loader) {
                loader.style.display = 'none';
            }
        };
    }
    AppComponent.prototype.ngAfterViewInit = function () {
        this.acService.drawAll();
    };
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-app',
            template: "<div anygantt style=\"width: 100%; height: 479px\" acType=\"ganttProject\" acTitle=\"My Gantt Project\" [acData]=\"myData\" [acChartDraw]=\"myAfterDraw\"  acSplitterPosition=\"225\"></div>",
        }), 
        __metadata('design:paramtypes', [components_1.AnychartService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map