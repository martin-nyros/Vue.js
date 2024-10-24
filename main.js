const app = Vue.createApp({
  data() {
    return {
      cart: [],
    };
  },
  methods: {
    updateCart(id) {
      this.cart.push(id);
    },
    reupdateCart(id) {
      const index = this.cart.indexOf(id);

      if (index !== -1) {
        this.cart.splice(index, 1);
      } else {
        this.cart.push(id);
      }
    },
  },
});
