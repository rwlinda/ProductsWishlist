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
  <!-- v-if="openWishlist" -->
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #069;
}
.wrapper {
  max-width:1120px;
  margin:0 var(--unit);
  @media screen and (min-width: 1120px) {
    margin:0 auto;
  }
  }
header {
  border-bottom:10px solid  var(--clr-secondary);
  margin-bottom:20px;
}
h1, h2, h3, .icon {  
    font-family:'Raleway',cursive;
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

html, body {
  margin:0 0 100px 0;
  padding:0;
  box-sizing:border-box;
}
.button-container {
  display:flex;
  justify-content:center;
  gap:var(--unit);
  align-items:center;
  border-top:1px solid var(--clr-primary);
  padding-top:10px;
}
button {
  border:0;
  outline:0;
  background:#333;
  color:#fff;
  padding:var(--unit);
  border-radius:calc(var(--unit)/4);
  &:hover {
    cursor:pointer;
    background-color:#000;
  }
  &:active {
    background-color:#555;
  }
}
.txt-center {
  text-align:center;
}
:root {
  --unit:1rem;
  --clr-primary: #069;
  --clr-secondary: #c1b2b2;
  --clr-troisieme: #3FC0D4;
}
</style>
