export class Chart {
  constructor(
    private instance_?: anychart.core.Chart,
    private container_?: (HTMLElement|anychart.graphics.vector.Stage),
    private chartDraw_?: Function
  ) { }

  get instance(): (anychart.core.Chart|null) {
    return this.instance_;
  }

  set instance(val: anychart.core.Chart) {
    if (val) {
      this.instance_ = val;
    }
  }

  get container(): (HTMLElement|anychart.graphics.vector.Stage) {
    return this.container_;
  }

  set container(val: HTMLElement|anychart.graphics.vector.Stage) {
    if (val) {
      this.container_ = val;
    }
  }

  get chartDraw(): (Function) {
    return this.chartDraw_;
  }

  set chartDraw(val: Function) {
    if (val) {
      this.chartDraw_ = val;
    }
  }

  public applyDraw() {
    if (this.instance_) {
      this.instance_.container(this.container_);
      this.instance_.draw();
      if (this.chartDraw_)
        this.chartDraw_.call(this.instance_, this.instance_);
    }
  }
}
