<template>
       <div class="addremove">
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
</template>

<script>
export default {
  name: "AddRemove",
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

</style>