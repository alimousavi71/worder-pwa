<template>
  <div v-show="active">
    <svg width="80px" height="80px" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <g id="#ffffffff">
        <path ref="sh1" fill="#ffffff" opacity="1.00"
              d=" M 7.73 28.75 C 9.39 24.37 13.74 22.20 17.82 20.62 C 24.08 20.17 30.68 24.15 32.39 30.37 C 33.43 33.37 32.94 36.71 31.42 39.47 C 27.69 46.63 23.76 53.71 19.59 60.62 C 15.84 53.41 11.29 46.62 7.84 39.25 C 6.16 36.00 5.70 31.97 7.73 28.75 Z"/>
        <path ref="sh2" fill="#ffffff" opacity="1.00"
              d=" M 38.96 27.00 C 41.06 23.41 45.06 21.66 48.91 20.62 C 57.33 19.96 65.89 29.21 62.58 37.57 C 58.82 45.57 54.32 53.21 49.95 60.88 C 46.51 53.90 42.13 47.44 38.66 40.47 C 36.59 36.28 36.33 31.01 38.96 27.00 Z"/>
        <path ref="sh3" fill="#ffffff" opacity="1.00"
              d=" M 67.87 29.80 C 69.49 24.53 74.74 21.44 79.89 20.51 C 86.90 20.71 93.74 26.71 93.55 34.01 C 93.71 36.65 92.37 39.02 91.23 41.31 C 87.78 47.87 84.01 54.25 80.36 60.71 C 76.77 54.81 73.64 48.65 70.22 42.65 C 68.01 38.84 66.17 34.16 67.87 29.80 Z"/>
        <path fill="#ffffff" opacity="1.00"
              d=" M 25.60 57.53 C 28.66 52.00 31.73 46.49 35.03 41.10 C 38.31 47.44 42.05 53.51 45.38 59.82 C 46.94 62.90 48.22 66.46 47.28 69.93 C 46.37 74.37 42.69 77.83 38.48 79.25 C 31.18 81.51 22.56 75.79 22.17 68.07 C 22.24 64.30 23.78 60.76 25.60 57.53 Z"/>
        <path fill="#ffffff" opacity="1.00"
              d=" M 65.17 40.95 C 69.22 48.49 73.95 55.73 77.18 63.68 C 80.27 71.42 73.04 80.36 64.92 79.70 C 56.55 79.79 49.86 70.26 53.35 62.47 C 57.00 55.14 61.59 48.31 65.17 40.95 Z"/>
      </g>
    </svg>
  </div>
</template>

<script>
import gsap from "gsap";

export default {
  name: 'AppLoading',
  props: {
    active: {
      type: Boolean,
      default: false
    }
  },
  data(){
    return{
      timeline:null
    }
  },
  watch:{
    active(value){
      if (value){
        this.timeline.play();
      }
      /* else
      {
        this.timeline.pause();
      } */
    }
  },
  mounted() {
    this.timeline = gsap.timeline({
      repeat:-1,
      paused:true,
      yoyo:true
    }).to(this.$refs.sh1,{
      scale: 0.9,
      opacity: 0.9,
      y: -5,
      rotate: 10,
      duration: 0.5,
    },0.5).to(this.$refs.sh2,{
      scale: 0.9,
      opacity: 0.9,
      y: -5,
      duration: 0.5,
    },0.5).to(this.$refs.sh3,{
      scale: 0.9,
      opacity: 0.9,
      y: -5,
      rotate: -10,
      duration: 0.5,
    },0.5)
  },
  methods: {

  },
}
</script>

<style scoped>

</style>