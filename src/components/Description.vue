<template>
  <div class="q-pa-md">
    <div class="q-my-sm row full-width items-center">
      <div class="col text-subtitle1">
        Класс:
      </div>
      <div class="col">
        <q-btn-dropdown color="secondary" text-color="dark" :label="label" dropdown-icon="none">
          <q-list>
            <q-item
              v-for="option in options"
              :key="option.index"
              clickable
              v-close-popup
              @click="onItemClick(option)"
              class="dropdown-item"
              >
              <q-item-section>
                <q-item-label>{{ option }}</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </div>
    </div>
    <div
      v-for="item in items"
      :key="item.index"
      class="q-my-sm row full-width items-center">
      <div class="col text-subtitle1">
        {{ item.label }}
      </div>
      <div class="col">
        {{ item.value }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Description',
  data () {
    return {
      model: null,
      options: [
        'Standart', 'Class 1', 'Class 2', 'Class 3', 'Class 4', 'Class 5'
      ],
      label: 'Standart',
      items: [
        { label: 'Потребляемая мощность:', value: '59Вт' },
        { label: 'Сола света:', value: '34 Люмен = 7,5 ламп накаливания по 40 Вт' },
        { label: 'Гарантия:', value: '3 года' },
        { label: 'Монтаж:', value: 'Да' },
        { label: 'Итого сумма:', value: '2594 рублей' }
      ]
    }
  },
  methods: {
    onItemClick (value) {
      this.label = value
    }
  }
}
</script>

<style lang="scss" scoped>
.dropdown-item:hover {
  opacity: 1 !important;
  background: #00abf0 !important;
  color: white;
}
</style>
