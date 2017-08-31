/// <reference path="../def/anychart.d.ts"/>

/* tslint:disable:member-ordering */
import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { AnychartService } from './anychart.service';

@Directive({
    selector: '[anychartStage]'
})
export class AnychartStageDirective implements OnInit {
    constructor(
        private el: ElementRef,
        private acService: AnychartService
    ) { }

    @Input() acInstance: anychart.graphics.vector.Stage;

    ngOnInit() {
        let stage = this.acInstance || anychart.graphics.create(this.el.nativeElement);

        let charts = this.acService.getCharts();
        for (let key in charts) {
            let chart = charts[key];
            if (!chart.container) {
                chart.container = stage;
            }
        }
    }

}

