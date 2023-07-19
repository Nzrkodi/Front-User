<template>
  <div class="modal fade" :id="idModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog" :class="mdSize">
      <div class="modal-content">
        <div class="modal-header">
          <slot name="header"></slot>
        </div>
        <div class="modal-body">
          <slot name="body"></slot>
        </div>
        <div class="modal-footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
  const props = defineProps({
    mdSize: {
      type   : String,
      default: ''
    },
    idModal: {
      type   : String,
      default: "myModal"
    }
  })
</script>