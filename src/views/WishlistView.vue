<template>  
    <div class="wishlist">
      <div class="head">
        <h2>Wishlist ({{$store.state.wishlist.length}})</h2>
        <a @click="toggleWishlist()" name="Close" class="close" href="#" data-test="close-wishlist">X</a>
      </div>
      <p v-if="items == ''">No products in your wishlist yet</p>
      <WishlistItemCard 
        v-for="product in items" 
        :key="product.id"
        :product="product" 
      />
    </div>
</template>

<script>
import WishlistItemCard from '../components/WishlistItemCard.vue'

export default {
  name: 'WishlistView',
  props:["product"],
  components: {
    WishlistItemCard
  },
  computed: {
    items() {
      return this.$store.getters.wishlistItems
    }
  },
  methods: {
    toggleWishlist() {
      this.$emit('toggle')
    },
  }
}
</script>

<style lang="scss">
.head {
  display:flex;
  justify-content: space-between;
  align-items: center;
}
.wishlist {  
  position:fixed;
  height:100%;
  width:0;
  max-width:300px;
  overflow: auto;
  top:0;
  bottom:0;
  right:0;
  background:#fff;
  border-left:0;
  padding:0;
  transition: all .3s ease-in-out;
  z-index:2;
  &.open {    
    width:100%;
    max-width:300px;
    border-left:10px solid var(--clr-troisieme);
    padding:var(--unit);
    transition: all .3s ease-in-out;
    &:before {
      position:fixed;
      top:0;
      bottom:0;
      left:0;
      right:0;
      background:rgba(0,0,0,.25);
      z-index:1;
    }
  }
}
.close {
  font-size:30px;
  text-decoration:none;
  color:var(--clr-primary);
  &:hover {
    color:#000;
  }
}
</style>