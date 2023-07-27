import RootLayout from "@/layout/RootLayout";

export default function ProductDetailsPage({ allProducts }) {
  return (
    <div className="container mx-auto px-5 md:px-0">
      <h3 className="text-3xl text-center text-black my-12">Product Details</h3>
    </div>
  );
}

ProductDetailsPage.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
  };