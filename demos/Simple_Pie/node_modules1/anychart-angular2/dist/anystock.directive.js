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
const core_1 = require('@angular/core');
const anychart_service_1 = require('./anychart.service');
let AnystockDirective = class AnystockDirective {
    constructor(el, acService) {
        this.el = el;
        this.acService = acService;
    }
    ngOnInit() {
        let instance = this.acInstance;
        this.acService.addChart(instance, this.acChartDraw, this.acChartId, this.el.nativeElement);
    }
};
__decorate([
    core_1.Input(), 
    __metadata('design:type', Object)
], AnystockDirective.prototype, "acInstance", void 0);
__decorate([
    core_1.Input(), 
    __metadata('design:type', Function)
], AnystockDirective.prototype, "acChartDraw", void 0);
__decorate([
    core_1.Input(), 
    __metadata('design:type', String)
], AnystockDirective.prototype, "acChartId", void 0);
AnystockDirective = __decorate([
    core_1.Directive({
        selector: '[anystock]'
    }), 
    __metadata('design:paramtypes', [core_1.ElementRef, anychart_service_1.AnychartService])
], AnystockDirective);
exports.AnystockDirective = AnystockDirective;
