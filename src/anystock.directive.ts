/// <reference path="../def/anychart.d.ts"/>

/* tslint:disable:member-ordering */
import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { AnychartService } from './anychart.service';

@Directive({
    selector: '[anystock]'
})
export class AnystockDirective implements OnInit {
    constructor(
        private el: ElementRef,
        private acService: AnychartService
    ) { }

    @Input() acInstance: anychart.charts.Stock;
    @Input() acChartDraw: (chart: anychart.core.Chart) => any;

    ngOnInit() {
        let instance = this.acInstance;
        this.acService.addChart(instance, this.acChartDraw, undefined, this.el.nativeElement);
    }

}

