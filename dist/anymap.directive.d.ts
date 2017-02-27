/// <reference path="../def/anychart.d.ts" />
import { ElementRef, OnInit } from '@angular/core';
import { AnychartService } from './anychart.service';
export declare class AnymapDirective implements OnInit {
    private el;
    private acService;
    constructor(el: ElementRef, acService: AnychartService);
    acType: string;
    acData: any;
    acTitle: any;
    acLegend: any;
    acInstance: anychart.charts.Map;
    acChartDraw: (chart: anychart.core.Chart) => any;
    acGeoData: string;
    ngOnInit(): void;
}
