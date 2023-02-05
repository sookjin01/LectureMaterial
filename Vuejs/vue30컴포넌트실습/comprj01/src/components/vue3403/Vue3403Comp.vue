<style scoped></style>

<template>
  <div>
    <button v-on:click="showLog">show</button>
  </div>
</template>

<script>
export default {
  props: [],
  data() {
    return {
      num: 0,
    };
  },
  methods: {
    showLog(e) {
      debugger;
      this.$data.num = this.$data.num + 1;
      this.$emit('show-log', this.$data.num);
    },
  },
};
</script>
