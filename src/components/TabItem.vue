<template>
  <q-route-tab :to="to" >
    <div
      v-for="word in label.split(' ')"
      :key="word.index"
      >
      {{ word }}
    </div>
  </q-route-tab>
</template>

<script>
export default {
  name: 'TabItem',
  props: {
    label: {
      type: String,
      required: true
    },

    to: {
      type: String,
      default: ''
    }
  }
}
</script>
