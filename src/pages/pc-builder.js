import { Card } from "@/components/Card";
import RootLayout from "@/layout/RootLayout";
import Link from "next/link";
import { useSelector } from "react-redux";

export default function PcBuilderPage() {
  const { products } = useSelector((state) => state.builder);
  console.log(products);
  const isCategorySelected = (category) => {
    return products.find((product) => product.category === category);
  };

  return (
    <div className="container mx-auto">
      <h3 className="text-3xl text-center mt-10">Build Your Dream PC</h3>
      <div className="flex flex-col gap-5 mt-6">
        {categoriesData.slice(0, 6).map((item, index) => (
          <div key={index}>
            <div className="flex items-center justify-between">
              <p className="px-5 py-3">{item.title}</p>
              <button
                disabled={isCategorySelected(item.category)}
                className="btn btn-neutral"
              >
                <Link href={`chose/${item.category}`}>Select</Link>
              </button>
            </div>
          </div>
        ))}
      </div>
      {products.length > 0 && (
        <div>
          <h3 className="text-3xl text-center mt-16">Your selected item</h3>
          <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
            {products.map((item) => (
                <div key={item._id}>
                  <Card product={item} />
                </div>
              ))}
          </div>
          <div className="flex items-center justify-center mt-8">
            <button disabled={products.length < 6} className="btn btn-neutral">
              Complete
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

PcBuilderPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

const categoriesData = [
  {
    title: "Processor",
    category: "Processors",
  },
  {
    title: "Motherboard",
    category: "Motherboards",
  },
  {
    title: "RAM",
    category: "RAM",
  },
  {
    title: "Power Supply Unit",
    category: "Power Supply",
  },
  {
    title: "Storage Device",
    category: "Storage",
  },
  {
    title: "Monitor",
    category: "Monitor",
  },
];
