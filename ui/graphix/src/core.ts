export enum ChartEngineEnum {
  ANTV = 'antv',
  ECHARTS = 'echarts'
}

export enum ChartLibraryEnum {
  G2_PLOT = 'g2plot',
  ECHARTS = 'echarts'
}

export abstract class ChartView {
  protected constructor(
    public engine: ChartEngineEnum,
    public library: ChartLibraryEnum,
    public name: string
  ) { }
}

export abstract class AntvChartView extends ChartView {
  protected constructor(library: ChartLibraryEnum, name: string) {
    super(ChartEngineEnum.ANTV, library, name)
  }
}

export abstract class G2PlotChartView extends AntvChartView {
  protected constructor(name: string) {
    super(ChartLibraryEnum.G2_PLOT, name)
  }
}

export abstract class EchartsChartView extends ChartView {
  protected constructor(name: string) {
    super(ChartEngineEnum.ECHARTS, ChartLibraryEnum.ECHARTS, name)
  }
}

export class ChartFactory {
  public static CHART_VIEW_MAP = new Map<string, Map<string, ChartView>>();

  public registerChartView(
    engine: string,
    name: string,
    view: ChartView
  ): Map<string, Map<string, ChartView>> {
    const engineMap =
      ChartFactory.CHART_VIEW_MAP.get(engine)
      || new Map<string, ChartView>();

    engineMap.set(name, view);
    return ChartFactory.CHART_VIEW_MAP.set(engine, engineMap);
  }

  public getChartView(engine: string, name: string): ChartView {
    return ChartFactory.CHART_VIEW_MAP.get(engine)?.get(name)!
  }
}