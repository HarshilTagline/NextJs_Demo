import Head from "next/head";
import { getPlaiceholder } from "plaiceholder";
import ProductList from "../../components/product/productList";

export default function Category({ products, title }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="List of items by category" />
      </Head>
      <ProductList products={products} />
    </>
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  const res = await fetch(`${process.env.API_URL}/products/category/${params?.category}`);
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

  return { props: { products: newObj, title: params?.category } };
}

export async function getStaticPaths() {
  return { paths: [], fallback: true };
}
