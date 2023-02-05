<style scoped>
.component-parent {
  width: 50%;
  background-color: lightblue;
  padding: 5%;
}

.component-child {
  width: 80%;
  background-color: lightgray;
  padding: 5% 5% 10% 0;
}
</style>
<template>
  <div id="app" class="component-parent">
    Parent counter : {{ counter }} <br />
    <button name="parent" v-on:click="addCounter(+10)">+</button>
    <button name="parent" v-on:click="subCounter(-10)">-</button>
    <p></p>

    <!-- Child 컴포넌트를 등록하고 counter 데이터 속성을 props로 전달한다. -->
    <component-child
      v-bind:num="counter"
      v-on:add-counter="addCounter"
      v-on:sub-counter="subCounter"
    >
    </component-child>
  </div>
</template>
<script>
import Vue34exChild from './Vue34exChild.vue';
export default {
  props: ['num'],
  data() {
    return {
      counter: 30,
    };
  },
  //template: ``,
  methods: {
    addCounter(param) {
      this.$data.counter = this.$data.counter + param;
    },
    subCounter(param) {
      this.$data.counter = this.$data.counter + param;
    },
  },
  components: {
    'component-child': Vue34exChild,
  },
};
</script>
