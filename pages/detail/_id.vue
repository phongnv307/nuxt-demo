<template>
  <div class="detail">
    <h1>detail</h1>
    <img :src="item.image_link" alt="" />
    <p class="name">{{ item.name }}</p>
    <p class="price">${{ item.price }}</p>
    <button @click="addToCart()">Add to cart</button>
  </div>
</template>

<script>
import json from '@/db.json'

export default {
  asyncData({ params }) {
    return {
      item: json[params.id],
    }
  },
  methods: {
    addToCart() {
      this.$store.dispatch('store/addItemToCart', {
        item: this.item,
      })
    },
  },
}
</script>

<style>
.detail {
  padding-top: 60px;
}
</style>
