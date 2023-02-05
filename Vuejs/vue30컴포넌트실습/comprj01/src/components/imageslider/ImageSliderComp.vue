<style scoped>
.sliderWrap > img {
  object-fit: cover;
  box-shadow: 0 8px 16px rgb(0 0 0 / 50%);
}

.sliderWrap {
  width: 1000px;
  overflow: hidden;
  position: relative;
  margin: 0 auto;
  margin-top: 20px;
}

.sliderWrap > span {
  display: block;
  position: absolute;
  top: calc(50% - 1.25rem);
  font-size: 2.5rem;
  transition: all 0.5s ease;
}

.sliderWrap span:hover {
  cursor: pointer;
}

.sliderWrap > div {
  display: inline-block;
  width: 100%;
}

p {
  position: absolute;
  bottom: 10px;
  right: 55px;
  background: rgba(0, 0, 0, 0.4);
  color: white;
  padding: 10px;
}

span.left {
  left: 30px;
}

span.right {
  right: 30px;
  rotate: (180);
}

span.right > img {
  transform: rotate(180deg);
  width: 70%;
}

span.left > img {
  width: 70%;
}

.dot {
  position: relative;
}

.dot > span {
  height: 12px;
  width: 12px;
  margin: 0 4px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: all 0.5s ease;
  box-shadow: inset 0 1px 1px 0px rgb(0 0 0 / 60%), 0px 1px 1px 0px white;
}

.dot > span:hover,
.dot > span.active {
  cursor: pointer;
  background-color: #717171;
}
</style>

<template>
  <div class="sliderWrap">
    <span class="left" v-on:click="toLeft">
      <img src="/assets/arrow.png" alt="" />
    </span>
    <span class="right" v-on:click="toRight">
      <img src="/assets/arrow.png" alt="" />
    </span>
    <p>{{ activateImg.name }}</p>
    <img
      v-bind:src="activateImg.src"
      v-bind:alt="activateImg.name"
      v-bind:style="{
        width: `${width}px`,
        height: `${height}px`,
      }"
    />
    <div class="dot">
      <span
        v-for="(image, index) in option"
        v-bind:key="image.id"
        v-on:click="setActive(index)"
        v-bind:class="{ active: currIdx === index }"
      >
      </span>
    </div>
  </div>
</template>
<script>
export default {
  props: ['option'],
  data() {
    return {
      width: 800,
      height: 450,
      currIdx: 0,
    };
  },
  //template: ``,
  methods: {
    toLeft(e) {
      // this.$data.currIdx <= 0 ? (this.$data.currIdx = this.$props.option.length - 1) : (this.$data.currIdx = this.$data.currIdx - 1);
      this.$data.currIdx = Math.max(this.$data.currIdx - 1, 0);
    },
    toRight(e) {
      // this.$data.currIdx >= this.$props.option.length - 1 ? (this.$data.currIdx = 0) : (this.$data.currIdx = this.$data.currIdx + 1);
      this.$data.currIdx = Math.min(
        this.$data.currIdx + 1,
        this.$props.option.length - 1,
      );
    },
    setActive(index) {
      this.$data.currIdx = index;
    },
  },
  computed: {
    activateImg() {
      return this.$props.option[this.$data.currIdx];
    },
  },
};
</script>
