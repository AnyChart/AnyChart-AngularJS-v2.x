/// <reference path="../def/anychart.d.ts"/>

/* tslint:disable:member-ordering */
import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { AnychartService } from './anychart.service';

@Directive({
  selector: '[anychart]'
})
export class AnychartDirective implements OnInit {
  constructor(
    private el: ElementRef,
    private acService: AnychartService
  ) { }

  @Input() acType: string;
  @Input() acData: any;
  @Input() acTitle: any;
  @Input() acLegend: any;
  @Input() acInstance: anychart.core.Chart;
  @Input() acChartDraw: (chart: anychart.core.Chart) => any;

  ngOnInit() {
    let instance = this.acInstance || anychart[this.acType || 'line']();

    if (instance.data && this.acData)
      instance.data(this.acData);

    instance.title(this.acTitle);

    if (this.acLegend) {
      let legend = this.acLegend;
      if (typeof legend == 'string')
        legend = legend !== 'false'; //turns to boolean.
      instance.legend(legend);
    }

    this.acService.addChart(instance, this.acChartDraw, undefined, this.el.nativeElement);
  }

}

