import type { Options } from "../types"
import type { G2Chart } from './chart';

import EE from '@antv/event-emitter';
import { mergeWithArrayCoverage } from "../utilties"
import { Chart } from './chart';

export type PickOptions = Pick<
  Options,
  | 'autoFit'
  | 'width'
  | 'height'
>;

const SOURCE_ATTRIBUTE_NAME = 'data-chart-source-type';

export abstract class Plot<O extends PickOptions> extends EE {
  public readonly container: HTMLElement;

  public options: O;

  public chart: G2Chart;

  public constructor(container: string | HTMLElement, options: O) {
    super();
    this.container = typeof container === 'string' ? document.getElementById(container) : container;

    this.options = this.mergeOption(options);
    
    this.createG2();
  }

  private createG2() {
    if (!this.container) {
      throw Error('The container is not initialized!');
    }

    this.chart = new Chart(this.getChartOptions());
    this.container.setAttribute(SOURCE_ATTRIBUTE_NAME, 'Sphere Charts');
  }

  public update(options: Partial<O>) {
    this.options = this.mergeOption(options);
  }

  protected mergeOption(options: Partial<O>) {
    return mergeWithArrayCoverage({}, this.getBaseOptions(), this.getDefaultOptions(), options);
  }

  private getBaseOptions(): Partial<Options> {
    return { type: 'view', autoFit: true };
  }

  private getChartOptions() {
    return {
      container: this.container,
    }
  }

  protected abstract getDefaultOptions(): Partial<Options>;
}