import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
// import Skeleton from "react-loading-skeleton";
import CartContext from "../../context/cartContext";
import { useDispatch, useSelector } from "react-redux";

export default function ProductCard({ product, handleAddToCart }) {
  const dispatch = useDispatch();
  const data = useSelector((state) => state?.cartReducer);

  const handleClick = () => {
    dispatch({
      type: "GET_SAMPLE",
      payload: "dvdgdfd",
    });
  };

  const { cartProducts } = useContext(CartContext);
  return (
    <div key={product?.id}>
      <h5>{product?.title}</h5>
      {product?.blurDataURL && (
        <Image
          src={product?.image}
          alt="Image"
          width="300"
          height="300"
          // blurDataURL={product?.blurDataURL}
          // placeholder="blur"
          // loading="lazy"
        />
      )}
      <div>
        <button
          disabled={cartProducts?.find((el) => el?.id === product?.id)}
          onClick={() => handleAddToCart(product)}
        >
          Add to cart
        </button>{" "}
        <button>
          <Link href={`/products/${product.id}`}>View Details</Link>
        </button>
        <button onClick={handleClick}>Only for - Redux</button>
      </div>
      <hr />
    </div>
  );
}
