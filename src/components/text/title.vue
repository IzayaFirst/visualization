<template>
  <div class="title">
    {{msg}}
  </div>
</template>
<script>
export default {
  name: 'TitleText',
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
};
</script>
<style scoped>
  .title {
    font-size: 30px;
    font-weight: 700;
    padding: 15px 0;
  }
</style>
