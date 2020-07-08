<template>
  <q-item
    clickable
    tag="a"
    :href="link"
    class="menu-item"
  >
    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
export default {
  name: 'MenuItem',
  props: {
    title: {
      type: String,
      required: true
    },

    link: {
      type: String,
      default: '#'
    }
  }
}
</script>

<style>
.menu-item:hover {
  background-color: #00abf0;
}
</style>
