import { ProductCard } from "@/components/ProductCard";
import RootLayout from "@/layout/RootLayout";

export default function StoragePage({ storageDevice }) {
  return (
    <div className="container mx-auto px-5 md:px-0">
      <h3 className="text-3xl text-center text-black my-12">
        All Available Storage Device
      </h3>
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {storageDevice?.map((item) => (
          <div key={item._id}>
            <ProductCard product={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

StoragePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch(
    "https://pc-builder-backend-one.vercel.app/products/Storage"
  );
  const data = await res.json();
  return {
    props: {
      storageDevice: data,
    },
  };
};
