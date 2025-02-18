import { defineComponent, Fragment } from "vue"

export const ErrorBoundary = defineComponent({
  name: "ErrorBoundary",
  setup(_props, { slots }) {
    return () => {
      return (
        <Fragment>{slots.default?.()}</Fragment>
      )
    }
  }
})