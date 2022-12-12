<template>
  <div class="product">
    <div class="image"></div>
      <div class="inner">
      <h3>{{ product.name }}</h3>
      <p>{{ product.description }}</p>
      <div class="button-container">
        <button 
          class="add"
          @click="addToWishlist()"
          data-test="add"
          >
          Add</button>
          <p class="txt-center">How many?<br/>
          <span class="total" v-if="product_total > 0">{{ product_total }}</span>
          <span class="total" v-if="product_total === null">0</span>
          </p>
        <button 
        class="remove"
        @click="removeFromWishlist()"
        v-if="product_total > 0"
        data-test="remove"
        >
        Remove</button>
      </div>
    </div>
  </div>
</template>

<script>
//remove remove button when no items of this product are in wishlist

export default {
  name: 'ProductSummaryCard',
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

<style lang="scss">
  .product {
    // border:2px solid var(--clr-secondary);
    box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
    background:lighten($color: #c1b2b2, $amount: 35);
    border-radius:8px;
    .image{
      background:linear-gradient(135deg, #cbc6c2 0%, #5d5347 100%);
      border-radius:8px 8px 0 0;
      height:150px;
      background-size:cover;
      background-image:url("https://dummyimage.com/600x200/bbdced/ffffff.png&text=Product");
    }
    .inner {
      padding:calc(var(--unit)*2);
    }
    h3 {
      margin-top:0;font-size:calc(var(--unit)*2);
      }
    .total {
      font-weight:bold;
      font-size:calc(var(--unit)*1.3);
    }
  }
</style>