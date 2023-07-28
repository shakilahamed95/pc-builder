import { Card } from "@/components/Card";
import RootLayout from "@/layout/RootLayout";
import Link from "next/link";
import { useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function PcBuilderPage() {
  const [disabled, setDisabled] = useState(false);
  const { products } = useSelector((state) => state.builder);
  console.log(products);
  const isCategorySelected = (category) => {
    return products.find((product) => product.category === category);
  };

  const handleShowSuccess = () => {
    toast.success("You have complete your pc building", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
    setDisabled(true);
  };

  return (
    <div className="container mx-auto pb-20">
      <h3 className="text-3xl text-center mt-10">Build Your Dream PC</h3>
      <div className="flex flex-col gap-5 mt-6">
        {categoriesData.slice(0, 6).map((item, index) => (
          <div key={index}>
            <div className="flex items-center justify-between">
              <p className="px-5 py-3">{item.title}</p>
              <Link href={`chose/${item.category}`}>
                <button
                  disabled={isCategorySelected(item.category)}
                  className="btn btn-neutral"
                >
                  Select
                </button>
              </Link>
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
            <button
              onClick={handleShowSuccess}
              disabled={products.length < 6 || disabled}
              className="btn btn-neutral"
            >
              Complete Build
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
    title: "CPU / Processor",
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
