<template>  
    <div class="wishlist">
      <div class="head">
        <h1>Wishlist ({{$store.state.wishlist.length}})</h1>
        <a @click="toggleWishlist()" name="Close" class="close" href="#" data-test="close-wishlist">X</a>
      </div>
      <p v-if="items == ''">No items in your wishlist yet</p>
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
  position:absolute;
  height:100vh;
  width:0;
  overflow: hidden;
  top:0;
  right:0;
  background:#fff;
  border-left:0;
  padding:0;
  transition: all .3s ease-in-out;
  &.open {    
    width:300px;
    border-left:10px solid var(--clr-secondary);
    padding:var(--unit);
    transition: all .3s ease-in-out;
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