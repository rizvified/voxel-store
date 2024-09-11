export default ({ store }) => {
  if (process.client) {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      store.commit("setCart", JSON.parse(savedCart));
    }

    store.subscribe((mutation, state) => {
      localStorage.setItem("cart", JSON.stringify(state.cart));
    });
  }
};
