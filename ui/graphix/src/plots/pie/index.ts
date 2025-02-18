import type { PieOptions } from "./type"

import { Plot } from "../../core/plot"

export class Pie extends Plot<PieOptions> {
  public static getDefaultOptions(): Partial<PieOptions> {
    return {

    }
  }

  protected getDefaultOptions() {
    return Pie.getDefaultOptions();
  }
}

export type { PieOptions }