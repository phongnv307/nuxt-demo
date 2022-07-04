<template>
  <div class="item">
    <img :src="item.image_link" alt="" />
    <div>
      <p class="name">{{ item.name }}</p>
      <p class="price">${{ item.price }}</p>
      <nuxt-link :to="{ path: '/detail/' + item.id, params: { id: item.id } }"
        >More info</nuxt-link
      >
      <button @click="addToCart()">Add to cart</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default() {
        return {}
      },
      required: true,
    },
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
.item {
  width: 20%;
  float: left;
  height: 350px;
  margin-bottom: 10px;
  display: flex;
  flex-wrap: wrap;
  border: 1px solid #fff;
  justify-content: center;
  background-color: aliceblue;
  padding-top: 10px;
}

.item img {
  /* padding: 10px; */
  display: block;
  height: 184px;
}

button {
  display: inline-block;
  text-decoration: none;
  color: inherit;
  padding: 8px 16px;
  background-color: #c92502;
  border: none;
  color: #fff;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 15px;
}

a {
  display: inline-block;
  text-decoration: none;
  color: inherit;
  padding: 8px 16px;
  background-color: #c92502;
  border: none;
  color: #fff;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
}
</style>
