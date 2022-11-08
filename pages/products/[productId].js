import Head from "next/head";
import { getPlaiceholder } from "plaiceholder";
import ProductDetail from "../../components/product/productDetail";

export default function Products({ product, blurDataURL }) {
  return (
    <>
      <Head>
        <title>Product Detail</title>
        <meta name="description" content="Details about product" />
      </Head>
      <ProductDetail product={product} blurDataURL={blurDataURL} />
    </>
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  const res = await fetch(`https://fakestoreapi.com/products/${params?.productId}`);
  const data = await res.json();
  const { base64, img } = await getPlaiceholder(data?.image, { size: 10 });
  return { props: { product: data, blurDataURL: base64 } };
}

export async function getStaticPaths() {
  return { paths: [{ params: { productId: "1" } }], fallback: true };
}
