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
        this.counter = 0;
        this.myData = null;
        this.myAfterDraw = function (chart) {
            chart.yScale().minimum(0).maximum(100);
            var loader = window.parent.document.getElementById('loader-wrapper');
            if (loader) {
                loader.style.display = 'none';
            }
        };
        var data = [];
        for (var i = 0; i < 50; i++)
            data.push([this.counter++, this.random()]);
        this.myData = anychart.data.set(data);
    }
    AppComponent.prototype.ngAfterViewInit = function () {
        this.acService.drawAll();
        var self = this;
        setInterval(function () {
            self.myData.remove(0);
            self.myData.append([self.counter++, self.random()]);
        }, 500);
    };
    AppComponent.prototype.random = function () {
        return 100 - Math.round(100 * Math.random());
    };
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-app',
            template: "<div anychart style=\"width: 100%; height: 521px;\" [acData]=\"myData\" [acChartDraw]=\"myAfterDraw\"></div>",
        }), 
        __metadata('design:paramtypes', [components_1.AnychartService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map