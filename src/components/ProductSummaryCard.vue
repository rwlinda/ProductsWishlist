<template>
  <div class="product">
    <div class="image"></div>
      <div class="inner">
      <h3>{{ product.name }}</h3>
      <p>{{ product.description }}</p>
     </div>
    <div class="product__footer">        
      <span>How many?</span>
      <AddRemove :product="product" />
      </div>
  </div>
</template>

<script>
//remove remove button when no items of this product are in wishlist

import AddRemove from './AddRemove.vue'
export default {
  name: 'ProductSummaryCard',
  props: ["product"],
  components: {AddRemove}
}
</script>

<style lang="scss">
  .product {
    box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
    background:lighten($color: #c1b2b2, $amount: 35);
    border-radius:8px;
    display:flex;
    flex-direction: column;
    & .image{
      background:linear-gradient(135deg, #cbc6c2 0%, #5d5347 100%);
      border-radius:8px 8px 0 0;
      height:150px;
      background-size:cover;
      background-image:url("https://dummyimage.com/600x200/bbdced/ffffff.png&text=Product");
    }
    & .inner {
      padding:var(--unit) calc(var(--unit)*2);
      flex-grow:1;
    }
    & h3 {
      margin-top:0;font-size:calc(var(--unit)*2);
      }
    & .total {
      font-weight:bold;
      font-size:calc(var(--unit)*1.3);
    }
    &__footer {
      display:flex;
      justify-content: space-between;
      align-items: center;
      border-top:1px solid #eee;
      background:#f1f1f1;
      padding:var(--unit) calc(var(--unit)*2);
    }
  }
</style>