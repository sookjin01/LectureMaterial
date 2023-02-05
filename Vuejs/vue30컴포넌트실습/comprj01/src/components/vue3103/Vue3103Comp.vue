<style scoped>
span {
  border: 1px dashed blue;
  background-color: lightgray;
  padding: 5px;
}
</style>

<template>
  <div>
    파일 컴포넌트가 등록되었습니다!
    <span v-on:click="lclick">
      {{ localmsg }}
    </span>
  </div>
</template>

<script>
export default {
  props: ['localmsg'],
  data() {
    return {};
  },
  methods: {
    lclick(e) {
      console.log(e.target);
    },
  },
};
</script>
