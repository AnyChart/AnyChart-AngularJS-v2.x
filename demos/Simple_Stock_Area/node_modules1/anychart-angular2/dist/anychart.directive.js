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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var anychart_service_1 = require("./anychart.service");
var AnychartDirective = (function () {
    function AnychartDirective(el, acService) {
        this.el = el;
        this.acService = acService;
    }
    AnychartDirective.prototype.ngOnInit = function () {
        var instance = this.acInstance || anychart[this.acType || 'line']();
        if (instance.data && this.acData)
            instance.data(this.acData);
        instance.title(this.acTitle);
        if (this.acLegend) {
            var legend = this.acLegend;
            if (typeof legend == 'string')
                legend = legend !== 'false';
            instance.legend(legend);
        }
        this.acService.addChart(instance, this.acChartDraw, this.acChartId, this.el.nativeElement);
    };
    return AnychartDirective;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], AnychartDirective.prototype, "acType", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], AnychartDirective.prototype, "acData", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], AnychartDirective.prototype, "acTitle", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], AnychartDirective.prototype, "acLegend", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], AnychartDirective.prototype, "acInstance", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Function)
], AnychartDirective.prototype, "acChartDraw", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], AnychartDirective.prototype, "acChartId", void 0);
AnychartDirective = __decorate([
    core_1.Directive({
        selector: '[anychart]'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef,
        anychart_service_1.AnychartService])
], AnychartDirective);
exports.AnychartDirective = AnychartDirective;
