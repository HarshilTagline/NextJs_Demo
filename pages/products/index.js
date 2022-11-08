import Head from "next/head";
import { getPlaiceholder } from "plaiceholder";
import ProductList from "../../components/product/productList";

export default function Products({ products }) {
  return (
    <>
      <Head>
        <title>Products</title>
        <meta name="description" content="List of all products" />
      </Head>
      <ProductList products={products} />
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${process.env.API_URL}/products`);
  const data = await res.json();
  const newObj = await Promise.all(
    data.map(async (el) => {
      const {
        base64,
        img: { width, height, ...img },
      } = await getPlaiceholder(el?.image, { size: 10 });
      return {
        ...el,
        blurDataURL: base64,
      };
    })
  ).then((values) => values);
  return { props: { products: newObj } };
}
