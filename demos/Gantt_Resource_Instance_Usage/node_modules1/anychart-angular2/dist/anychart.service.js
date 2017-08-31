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
var Chart_1 = require('./Chart');
var AnychartService = (function () {
    function AnychartService() {
        this.uid_ = 0;
        this.charts_ = {};
    }
    AnychartService.prototype.getUid_ = function () {
        return 'acServiceChart' + this.uid_++;
    };
    AnychartService.prototype.addChart = function (instance, chartDraw, id, container) {
        if (!instance)
            return;
        if (!id)
            id = this.getUid_();
        if (!this.charts_[id]) {
            this.charts_[id] = new Chart_1.Chart(instance, container, chartDraw);
        }
    };
    AnychartService.prototype.getCharts = function () {
        return this.charts_;
    };
    AnychartService.prototype.getChart = function (id) {
        return this.charts_[id];
    };
    AnychartService.prototype.drawAll = function () {
        for (var key in this.charts_) {
            this.charts_[key].applyDraw();
        }
    };
    AnychartService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], AnychartService);
    return AnychartService;
}());
exports.AnychartService = AnychartService;
