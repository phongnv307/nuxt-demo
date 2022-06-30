<template>
  <div class="cart">
    <h1>Cart</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: this.$store.getters['store/cartItemList'],
    }
  },
}
</script>

<style>
.cart {
  padding-top: 60px;
}
</style>
