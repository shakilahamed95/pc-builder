import { categoriesData } from "@/components/navbar/navbar";
import { ProductCard } from "@/components/productCard";
import RootLayout from "@/layout/RootLayout";
import Link from "next/link";

export default function Home({ allProducts }) {
  console.log(allProducts.data);
  const shuffledProducts = allProducts.data.sort(() => Math.random() - 0.5);
  const randomProducts = shuffledProducts.slice(0, 6);
  return (
    <div className="container mx-auto px-5 md:px-0">
      <h3 className="text-3xl text-center text-black my-12">
        Featured Products
      </h3>
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {randomProducts?.map((item) => (
          <div key={item._id}>
            <ProductCard product={item} />
          </div>
        ))}
      </div>
      <h3 className="text-3xl text-center text-black my-12">
        Featured Category
      </h3>
      <div className=" flex items-center justify-center flex-wrap gap-5 pb-12">
      {categoriesData.map((item, index) => (
              <div key={index}>
                <Link href={item.link} className="px-3 py-2 bg-slate-100 rounded-md">{item.title}</Link>
              </div>
            ))}
      </div>
    </div>
  );
}

Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/products");
  const data = await res.json();
  return {
    props: {
      allProducts: data,
    },
    revalidate: 30,
  };
};
