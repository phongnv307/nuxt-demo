<template>
  <div class="cart">
    <div v-for="item in cart" :key="item.item.id" class="item">
      <div class="image">
        <img :src="item.item.image_link" alt="" />
      </div>
      <div class="info">
        <p class="name">{{ item.item.name }}</p>
        <p class="price">${{ item.item.price }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    cart() {
      return this.$store.getters['store/cartItemList']
    },
  },
}
</script>

<style scoped>
.cart {
  padding-top: 100px;
  padding-left: 100px;
}

.item {
  display: flex;
  margin-bottom: 20px;
}

.info {
  display: flex;
}

.info p {
  padding: 70px 30px;
}

.info .name {
  width: 500px;
}

.info .price {
  font-size: 25px;
}

.image {
  width: 20%;
}
</style>
