<template>
  <div class="product-details-page">
    <ProductDetails :productId="Number($route.params.id)" />
  </div>
</template>

<script>
export default {
  validate({ params }) {
    return /^\d+$/.test(params.id);
  },
};
</script>
