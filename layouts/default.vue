<template>
  <div class="app-container">
    <header>
      <img src="/logo.svg" alt="Voxel Store Logo" />
      <img src="/cart-icon.svg" alt="Cart Icon" @click="toggleCart" />
    </header>
    <main>
      <Nuxt />
    </main>
    <CartPopup v-if="isCartOpen" @close="toggleCart" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      isCartOpen: false,
    };
  },
  computed: {
    ...mapGetters(["cartItemCount"]),
  },
  methods: {
    toggleCart() {
      this.isCartOpen = !this.isCartOpen;
    },
  },
};
</script>

<style lang="scss" scoped>
.app-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.cart-button {
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
}
</style>
