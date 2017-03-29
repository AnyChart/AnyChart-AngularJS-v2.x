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
var anychart_service_1 = require('./anychart.service');
var AnychartStageDirective = (function () {
    function AnychartStageDirective(el, acService) {
        this.el = el;
        this.acService = acService;
    }
    AnychartStageDirective.prototype.ngOnInit = function () {
        var stage = this.acInstance || anychart.graphics.create(this.el.nativeElement);
        var charts = this.acService.getCharts();
        for (var key in charts) {
            var chart = charts[key];
            if (!chart.container) {
                chart.container = stage;
            }
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], AnychartStageDirective.prototype, "acInstance", void 0);
    AnychartStageDirective = __decorate([
        core_1.Directive({
            selector: '[anychartStage]'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, anychart_service_1.AnychartService])
    ], AnychartStageDirective);
    return AnychartStageDirective;
}());
exports.AnychartStageDirective = AnychartStageDirective;
