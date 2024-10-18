app.component("product-display", {
  template:
    /*html*/
    `<div class="product-display">
    <div class="product-container">
      <div class="product-image">
        <img v-bind:src="image">
      </div>
      <div class="product-info">
        <h1>{{ title }}</h1>

        <p v-if="inStock">In Stock</p>
        <p v-else>Out of Stock</p>

        <ul  v-for="detail in details">
          <li>{{ detail.RAM }}</li>
          <li>{{ detail.OS }}</li>
          <li>{{ detail.Storage }}</li>
        </ul>

        <div 
          v-for="(variant, index) in variants" 
          :key="variant.id" 
          @click="updateVariant(index)" 
          class="color-circle" 
          :style="{ backgroundColor: variant.color }">
        </div>
        <button 
          class="button"
          :class="{ disabledButton: !inStock }" 
          :disabled="!inStock" 
          v-on:click="addToCart">
          Add to Cart 
        </button>
      </div>
    </div>
  </div>`,
  data() {
    return {
      product: "Apple",
      brand: "Iphone 13 pro",
      selectedVariant: 0,
      ishow: false,
      cartQuantity: 0,
      details: [{ RAM: "8GB", Storage: "256GB", OS: "iOS 14" }],
      variants: [
        {
          id: 1,
          color: "red",
          image: "./assets/images/rediphone.png",
          quantity: 3,
        },
        {
          id: 2,
          color: "#23607F",
          image: "./assets/images/blueiphone.png",
          quantity: 3,
        },
        {
          id: 3,
          color: "#394C38",
          image: "./assets/images/greeniphone.png",
          quantity: 0,
        },
        {
          id: 4,
          color: "#FDE0DC",
          image: "./assets/images/pinkiphone.png",
          quantity: 10,
        },
      ],
      reviews: [],
    };
  },
  methods: {
    addToCart() {
      if (this.cartQuantity < this.inStock) {
        this.cartQuantity++;
        this.$emit("add-to-cart", this.variants[this.selectedVariant].id);
      } else {
        alert("Can't add more to the cart");
      }
    },

    updateVariant(index) {
      this.selectedVariant = index;
      this.cartQuantity = 0;
    },
    addReview(review) {
      this.reviews.push(review);
    },
  },
  computed: {
    title() {
      return this.product + " " + this.brand;
    },
    image() {
      return this.variants[this.selectedVariant].image;
    },
    inStock() {
      return this.variants[this.selectedVariant].quantity;
    },
  },
});
