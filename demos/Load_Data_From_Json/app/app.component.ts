import {Component} from '@angular/core';
import {AnychartService} from 'anychart-angular2/components';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';
import {enableProdMode} from '@angular/core';

enableProdMode();

@Component({
    moduleId: module.id,
    selector: 'my-app',
    template: `<div anychart  acType="line" style="width: 100%; height: 521px;" acChartId="myChart"></div>`,
})
export class AppComponent {

    constructor(private acService:AnychartService, private http:Http) {
    }

    ngAfterViewInit() {
        var service = this.acService;
        this.http.get('data/sample1.json')
            .map(response => response.json())
            .subscribe(function (data) {
                //chart here is wrapper over the real chart instance.
                var chart = service.getChart('myChart');

                if (chart && chart.instance.data)
                    chart.instance.data(data);

                service.drawAll();
            });
    }
}
