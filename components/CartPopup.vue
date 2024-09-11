<template>
  <div class="cart-popup">
    <h2>Your Cart</h2>
    <ul v-if="cart.length > 0">
      <li v-for="item in cart" :key="item.id">
        <img :src="item.image" :alt="item.title" />
        <div class="item-details">
          <h3>{{ item.title }}</h3>
          <p>Price: {{ formatPrice(item.price) }}</p>
          <p>Quantity: {{ item.quantity }}</p>
        </div>
        <p @click="removeFromCart(item.id)">Remove</p>
      </li>
    </ul>
    <p v-else>Your cart is empty</p>
    <p class="total">Total: {{ formatPrice(cartTotal) }}</p>
    <button @click="$emit('close')" class="close-btn">
      Continue to Checkout
    </button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapState(["cart"]),
    ...mapGetters(["cartTotal"]),
  },
  methods: {
    ...mapActions(["removeFromCart"]),
    formatPrice(price) {
      return `$${price.toFixed(2)}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.cart-popup {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 300px;
  background-color: white;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
  padding: 20px;
  overflow-y: auto;

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    border-bottom: 1px solid #ddd;
    padding-bottom: 10px;

    img {
      width: 50px;
      height: 50px;
      object-fit: contain;
      margin-right: 10px;
    }

    .item-details {
      flex-grow: 1;
    }
  }

  .total {
    font-weight: bold;
    margin-top: 20px;
  }

  .close-btn,
  .remove-btn {
    background-color: #462ddf;
    color: white;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
  }

  .close-btn {
    display: block;
    width: 100%;
    margin-top: 20px;
  }
}
</style>
