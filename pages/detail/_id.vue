<template>
  <div class="detail">
    <div class="image">
      <img :src="item.image_link" alt="" />
    </div>
    <div class="info">
      <h1 class="name">{{ item.name }}</h1>
      <p class="desc">{{ item.description }}</p>
      <p class="price">${{ item.price }}</p>
      <button @click="addToCart()">Add to cart</button>
    </div>
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

<style scoped>
.detail {
  padding-top: 160px;
  padding-left: 100px;
  padding-right: 100px;
  float: left;
  display: flex;
  background-color: aliceblue;
}

.image {
  width: 35%;
  transition: 0.5s;
}

.image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.info {
  margin-left: 30px;
}

.info h1 {
  margin-bottom: 30px;
}

.info button {
  display: inline-block;
  text-decoration: none;
  color: inherit;
  padding: 8px 16px;
  background-color: #c92502;
  border: none;
  color: #fff;
  border-radius: 4px;
  cursor: pointer;
}

.info .desc {
  margin-bottom: 20px;
}

.info .price {
  font-size: 22px;
  margin-bottom: 50px;
}
</style>
