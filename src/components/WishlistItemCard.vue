<template>
  <div class="wishlist-item">
    <h3>{{ product.name }}</h3>
    <p>{{ product.quantity}} x</p>
  </div>
</template>
<script>
export default {
  props: ["product"]
}
</script>