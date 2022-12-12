import { createStore } from 'vuex'

function updateLocalStorage(wishlist) {
  localStorage.setItem('wishlist', JSON.stringify(wishlist))
}

export default createStore({
  state: {
    wishlist: []
  },
  getters: {
    productQuantity: state => product => {
      const item = state.wishlist.find(i => i.id === product.id)
      if (item) return item.quantity
      else return null
    },
    wishlistItems: state => {
      return state.wishlist
    }
  },
  mutations: {
    addToWishlist(state, product) {
      let item = state.wishlist.find(i => i.id === product.id)
      if (item) {
        item.quantity++
      }
      else {
        state.wishlist.push({...product, quantity: 1})
      }
      updateLocalStorage(state.wishlist);
    },

    removeFromWishlist(state, product) {
      let item = state.wishlist.find(i => i.id === product.id)
      if(item){
        if(item.quantity > 1){
          item.quantity--
        }
        else {
          state.wishlist = state.wishlist.filter(i => i.id !== product.id)
        }
        updateLocalStorage(state.wishlist);
      }
    },

    updateWishlistFromLocalStorage(state) {
      const wishlist = localStorage.getItem('wishlist')
      if(wishlist) {
        state.wishlist = JSON.parse(wishlist)
      }
    }
  }
})
