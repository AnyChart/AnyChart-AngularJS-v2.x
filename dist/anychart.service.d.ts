import { Chart } from './Chart';
export declare class AnychartService {
    private uid_;
    private charts_;
    private getUid_();
    addChart(instance: anychart.core.Chart, chartDraw?: (chart: anychart.core.Chart) => any, id?: string, container?: (HTMLElement | anychart.graphics.vector.Stage)): void;
    getCharts(): {
        [key: string]: Chart;
    };
    drawAll(): void;
}
