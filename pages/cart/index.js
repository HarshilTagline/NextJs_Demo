import Head from "next/head";
import Image from "next/image";
import { useContext } from "react";
import CartContext from "../../context/cartContext";

export default function CartList() {
  const style = { border: "2px solid black", borderCollapse: "collapse" };
  const { cartProducts, available, incCartProducts, decCartProducts, removeCartProducts } =
    useContext(CartContext);

  const handleIncrement = (data) => {
    incCartProducts(data);
  };

  const handleDecrement = (data) => {
    decCartProducts(data);
  };

  const handleRemove = (data) => {
    removeCartProducts(data);
  };

  return (
    <>
      <Head>
        <title>Cart</title>
        <meta name="description" content="List of items added in carts" />
      </Head>
      <h2>CartList</h2>
      <hr />
      {cartProducts?.length ? (
        <table style={style}>
          <thead>
            <tr>
              <th style={style}>Image</th>
              <th style={style}>Product</th>
              <th style={style}>Price</th>
              <th style={style}>Quentity</th>
              <th style={style}>Actions</th>
              <th style={style}>Total price</th>
            </tr>
          </thead>
          <tbody>
            {cartProducts?.map((el) => {
              return (
                <tr key={el?.id}>
                  <td style={style}>
                    <Image src={el?.image} alt="image" width="50" height="50" />
                  </td>
                  <td style={style}>{el?.title}</td>
                  <td style={style}>{el?.price}$</td>
                  <td style={style}>{el?.quentity || 0}</td>
                  <td style={style}>
                    <button
                      disabled={(el?.quentity || 0) >= (available[el?.id] || 10)}
                      onClick={() => handleIncrement(el)}
                    >
                      +
                    </button>{" "}
                    <button disabled={!el?.quentity} onClick={() => handleDecrement(el)}>
                      -
                    </button>{" "}
                    <button onClick={() => handleRemove(el)}>X</button>
                  </td>
                  <td style={style}>{Math.floor((el?.quentity || 0) * (el?.price || 0))}$</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <h4>No products added</h4>
      )}
    </>
  );
}
