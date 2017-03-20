"use strict";
class Chart {
    constructor(instance_, container_, chartDraw_) {
        this.instance_ = instance_;
        this.container_ = container_;
        this.chartDraw_ = chartDraw_;
    }
    get instance() {
        return this.instance_;
    }
    set instance(val) {
        if (val) {
            this.instance_ = val;
        }
    }
    get container() {
        return this.container_;
    }
    set container(val) {
        if (val) {
            this.container_ = val;
        }
    }
    get chartDraw() {
        return this.chartDraw_;
    }
    set chartDraw(val) {
        if (val) {
            this.chartDraw_ = val;
        }
    }
    applyDraw() {
        if (this.instance_) {
            this.instance_.container(this.container_);
            this.instance_.draw();
            if (this.chartDraw_)
                this.chartDraw_.call(this.instance_, this.instance_);
        }
    }
}
exports.Chart = Chart;
