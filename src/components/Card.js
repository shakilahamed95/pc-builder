import Image from "next/image";

export const Card = ({ product }) => {
  return (
    <div className="flex items-center justify-center bg-slate-100 pb-4 rounded">
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
        </div>
      </div>
    </div>
  );
};
