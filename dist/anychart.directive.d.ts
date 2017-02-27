/// <reference path="../def/anychart.d.ts" />
import { ElementRef, OnInit } from '@angular/core';
import { AnychartService } from './anychart.service';
export declare class AnychartDirective implements OnInit {
    private el;
    private acService;
    constructor(el: ElementRef, acService: AnychartService);
    acType: string;
    acData: any;
    acTitle: any;
    acLegend: any;
    acInstance: anychart.core.Chart;
    acChartDraw: (chart: anychart.core.Chart) => any;
    acChartId: string;
    ngOnInit(): void;
}
