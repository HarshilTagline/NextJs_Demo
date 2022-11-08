import Link from "next/link";
import useSWR from "swr";

export default function Header({ children }) {
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data: categories } = useSWR("https://fakestoreapi.com/products/categories", fetcher);

  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link href="/products">All Products</Link>
            </li>
            {categories?.map((category, i) => {
              return (
                <li key={i}>
                  <Link href={`/categories/${category}`}>{category}</Link>
                </li>
              );
            })}
            <li>
              <Link href="/cart">Cart</Link>
            </li>
          </ul>
        </nav>
      </header>
      <hr />
      {children}
    </>
  );
}
