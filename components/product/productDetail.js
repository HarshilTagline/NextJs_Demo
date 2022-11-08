import Image from "next/image";
// import { useEffect, useState } from "react";
// import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
export default function ProductDetail({ product, blurDataURL }) {
  // const [isLoaded, setIsLoaded] = useState(false);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoaded(true);
  //   }, 3000);
  // }, [product]);
  // console.log("isLoaded", isLoaded);

  // const Box = ({ children }) => {
  //   return (
  //     <div
  //       style={{
  //         border: "1px solid #ccc",
  //         display: "block",
  //         lineHeight: 10,
  //         padding: "1rem",
  //         marginBottom: "0.5rem",
  //         width: 200,
  //       }}
  //     >
  //       {children}
  //     </div>
  //   );
  // };

  return (
    <>
      {/* {isLoaded ? ( */}
      <div>
        <h1>Product Details</h1>
        <hr />
        <h3>{product?.title}</h3>
        {blurDataURL && (
          <div>
            <Image
              src={product?.image}
              alt="Image"
              width="400"
              height="300"
              blurDataURL={blurDataURL}
              placeholder="blur"
            />
          </div>
        )}
        <div>
          <b>Price</b>: {product?.price}$
        </div>
        <div>
          <b>Description</b>: {product?.description}
        </div>
        <div>
          <b>Category</b>: {product?.category}
        </div>
        <div>
          <b>Rating</b>: {product?.rating?.rate} ({product?.rating?.count} users)
        </div>
      </div>
      {/* ) : (
         <div>
           <Box>
             <Skeleton />
           </Box>
         </div>
       )} */}
    </>
  );
}
