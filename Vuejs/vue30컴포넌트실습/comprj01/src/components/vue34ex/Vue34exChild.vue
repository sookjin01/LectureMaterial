<style scoped></style>

<template>
  <div class="component-child">
    Child counter : {{ num }} <br />
    <button name="child" v-on:click="addCounter">+</button>
    <button name="child" v-on:click="subCounter">-</button>
  </div>
</template>

<script>
export default {
  props: ['num'],
  data() {
    return {};
  },
  //template: ``,
  methods: {
    addCounter() {
      this.$emit('add-counter', +1);
    },
    subCounter() {
      this.$emit('sub-counter', -1);
    },
  },
};
</script>
