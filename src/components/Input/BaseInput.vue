<template>
  <label for="form-label">{{ label }} <span v-if="required" class="text-danger fs-5">*</span></label>
  <input class="form-control"
  v-bind="$attrs"
  :value="modelValue"
  @input="$emit('update:modelValue', $event.target.value)">
</template>
<script setup>

const props = defineProps({
label: {
  type: String,
  default: 'label input'
},
required: {
  type: Boolean,
  default: false
},
modelValue: [String, Number],
})
</script>