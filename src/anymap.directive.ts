/// <reference path="../def/anychart.d.ts"/>

/* tslint:disable:member-ordering */
import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { AnychartService } from './anychart.service';

@Directive({
    selector: '[anymap]'
})
export class AnymapDirective implements OnInit {
    constructor(
        private el: ElementRef,
        private acService: AnychartService
    ) { }

    @Input() acType: string;
    @Input() acData: any;
    @Input() acTitle: any;
    @Input() acLegend: any;
    @Input() acInstance: anychart.charts.Map;
    @Input() acChartDraw: (chart: anychart.core.Chart) => any;
    @Input() acGeoData: string;

    ngOnInit() {
        let instance = this.acInstance || anychart[this.acType || 'map'](this.acData);

        instance.title(this.acTitle);

        instance.geoData(this.acGeoData);
        instance.title(this.acTitle);

        if (this.acLegend)
            instance.legend(this.acLegend !== 'false');

        this.acService.addChart(instance, this.acChartDraw, undefined, this.el.nativeElement);
    }

}

