<style scoped></style>

<template>
  <div id="app">
    자식 컴포넌트에서 받은 값: {{ mesg }}
    <child-component v-on:show-log="printText"></child-component>
  </div>
</template>

<script>
import Vue3403Comp from '../components/vue3403/Vue3403Comp.vue';
export default {
  props: [],
  data() {
    return {
      mesg: null,
    };
  },
  methods: {
    printText(num) {
      debugger;
      // 매개변수를 넘길 수 있는 방법 : 매개변수 지정, arguments, rest 연산자, 분해할당 사용
      this.$data.mesg = num;
    },
  },
  components: {
    'child-component': Vue3403Comp,
  },
};
</script>
