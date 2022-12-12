<template>
  <header>
    <nav class="wrapper">
      <router-link to="/">
        <span class="logo">rw <span>fanshop</span></span>
      </router-link>
      <div class="wishlist-link">
        <a href="#" @click="toggleWishlist()" data-test="open-wishlist">Wishlist</a>
        <badgeItem />
      </div>
    </nav>
  </header>
  <router-view />
  <WishlistView  @toggle="toggleWishlist" :class="{open: openWishlist}" />
  <footer>
    <div class="wrapper">
    These are fictiteous products.
    </div>
  </footer>
</template>

<script>
import badgeItem from './components/badgeItem.vue'
import WishlistView from './views/WishlistView.vue'

export default {
  components: {
    badgeItem,
    WishlistView
   },
  data() {
    return {
      openWishlist: false
    }
  },
  methods: {
    toggleWishlist() {
      this.openWishlist = !this.openWishlist
    }
  },
  mounted() {
    this.$store.commit('updateWishlistFromLocalStorage')
  }
}
</script>


<style lang="scss">
@import "./assets/scss/global.scss";
header {
  border-bottom:10px solid  var(--clr-secondary);
  margin-bottom:20px;
}
nav {
  padding: calc(var(--unit)*2);
  display:flex;
  justify-content: space-between;
  align-items: center;

  a {
    font-weight: bold;
    color: var(--clr-primary);
    position:relative;
  }
  .router-link-active {
    text-decoration:none;
  }
  .logo {
    font-size:calc(var(--unit)*1.5);
    font-weight:900;
    color:var(--clr-primary);
    @media screen and (min-width: 600px) {
      font-size:calc(var(--unit)*3);
    }
    & span {
      color:var(--clr-troisieme);
    }
  }
  .wishlist-link {position:relative;margin-right:calc(var(--unit)*2)}
}
footer {
  font-size:calc(var(--unit)*0.8);
  border-top:10px solid  var(--clr-secondary);
  padding:var(--unit) 0;
  margin-top:50px;
  background-color:#f1f1f1;
}
</style>
