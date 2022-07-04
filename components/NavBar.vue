<template>
  <div class="nav">
    <nuxt-link to="/" class="home"> ShopVjp </nuxt-link>
    <nuxt-link to="/cart" class="cart"> Cart({{ cartItemCount }}) </nuxt-link>
  </div>
</template>

<script>
export default {
  computed: {
    cartItemCount() {
      return this.$store.getters['store/cartItemCount']
    },
  },
}
</script>

<style scoped>
.home {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 1.9em;
  color: white;
  text-decoration: none;
  padding-left: 50px;
}
.cart {
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 1.5em;
  color: white;
  text-decoration: none;
  margin-right: 30px;
}
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  width: 100vw;
  background-color: #326e51;
  position: fixed;
}
.nav a {
  display: inline-block;
}
</style>
