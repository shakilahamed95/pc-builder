import Link from "next/link";
import Image from "next/image";

export const ProductCard = ({ product }) => {
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
        <div>
          <p className="text-lg mt-3">{product?.productName}</p>
          <p>Category: {product?.category}</p>
          <p>Price: {product?.price} $</p>
          <p>Status: {product?.status}</p>
          <p>Rating: {product?.averageRating}</p>
          <Link
            className="btn btn-primary mt-2"
            href={`/product/${product._id}`}
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};
