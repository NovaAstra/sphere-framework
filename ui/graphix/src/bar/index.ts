import type { Column, ColumnOptions } from '@antv/g2plot/esm/plots/column'
import type { ChartSchema, G2PlotDrawOptions } from "../core"

import { G2PlotChartView } from "../core"

export class Bar extends G2PlotChartView<ColumnOptions, Column> {
  public async render(drawOptions: G2PlotDrawOptions): Promise<Column> {
    const { container } = drawOptions

    const initOptions: ColumnOptions = {}

    const { Column } = await import('@antv/g2plot/esm/plots/column')
    const instance = new Column(container, {})

    return instance
  }

  protected setupOptions(schema: ChartSchema, options: ColumnOptions) {

  }

  public constructor(name: string = 'bar') {
    super(name)
  }
}