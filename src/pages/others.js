import { ProductCard } from "@/components/productCard";
import RootLayout from "@/layout/RootLayout";

export default function OtherPage({ allProducts }) {
  return (
    <div className="container mx-auto px-5 md:px-0">
      <h3 className="text-3xl text-center text-black my-12">
        Available Other equipment
      </h3>
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {allProducts?.map((item) => (
          <div key={item._id}>
            <ProductCard product={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

OtherPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/products/Others");
  const data = await res.json();
  return {
    props: {
      allProducts: data,
    },
  };
};
