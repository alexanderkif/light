<template>
  <div class="q-pa-md">
    <q-carousel
      animated
      v-model="slide"
      navigation
      @input="slideChanged"
    >
      <q-carousel-slide
        v-for="sl in slides"
        :key="sl.id"
        :name="sl.id"
        :img-src="sl.src" >
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>

<script>
export default {
  name: 'Carousel',
  props: {
    slides: Array
  },
  data () {
    return {
      slide: 1
    }
  },
  methods: {
    slideChanged () {
      this.$root.$emit('slideChanged', this.slide)
    }
  },
  created () {
    this.$root.$on('slideChanged', (slide) => { this.slide = slide })
  },
  beforeDestroy () {
    this.$root.$off('slideChanged', (slide) => { this.slide = slide })
  }
}
</script>
