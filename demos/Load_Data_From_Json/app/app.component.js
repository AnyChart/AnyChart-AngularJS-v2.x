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
var http_1 = require('@angular/http');
require('rxjs/Rx');
var AppComponent = (function () {
    function AppComponent(acService, http) {
        this.acService = acService;
        this.http = http;
    }
    AppComponent.prototype.ngAfterViewInit = function () {
        var service = this.acService;
        this.http.get('Load_Data_From_Json/data/sample1.json')
            .map(function (response) { return response.json(); })
            .subscribe(function (data) {
            //chart here is wrapper over the real chart instance.
            var chart = service.getChart('myChart');
            if (chart && chart.instance.data)
                chart.instance.data(data);
            service.drawAll();
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-app',
            template: "<div anychart  acType=\"line\" style=\"width: 800px; height: 400px\" acChartId=\"myChart\"></div>",
        }), 
        __metadata('design:paramtypes', [components_1.AnychartService, http_1.Http])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map