import RootLayout from "@/layout/RootLayout";
import Image from "next/image";
import { AiOutlineStar } from "react-icons/ai";
export default function ProductDetailsPage({ product }) {
  return (
    <div className="container mx-auto px-5 md:px-0">
      <h3 className="text-3xl text-center text-black my-12">
        Details of:{" "}
        <span className="text-[#4B6BFB]">{product.productName}</span>
      </h3>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-5 lg:gap-10 pb-12 w-full">
        <div className="w-full lg:w-1/2 xl:w-5/12">
          <Image
            src={product?.image}
            alt="Product Picture"
            width={500}
            height={500}
            className="rounded w-full"
          />
        </div>
        <div className="w-full lg:w-1/2 xl:w-7/12">
          <p className="text-xl my-3">{product?.productName}</p>
          <p>Category: {product?.category}</p>
          <p>Status: {product?.status}</p>
          <p>Price: {product?.price} $</p>
          <p>Description: {product?.description}</p>
          <p className="text-xl mt-3">Key Features:</p>
          <ul>
            {product?.keyFeatures.map((item, index) => (
              <li key={index}>
                <a>
                  {item.key}: {item.value}
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-3">Individual Rating: {product?.individualRating}</p>
          <p>Average Rating: {product?.averageRating}</p>
          <p className="text-xl mt-3">User Reviews:</p>
          <ul>
            {product?.reviews.map((item, index) => (
              <li key={index}>{item.text}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

ProductDetailsPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch("https://pc-builder-backend-one.vercel.app/products");
  const products = await res.json();
  const paths = products?.data.map((product) => ({
    params: { id: product._id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `https://pc-builder-backend-one.vercel.app/product/${params.id}`
  );
  const data = await res.json();

  return {
    props: {
      product: data,
    },
  };
};
