import ProductCard from "./productCard";
import { useContext } from "react";
import CartContext from "../../context/cartContext";
// import Skeleton from "react-loading-skeleton";

export default function ProductList({ products }) {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = (item) => {
    addToCart(item);
  };

  return (
    <div>
      <h1>ProductList</h1>
      <hr />
      {products?.map((product, i) => {
        return (
          <div key={i}>
            <ProductCard product={product} handleAddToCart={handleAddToCart} />
            {/* {product ? (
              <ProductCard product={product} handleAddToCart={handleAddToCart} />
            ) : (
              <Skeleton count={10} />
            )} */}
          </div>
        );
      })}
    </div>
  );
}
