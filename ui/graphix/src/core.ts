export abstract class ChartView {

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