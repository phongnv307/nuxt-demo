<template>
  <div class="nav">
    <nuxt-link to="/" class="brand"> Real World Events </nuxt-link>
    <nav>
      <nuxt-link to="/cart"> Cart({{ cartItemCount }}) </nuxt-link>
    </nav>
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

<style>
.brand {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 1.5em;
  color: #39b982;
  text-decoration: none;
}
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  background-color: rgb(249, 253, 196);
  position: fixed;
}
.nav .nav-item {
  box-sizing: border-box;
  margin: 0 5px;
  color: rgba(0, 0, 0, 0.5);
  text-decoration: none;
}
.nav .nav-item.router-link-exact-active {
  color: #39b982;
  border-bottom: solid 2px #39b982;
}
.nav a {
  display: inline-block;
}
</style>
