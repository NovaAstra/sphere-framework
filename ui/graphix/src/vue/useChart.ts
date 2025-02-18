import { useTemplateRef } from "vue"

export function useChart() {
  const container = useTemplateRef<HTMLElement>("chart")

  return {
    container
  }
}