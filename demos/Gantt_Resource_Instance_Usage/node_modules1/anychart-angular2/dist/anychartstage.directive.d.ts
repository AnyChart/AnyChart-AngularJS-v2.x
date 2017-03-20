/// <reference path="../def/anychart.d.ts" />
import { ElementRef, OnInit } from '@angular/core';
import { AnychartService } from './anychart.service';
export declare class AnychartStageDirective implements OnInit {
    private el;
    private acService;
    constructor(el: ElementRef, acService: AnychartService);
    acInstance: anychart.graphics.vector.Stage;
    ngOnInit(): void;
}
