import { BuilderCard } from "@/components/BuilderCard";
import RootLayout from "@/layout/RootLayout";
import { useRouter } from "next/router";

function CategoryPage({ product }) {
  const router = useRouter();
  const { category } = router.query;

  return (
    <div className="container mx-auto">
      <h3 className="text-3xl text-center mt-10">
        Please select one {category} Equipment
      </h3>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {product.map((item) => (
          <div key={item._id}>
            <BuilderCard product={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryPage;

CategoryPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getServerSideProps = async (context) => {
  const { params } = context;
  const res = await fetch(`http://localhost:5000/products/${params.category}`);
  const data = await res.json();

  return {
    props: {
      product: data,
    },
  };
};
