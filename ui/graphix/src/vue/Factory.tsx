import { defineComponent } from "vue"

export function createFactory() {
  return defineComponent({
    setup() {
      return () => (
        <div>12</div>
      )
    }
  })
}