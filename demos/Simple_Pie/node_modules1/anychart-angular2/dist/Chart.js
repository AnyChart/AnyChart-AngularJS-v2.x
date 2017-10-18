"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Chart = (function () {
    function Chart(instance_, container_, chartDraw_) {
        this.instance_ = instance_;
        this.container_ = container_;
        this.chartDraw_ = chartDraw_;
    }
    Object.defineProperty(Chart.prototype, "instance", {
        get: function () {
            return this.instance_;
        },
        set: function (val) {
            if (val) {
                this.instance_ = val;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Chart.prototype, "container", {
        get: function () {
            return this.container_;
        },
        set: function (val) {
            if (val) {
                this.container_ = val;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Chart.prototype, "chartDraw", {
        get: function () {
            return this.chartDraw_;
        },
        set: function (val) {
            if (val) {
                this.chartDraw_ = val;
            }
        },
        enumerable: true,
        configurable: true
    });
    Chart.prototype.applyDraw = function () {
        if (this.instance_) {
            this.instance_.container(this.container_);
            this.instance_.draw();
            if (this.chartDraw_)
                this.chartDraw_.call(this.instance_, this.instance_);
        }
    };
    return Chart;
}());
exports.Chart = Chart;
