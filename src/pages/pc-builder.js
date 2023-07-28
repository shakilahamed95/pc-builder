import RootLayout from "@/layout/RootLayout";
import Link from "next/link";

export default function PcBuilderPage() {
  return (
    <div className="container mx-auto">
      <h3 className="text-3xl text-center mt-10">Build Your Dream PC</h3>
      <div className="flex flex-col gap-5 mt-6">
        {categoriesData.slice(0, 6).map((item, index) => (
          <div key={index}>
            <div className="flex items-center justify-between">
              <p className="px-5 py-3">{item.title}</p>
              <button className="btn btn-neutral">
                <Link href={`chose/${item.category}`}>Select</Link>
              </button>
            </div>
          </div>
        ))}
      </div>
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
