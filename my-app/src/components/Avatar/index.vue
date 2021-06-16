<template>
  <img
    class="avatar-container"
    :src="url"
    :style="{ height: height + 'px', width: width + 'px' }"
  />
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      require: true,
    },
    height: {
      type: Number,
      default:100
    },
    width: {
      type: Number,
      default:100
    },
  },
};
</script>

<style scoped>
.avatar-container {
  border-radius: 50%;
  object-fit: fill;
}
</style>>


