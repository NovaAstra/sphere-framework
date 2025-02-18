import { computed, defineComponent, useAttrs } from "vue"
import { Plots } from "../plots"
import { useChart } from "./useChart"
import { ErrorBoundary } from "./ErrorBoundary"

export function createFactory<P>(name: string) {
  return defineComponent<P>({
    inheritAttrs: false,
    setup() {
      const attrs = useAttrs()

      // const { container } = useChart()

      const computedAttributes = computed(() => ({
        ...attrs,
        class: [
          attrs.class as string[],
        ],
        style: [
          attrs.style as Partial<CSSStyleDeclaration>,
          { height: 'inherit', flex: 1 }
        ],
      }))


      return () => (
        <ErrorBoundary>
          <div v-bind={computedAttributes}></div>
        </ErrorBoundary>
      )
    }
  })
}