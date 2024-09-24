import { create } from "zustand";

const useCartStore = create((set) => ({
  cart: [],
  addToCart: (product) => set((state) => ({ cart: [...state.cart, product] })),
  removeCart: (product) =>
    set((state) => ({ cart: state.cart.filter((c) => c.id !== product.id) })),
}));

export default useCartStore;
