import Image from "next/image";

export default function Banner() {
  return (
    <div>
      <div className="carousel w-full">
        <div id="item1" className="carousel-item w-full">
          <Image
            src='/assests/1.jpg'
            width={500}
            height={500}
            className="w-full h-[400px]"
            alt="Picture of the author"
          />
        </div>
        <div id="item2" className="carousel-item w-full">
        <Image
            src='/assests/2.png'
            width={500}
            height={500}
            className="w-full h-[400px]"
            alt="Picture of the author"
          />
        </div>
        <div id="item3" className="carousel-item w-full">
        <Image
            src='/assests/3.jpg'
            width={500}
            height={500}
            className="w-full h-[400px]"
            alt="Picture of the author"
          />
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
      </div>
    </div>
  );
}
