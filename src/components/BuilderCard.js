import Image from "next/image";

export const BuilderCard = ({ product }) => {
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
          <div>
            <p>Category: {product?.category}</p>
            <p>Price: {product?.price} $</p>
            <p>Status: {product?.status}</p>
            <p>Review: {product?.averageRating}</p>
          </div>
          <button className="btn btn-primary mt-2">Add To Builder</button>
        </div>
      </div>
    </div>
  );
};
