/// <reference path="../def/anychart.d.ts" />
import { ElementRef, OnInit } from '@angular/core';
import { AnychartService } from './anychart.service';
export declare class AnystockDirective implements OnInit {
    private el;
    private acService;
    constructor(el: ElementRef, acService: AnychartService);
    acInstance: anychart.charts.Stock;
    acChartDraw: (chart: anychart.core.Chart) => any;
    ngOnInit(): void;
}
