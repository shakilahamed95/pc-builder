import { ProductCard } from "@/components/ProductCard";
import RootLayout from "@/layout/RootLayout";

export default function MotherboardPage({ motherBoards }) {
  return (
    <div className="container mx-auto px-5 md:px-0">
      <h3 className="text-3xl text-center text-black my-12">
        All Available MotherBoards
      </h3>
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {motherBoards?.map((item) => (
          <div key={item._id}>
            <ProductCard product={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

MotherboardPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch(
    "https://pc-builder-backend-one.vercel.app/products/Motherboards"
  );
  const data = await res.json();
  return {
    props: {
      motherBoards: data,
    },
  };
};
