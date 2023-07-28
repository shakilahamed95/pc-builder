import { ProductCard } from "@/components/ProductCard";
import RootLayout from "@/layout/RootLayout";

export default function ProcessorPage({ processor }) {
  return (
    <div className="container mx-auto px-5 md:px-0">
      <h3 className="text-3xl text-center text-black my-12">
        All available Processor
      </h3>
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {processor?.map((item) => (
          <div key={item._id}>
            <ProductCard product={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

ProcessorPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch(
    "https://pc-builder-backend-one.vercel.app/products/Processors"
  );
  const data = await res.json();
  return {
    props: {
      processor: data,
    },
  };
};
