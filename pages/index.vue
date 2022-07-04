<template>
  <div class="list">
    <ProductItem v-for="(item, index) in items" :key="index" :item="item" />
  </div>
</template>

<script>
import ProductItem from '~/components/ProductItem.vue'
import json from '@/db.json'

export default {
  name: 'IndexPage',
  components: {
    ProductItem,
  },

  asyncData() {
    return {
      items: json,
    }
  },
}
</script>

<style scoped>
.list {
  padding-top: 60px;
  display: block;
  margin: auto 30px;
}
</style>
