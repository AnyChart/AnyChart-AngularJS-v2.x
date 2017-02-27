import { Injectable } from '@angular/core';
import { Chart } from './Chart';

@Injectable()
export class AnychartService {
  private uid_: number = 0;

  private charts_: { [key:string]:Chart; } = {};

  private getUid_() {
    return 'acServiceChart' + this.uid_++;
  }

  public addChart(instance: anychart.core.Chart, chartDraw?: (chart: anychart.core.Chart) => any, id?: string, container?: (HTMLElement|anychart.graphics.vector.Stage)){
    if (!instance) return;
    if (!id) id = this.getUid_();
    if (!this.charts_[id]) {
      this.charts_[id] = new Chart(instance, container, chartDraw);
    }
  }

  public getCharts() {
    return this.charts_;
  }

  public getChart(id: string) {
    return this.charts_[id];
  }

  public drawAll() {
    for (let key in this.charts_) {
      this.charts_[key].applyDraw();
    }
  }
}
