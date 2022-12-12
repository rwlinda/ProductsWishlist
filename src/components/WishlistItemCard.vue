<template>
  <div class="wishlist-item">
    <p class="wishlist-item__name">{{ product.name }}</p>
    <!-- <p class="nowrap">{{ product.quantity}} x</p> -->
    <div class="button-container">
        <button 
          class="icon icon-remove"
          @click="removeFromWishlist()"
          v-if="product_total > 0"
          data-test="remove"
          value="remove item"
          >
          </button>
          <span class="total" v-if="product_total > 0">{{ product_total }}</span>
          <span class="total" v-if="product_total === null">0</span>
          <button 
            class="icon icon-add"
            @click="addToWishlist()"
            data-test="add"
            value="add item"
            >
          </button>          
        </div>
  </div>
</template>
<script>
export default {
  props: ["product"],
  methods: {
    addToWishlist() {
      this.$store.commit('addToWishlist', this.product)
    },
    removeFromWishlist() {
      this.$store.commit('removeFromWishlist', this.product)
    }
  },
  computed: {
    product_total(){
      return this.$store.getters.productQuantity(this.product)
    }
  }  
}
</script>

<style lang="scss" scoped>
.wishlist-item {
    border-top:1px solid var(--clr-secondary);
    padding:calc(var(--unit)*0.5) 0;
    display:flex;
    justify-content: space-between;
    align-items: center;
    &__name {
        font-weight:700;
        font-size:calc(var(--unit)*1.2);
        padding-left:calc(var(--unit)*2);
        position:relative;
        &:before {
                content:"";
                position:absolute;
                left:0;
                top:3px;
                width:15px;
                height:15px;
                background:var(--clr-troisieme);
        }
    }
    button.icon {
        font-size:32px;
    }
}
</style>