<script lang="ts">
export interface Props {

}
</script>

<script setup lang="ts">
defineProps<Props>()
</script>

<template>
  <div v-bind="$attrs"></div>
</template>