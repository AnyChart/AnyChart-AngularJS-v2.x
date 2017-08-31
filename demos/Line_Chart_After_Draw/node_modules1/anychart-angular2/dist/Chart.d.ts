export declare class Chart {
    private instance_;
    private container_;
    private chartDraw_;
    constructor(instance_?: anychart.core.Chart, container_?: (HTMLElement | anychart.graphics.vector.Stage), chartDraw_?: Function);
    instance: (anychart.core.Chart | null);
    container: (HTMLElement | anychart.graphics.vector.Stage);
    chartDraw: (Function);
    applyDraw(): void;
}
