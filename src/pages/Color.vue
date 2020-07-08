<template>
<q-page class="flex justify-center">
    <div class="row max1000 fit">
      <div class="col-xs-12 col-md-6">
        <Carousel :slides="slides" />
      </div>
      <div class="col-xs-12 col-md-6 q-pa-md">
        <Description class="gt-sm" />
        <div class="row full-width bg-primary text-white items-center">
          <div class="col col-auto">
            <q-avatar square color="info" text-color="white" @click="gotoInfo" class="cursor-pointer">i</q-avatar>
          </div>
          <div class="col text-center">Выберите цвет свечения</div>
        </div>
        <ChooseColor :slides="slides" />
      </div>
    </div>
  </q-page>
</template>

<script>
import Carousel from '../components/Carousel'
import ChooseColor from '../components/ChooseColor'
import Description from '../components/Description'

export default {
  name: 'PageIndex',

  components: {
    Carousel,
    ChooseColor,
    Description
  },

  data () {
    return {
      slides: [
        { id: 1, text: 'Теплый', src: 'IMG_20190903_151239_512.jpg' },
        { id: 2, text: 'Дневной', src: 'item13.jpg' },
        { id: 3, text: 'Холодный', src: 'IMG_20190903_151239_512.jpg' }
      ]
    }
  },
  methods: {
    gotoInfo () {
      this.$router.push('/info')
    }
  }
}
</script>

<style lang="scss">
.max1000 {
  max-width: 1000px;
}
</style>
