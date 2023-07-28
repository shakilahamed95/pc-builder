import { addToBuilder } from "@/redux/features/builderSlice";
import Image from "next/image";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

export const BuilderCard = ({ product }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const handleAddToBuilder = (product) => {
    dispatch(addToBuilder(product));
    router.push("/pc-builder");
  };
  return (
    <div className="flex items-center justify-center bg-slate-100">
      <div>
        <Image
          src={product?.image}
          alt="Product Picture"
          className="w-[356px] h-[224px]"
          width={356}
          height={356}
        />
        <p className="text-lg mt-3">{product?.productName}</p>
        <div>
          <p>Category: {product?.category}</p>
          <p>Price: {product?.price} $</p>
          <p>Status: {product?.status}</p>
          <p>Rating: {product?.averageRating}</p>
          <button
            disabled={product.status === "Out of Stock"}
            onClick={() => handleAddToBuilder(product)}
            className="btn btn-primary mt-2"
          >
            Add To Builder
          </button>
        </div>
      </div>
    </div>
  );
};
