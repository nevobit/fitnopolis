import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface Coupon {
  name: string;
  value: number;
}

export interface CartProduct {
  id: string;
  slug: string;
  name: string;
  price: number;
  quantity?: number;
  image: string;
}

interface State {
  cart: CartProduct[];
  product: CartProduct;
  coupon: Coupon;
  getTotalItems: () => number;
  getTotalValueItems: () => number;
  addProductToCart: (product: CartProduct) => void;
  getProduct: (id: string) => void;
  removeProduct: (id: string) => void;
  addCoupon: (coupon: Coupon) => void;
}

export const useCartStore = create<State>()(
  persist(
    (set, get) => ({
      cart: [],
      product: {
        id: '',
        slug: '',
        name: '',
        price: 0,
        image: ''
      },
      coupon: {
        name: '',
        value: 0,
      },
      addCoupon: (myCoupon: Coupon) => {
        set({ coupon: { name: myCoupon.name, value: myCoupon.value } });
      },
      getTotalItems: () => {
        const { cart } = get();
        return cart.reduce((total, item) => total + item.quantity!, 0);
      },
      getTotalValueItems: () => {
        const { cart } = get();
        return cart.reduce(
          (total, item) => total + item.price * item.quantity!,
          0,
        );
      },
      addProductToCart: (product: CartProduct) => {
        const { cart } = get();

        const productInCart = cart.some((item) => item.id == product.id);

        if (!productInCart) {
          set({ cart: [...cart, product] });
          return;
        }

        const updatedCartProducts = cart.map((item) => {
          if (item.id == product.id) {
            if (product?.quantity! < 0 && item?.quantity == 0) {
              return item;
            }

            return { ...item, quantity: item.quantity! + product.quantity! };
          }

          return item;
        });

        set({ cart: updatedCartProducts });
      },
      getProduct: (id: string) => {
        const { cart } = get();

        const product = cart.find((item) => item.id == id);
        set({ product });
        return product!;
      },
      removeProduct: (id: string) => {
        const { cart } = get();

        const updatedCartProducts = cart.filter((item) => item.id !== id);

        set({ cart: updatedCartProducts });
      },

    }),
    { name: 'shopping-cart' },
  ),
);