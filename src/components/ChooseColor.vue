<template>
  <div class="flex q-py-lg row justify-center">
    <q-card
      v-for="sl in slides"
      :key="sl.id"
      class="choose-card q-ma-sm"
      @click="slideChanged(sl.id)"
      style="position: relative;"
      >
      <q-img
        :src="sl.src"
        basic
      >
      <div class="absolute-bottom card-bottom items-center bg-dark text-white text-center">
          {{ sl.text }}
      </div>
      <q-icon v-if="sl.id===slide" name="done" class="card-check absolute-top-right bg-primary text-white" />
      </q-img>
    </q-card>
  </div>
</template>

<script>
export default {
  name: 'ChooseColor',
  props: {
    slides: Array
  },
  data () {
    return {
      slide: 1
    }
  },
  methods: {
    slideChanged (id) {
      this.$root.$emit('slideChanged', id)
      this.slide = id
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

<style lang="scss" scoped>
.choose-card {
  width: 90px;
  height: 60px;
}
.card-bottom {
    height: 25px;
    padding: 0px;
}
.card-check {
    height: 16px;
    width: 16px;
    right: 4px;
    top: 4px;
}
</style>
