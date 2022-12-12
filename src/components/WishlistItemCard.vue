<template>
  <div class="wishlist-item">
    <p class="wishlist-item__name">{{ product.name }}</p>
    <p class="nowrap">{{ product.quantity}} x</p>
  </div>
</template>
<script>
export default {
  props: ["product"]
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
}
</style>