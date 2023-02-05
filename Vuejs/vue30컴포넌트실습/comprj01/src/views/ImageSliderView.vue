<style scoped></style>

<template>
  <div>
    <ImageSliderComp v-bind:option="option" />
  </div>
</template>

<script>
import ImageSliderComp from '../components/imageslider/ImageSliderComp.vue';
export default {
  props: [],
  data() {
    return {
      option: [
        {
          src: `/images/slider/slider01.jpg`,
          name: '노을이 지고 난 후의 고성',
          id: 1,
        },
        {
          src: `/images/slider/slider02.jpg`,
          name: '힘들어지쳐 쓰러진 나.',
          id: 2,
        },
        {
          src: `/images/slider/slider03.jpg`,
          name: '카페에서 행복한 나',
          id: 3,
        },
      ],
    };
  },
  methods: {},
  components: {
    ImageSliderComp,
  },
};
</script>
