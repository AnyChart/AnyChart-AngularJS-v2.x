/// <reference path="../def/anychart.d.ts" />
import { ElementRef, OnInit } from '@angular/core';
import { AnychartService } from './anychart.service';
export declare class AnyganttDirective implements OnInit {
    private el;
    private acService;
    constructor(el: ElementRef, acService: AnychartService);
    acType: string;
    acData: any;
    acTitle: any;
    acLegend: any;
    acInstance: anychart.charts.Gantt;
    acChartDraw: (chart: anychart.core.Chart) => any;
    acSplitterPosition: string;
    acChartId: string;
    ngOnInit(): void;
}
