/// <reference path="../def/anychart.d.ts"/>

/* tslint:disable:member-ordering */
import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { AnychartService } from './anychart.service';

@Directive({
    selector: '[anygantt]'
})
export class AnyganttDirective implements OnInit {
    constructor(
        private el: ElementRef,
        private acService: AnychartService
    ) { }

    @Input() acType: string;
    @Input() acData: any;
    @Input() acTitle: any;
    @Input() acLegend: any;
    @Input() acInstance: anychart.charts.Gantt;
    @Input() acChartDraw: (chart: anychart.core.Chart) => any;
    @Input() acSplitterPosition: string;

    ngOnInit() {
        let instance = this.acInstance || anychart[this.acType]();

        if (instance.data && this.acData)
            instance.data(this.acData);

        instance.title(this.acTitle);

        if (this.acSplitterPosition) {
            if (this.acSplitterPosition.match(/^\d+%$/)) {
                instance.splitterPosition(this.acSplitterPosition)
            } else if (this.acSplitterPosition.match(/^\d+$/)) {
                instance.splitterPosition(+this.acSplitterPosition);
            }
        }

        this.acService.addChart(instance, this.acChartDraw, undefined, this.el.nativeElement);
    }

}

