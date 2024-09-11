<template>
  <div class="product-card">
    <img :src="product.image" :alt="product.title" />
    <h3>{{ product.title }}</h3>
    <p>{{ formatPrice(product.price) }}</p>
    <button @click="addToCart(product)" class="add-to-cart-btn">
      Add to Cart
    </button>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  methods: {
    ...mapActions(["addToCart"]),
    formatPrice(price) {
      return `$${price.toFixed(2)}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.product-card {
  border: 1px solid #ddd;
  padding: 15px;
  text-align: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  border-radius: 10px;

  img {
    max-width: 100%;
    height: 200px;
    object-fit: contain;
    margin-bottom: 10px;
  }

  h3 {
    margin-bottom: 10px;
    flex-grow: 1;
  }

  .add-to-cart-btn {
    background-color: #f4f4f4;
    color: black;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 10px;
  }
}
</style>
