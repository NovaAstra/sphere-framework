import { defineComponent } from "vue"
import { Plots } from "../plots"
import { useChart } from "./useChart"


export function createFactory(name: string) {
  return defineComponent({
    setup() {
      const { container } = useChart()

      return () => (
        <div ref="chart">122</div>
      )
    }
  })
}