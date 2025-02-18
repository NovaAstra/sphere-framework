import type { BarOptions } from "./type"

import { Plot } from "../../core/plot"

export class Bar extends Plot<BarOptions> {
  public static getDefaultOptions(): Partial<BarOptions> {
    return {

    }
  }

  protected getDefaultOptions() {
    return Bar.getDefaultOptions();
  }
}

export type { BarOptions }