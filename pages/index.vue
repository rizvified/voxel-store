<template>
  <div class="home-page">
    <div class="hero-banner">
      <img src="/hero-banner.svg" alt="Welcome to Voxel" />
    </div>
    <div class="category-filter">
      <button
        v-for="category in categories"
        :key="category"
        @click="selectCategory(category)"
        :class="{ active: selectedCategory === category }"
      >
        {{ category }}
      </button>
    </div>
    <div class="product-grid">
      <ProductCard
        v-for="product in filteredProducts"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  data() {
    return {
      selectedCategory: null,
    };
  },
  computed: {
    ...mapState(["categories"]),
    ...mapGetters(["getProductsByCategory"]),
    filteredProducts() {
      return this.getProductsByCategory(this.selectedCategory);
    },
  },
  methods: {
    selectCategory(category) {
      this.selectedCategory =
        this.selectedCategory === category ? null : category;
    },
  },
};
</script>

<style lang="scss" scoped>
.hero-banner {
  position: relative;
  height: 300px;
  margin-bottom: 40px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
.category-filter {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 20px;

  button {
    margin: 5px;
    padding: 10px 20px;
    background-color: #f0f0f0;
    border: none;
    cursor: pointer;

    &.active {
      background-color: #333;
      color: white;
    }
  }
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}
</style>
