<template>
        <span class="badge filled" v-if="$store.state.wishlist.length">
          {{$store.state.wishlist.length}}
        </span>
        <span class="badge empty" v-else>0</span>
</template>

<script>
export default {
        name: "badgeItem"
}
</script>

<style lang="scss">
.badge {
        border-radius:50%;
        width:calc(var(--unit)*1.5);
        height:calc(var(--unit)*1.5);
        line-height:calc(var(--unit)*1.5);
        text-align:center;
        color:#fff;
        font-weight:bold;
        position:absolute;
        right:calc(var(--unit)*-2);
        top:calc(var(--unit)*-.8);
        &.empty {
           background: var(--clr-secondary);
                transition:all .25s ease-in-out;
        }
        &.filled {
                background:#090;
                transition:all .25s ease-in-out;
        }
}
</style>