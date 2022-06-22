<template>
  <div>
    <img
      src="https://hanoicomputercdn.com/media/lib/14-03-2022/58944_surface_laptop_4_spb_00001_r5_4680u_8gb_ram_256gb_ssd_bac_6.jpeg"
      alt=""
    />
    <h1>Item</h1>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style></style>
