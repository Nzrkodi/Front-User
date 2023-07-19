<template>
  <button type="button" @click="sendEvent" class="btn" v-bind="$attrs">
    <slot></slot>
  </button>
</template>
<script setup>
  const emits = defineEmits(['event-click'])
  const props = defineProps({
    typeButton: String,
    rowData   : Object,
    dataId    : Number
  })

  const sendEvent = () => {
    emits('event-click', props)
  }
</script>