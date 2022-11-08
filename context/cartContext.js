import { createContext, useState } from "react";

const CartContext = createContext({
  cartProducts: [],
  available: {},
  addToCart: () => {},
  incCartProducts: () => {},
  decCartProducts: () => {},
  removeCartProducts: () => {},
});

export function CartContextProvider(props) {
  const available = {
    1: 5,
    2: 2,
    3: 3,
    4: 6,
    5: 5,
    6: 7,
    7: 2,
    8: 1,
    9: 4,
    10: 3,
  };
  const [cartProductsData, setCartProductsData] = useState([]);

  const handleIncCartProducts = (data) => {
    const index = cartProductsData?.findIndex((el) => el.id === data?.id);
    const cloneData = [...cartProductsData];
    const cloneObj = cartProductsData[index];
    const newObj = { ...cloneObj, quentity: (cloneObj.quentity || 0) + 1 };
    cloneData[index] = newObj;
    if ((cloneObj?.quentity || 0) < (available[data?.id] || 10)) {
      setCartProductsData(cloneData);
    } else {
      console.log("already reached the limit....");
    }
  };

  const handleDecCartProducts = (data) => {
    const index = cartProductsData?.findIndex((el) => el.id === data?.id);
    const cloneData = [...cartProductsData];
    const cloneObj = cartProductsData[index];
    const newObj = { ...cloneObj, quentity: (cloneObj.quentity || 0) - 1 };
    cloneData[index] = newObj;
    setCartProductsData(cloneData);
  };

  const handleRemoveCartProducts = (data) => {
    const index = cartProductsData?.findIndex((el) => el.id === data?.id);
    const cloneData = [...cartProductsData];
    cloneData.splice(index, 1);
    setCartProductsData(cloneData);
  };

  const handleAddToCart = (data) => {
    const isExist = cartProductsData?.find((item) => data.id === item.id);
    if (!isExist) {
      setCartProductsData([...cartProductsData, { ...data, quentity: 1 }]);
    }
  };

  const context = {
    cartProducts: cartProductsData,
    available: available,
    addToCart: handleAddToCart,
    incCartProducts: handleIncCartProducts,
    decCartProducts: handleDecCartProducts,
    removeCartProducts: handleRemoveCartProducts,
  };

  return <CartContext.Provider value={context}>{props.children}</CartContext.Provider>;
}

export default CartContext;
