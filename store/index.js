export const state = () => ({
  products: [],
  categories: [],
  cart: [],
});

export const mutations = {
  setProducts(state, products) {
    state.products = products;
  },
  setCategories(state, categories) {
    state.categories = categories;
  },
  addToCart(state, product) {
    const existingProduct = state.cart.find((item) => item.id === product.id);
    if (existingProduct) {
      existingProduct.quantity++;
    } else {
      state.cart.push({ ...product, quantity: 1 });
    }
  },
  removeFromCart(state, productId) {
    state.cart = state.cart.filter((item) => item.id !== productId);
  },
  clearCart(state) {
    state.cart = [];
  },
  setCart(state, cart) {
    state.cart = cart;
  },
};

export const actions = {
  async nuxtServerInit({ commit }, { $axios }) {
    const [products, categories] = await Promise.all([
      $axios.$get("/products"),
      $axios.$get("/products/categories"),
    ]);
    commit("setProducts", products);
    commit("setCategories", categories);
  },
  addToCart({ commit }, product) {
    commit("addToCart", product);
  },
  removeFromCart({ commit }, productId) {
    commit("removeFromCart", productId);
  },
  clearCart({ commit }) {
    commit("clearCart");
  },
};

export const getters = {
  getProductsByCategory: (state) => (category) => {
    if (!category) return state.products;
    return state.products.filter((product) => product.category === category);
  },
  cartItemCount: (state) => {
    return state.cart.reduce((total, item) => total + item.quantity, 0);
  },
  cartTotal: (state) => {
    return state.cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  },
};
