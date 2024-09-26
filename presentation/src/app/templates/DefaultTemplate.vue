<script setup lang="ts">
export interface DefaultTemplateConfig {
  title: string;
}

const props = defineProps<{
  config: DefaultTemplateConfig;
}>();
</script>

<template>
  <h1>{{ props.config.title }}</h1>
  <slot name="main" />
</template>

<style scoped>
</style>
