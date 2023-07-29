import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="hero bg-base-200 rounded-md">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="w-full lg:w-1/2">
          <Image
            src="/assests/1.jpg"
            width={500}
            height={300}
            className="w-full h-[400px] rounded"
            alt="Picture of the author"
          />
        </div>
        <div className="w-full lg:w-1/2">
          <h1 className="text-3xl font-bold">Build Your Dream Pc Now</h1>
          <p className="py-6">
            Choose from a variety of components and focus on the parts that will
            make the perfect PC experience for you.
          </p>
          <Link href={"/pc-builder"} className="btn btn-primary">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}
