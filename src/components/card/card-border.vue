<template>
  <div class="card-border">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'card-border',
  props: {
    card_title: {
      type: String,
      default: null,
    }
  }
}
</script>
<style scoped>
  .card-border {
    padding: 10px;
    border-radius: 5px;
    width: 100%;
  }
</style>
