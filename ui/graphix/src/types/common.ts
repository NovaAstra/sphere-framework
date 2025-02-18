import type { Chart, Mark, Composition, AxisComponent, LegendComponent } from "@antv/g2"

export type Spec = (Mark | Composition | AxisComponent | Omit<LegendComponent, 'type'>) & {
  width?: number;
  height?: number;
  depth?: number;
  autoFit?: boolean;
};

export type Options = Spec & {
  children?: Array<Options & { type: unknown }>
}

export type Adaptor<O = Options> = {
  chart: Chart;
  options: O;
}