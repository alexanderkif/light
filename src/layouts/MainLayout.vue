<template>
  <q-layout view="hHh lpR fFr">

    <q-header class="bg-dark text-white" height-hint="98">
      <q-toolbar>
        <img src="logo.png" style="height: 2.5rem;" class="gt-sm">
        <q-toolbar-title class="text-center">
          <span class="lt-md text-white">{{ title }}</span>
        </q-toolbar-title>

        <q-btn dense flat round class="q-mx-sm" @click="count++" >
          <q-icon class="material-icons-outlined" name="shopping_cart" />
          <q-badge color="info" floating style="border-radius: 50%;">{{ count }}</q-badge>
        </q-btn>
        <q-btn dense flat round :icon="right?'close':'menu'" @click="right = !right" />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="right" side="right" bordered content-class="bg-dark text-white" >
      <!-- drawer content -->
      <MenuItem
        v-for="item in menuItems"
        :key="item.index"
        :title="item.title"
        :link="item.link"
        class="q-py-md text-center" />
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="bg-secondary text-dark">
      <q-tabs
        align="center"
        active-color="white"
        active-bg-color="info"
        indicator-color="info"
        style="height: 4rem;"
        >
        <TabItem
          v-for="tab in tabItems"
          :key="tab.index"
          :to="tab.to"
          :label="tab.label"
          :class="tab.label==='Монтаж'||tab.label==='Корзина'?'tab-item tab-item_red':'tab-item'"
          />
      </q-tabs>
    </q-footer>

  </q-layout>
</template>

<script>
import MenuItem from 'components/MenuItem.vue'
import TabItem from 'components/TabItem.vue'

export default {
  name: 'MainLayout',

  components: {
    MenuItem,
    TabItem
  },

  data () {
    return {
      right: false,
      count: 1,
      menuItems: [
        { title: 'Обучающее видео', link: '/' },
        { title: 'Оформление заказа', link: '/' },
        { title: 'Оплата', link: '/' },
        { title: 'Доставка', link: '/' },
        { title: 'Гарантия', link: '/' },
        { title: 'Возврат', link: '/' },
        { title: 'Контакты', link: '/' },
        { title: 'Партнерам', link: '/' }
      ],
      tabItems: [
        { label: 'Ваиант кухни', to: '/' },
        { label: 'Размеры', to: '/' },
        { label: 'Сенсор', to: '/' },
        { label: 'Питающий кабель', to: '/' },
        { label: 'Блок питания', to: '/' },
        { label: 'Цвет свечения', to: '/color' },
        { label: 'Монтаж', to: '/info' },
        { label: 'Корзина', to: '/' }
      ],
      title: '3492 руб.'
    }
  }
}
</script>

<style lang="scss" scoped>
.tab-item {
  border-bottom: 3px solid #00abf0;

  &_red {
    border-bottom-color: #ff8182;
  }
}
</style>
