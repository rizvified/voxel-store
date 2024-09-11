<template>
  <div v-if="product" class="product-details">
    <img :src="product.image" :alt="product.title" class="product-image" />
    <div class="product-info">
      <h2>{{ product.title }}</h2>
      <p class="price">{{ formatPrice(product.price) }}</p>
      <p class="description">{{ product.description }}</p>
      <p class="category">Category: {{ product.category }}</p>
      <button @click="addToCart(product)" class="add-to-cart-btn">
        Add to Cart
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: {
    productId: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      product: null,
    };
  },
  async fetch() {
    this.product = await this.$axios.$get(`/products/${this.productId}`);
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
.product-details {
  display: flex;
  gap: 30px;
  margin-top: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
}

.product-image {
  max-width: 400px;
  height: auto;
  object-fit: contain;
}

.product-info {
  flex: 1;

  .price {
    font-size: 1.5em;
    font-weight: bold;
    color: $primary-color;
    margin-bottom: 15px;
  }

  .description {
    margin-bottom: 15px;
  }

  .category {
    font-style: italic;
    margin-bottom: 15px;
  }

  .add-to-cart-btn {
    @include button-style;
  }
}
</style>
