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
        this.mySeriesData = anychart.data.set([
            { 'id': 'AU.WA', 'value': 300 },
            { 'id': 'AU.JB', 'value': 230 },
            { 'id': 'AU.NS', 'value': 240 },
            { 'id': 'AU.VI', 'value': 275 },
            { 'id': 'AU.NT', 'value': 130 },
            { 'id': 'AU.TS', 'value': 190 },
            { 'id': 'AU.CT', 'value': 100 },
            { 'id': 'AU.SA', 'value': 305 },
            { 'id': 'AU.QL', 'value': 190 }
        ]);
    }
    AppComponent.prototype.ngAfterViewInit = function () {
        this.acService.drawAll();
    };
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-app',
            template: "<div anymap style=\"width: 800px; height: 400px\" acType=\"choropleth\" [acData]=\"mySeriesData\" acGeoData=\"anychart.maps.australia\" acTitle=\"Simple Map Demo\"></div>",
        }), 
        __metadata('design:paramtypes', [components_1.AnychartService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map