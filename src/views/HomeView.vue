<template>
  <div class="wrapper">
    <h1>Create a wishlist of your favorite product</h1>
    <div class="products">    
        <ProductSummaryCard 
        v-for="product in items" 
        :key="product.id"
        :product="product" />   
    </div>
  </div>
</template>

<script>
// import items from '../data/items.js'
import ProductSummaryCard from '../components/ProductSummaryCard'

export default {
  name: 'HomeView',
  components: {
    ProductSummaryCard
  },
  props: ["openwishlist"],
  data() {
    return {
      items: []      
    }
  },
  created() {
    fetch("/items.json")
        .then(response => response.json())
        .then(data => (this.items = data))
        .catch(function() {console.log("error, films.json could not be retrieved");
    });
  },
}
</script>

<style lang="scss">
.products {
  display:grid;
  grid-template-columns:repeat(auto-fit, minmax(300px, 1fr));
  gap: calc(var(--unit)*2);
  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
}
</style>