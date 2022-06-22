<template>
  <div>
    <product-item v-for="(item, index) in items" :key="index" />
  </div>
</template>

<script>
import axios from 'axios'
import ProductItem from '~/components/ProductItem.vue'

export default {
  name: 'IndexPage',
  components: {
    ProductItem,
  },
  data() {
    return {
      items: [],
    }
  },
  async fetch() {
    await this.getItems()
  },
  methods: {
    async getItems() {
      const data = axios.get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=37ed43a4f8eaa2abd75f9283692947bc&language=en-US&page=1`
      )
      const result = await data
      // eslint-disable-next-line no-console
      console.log(result)
      result.data.results.forEach((item) => {
        this.items.push(item)
      })
    },
  },
}
</script>
