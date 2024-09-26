<script setup lang="ts">
export interface ExampleComponentConfig {
  name: string;
}

const props = defineProps<{
  config: ExampleComponentConfig;
}>();
</script>

<template>
  <p>Hello {{ props.config.name }}!</p>
</template>

<style scoped>
</style>
