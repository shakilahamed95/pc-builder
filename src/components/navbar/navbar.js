import Link from "next/link";

const Navbar = () => {
  return (
    <div className="bg-[#4B6BFB] w-full py-1">
      <div className="container mx-auto flex items-center justify-between w-full">
        <button className="btn btn-neutral">PC Builder</button>
        <div className="dropdown dropdown-end dropdown-hover">
          <label tabIndex={0} className="btn btn-neutral m-1">
            Categories
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-white rounded w-40"
          >
            {categoriesData.map((item, index) => (
              <li key={index}>
                <Link href={item.link}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

export const categoriesData = [
  {
    title: "Processor",
    link: "/processor",
  },
  {
    title: "Motherboard",
    link: "/motherboard",
  },
  {
    title: "RAM",
    link: "/ram",
  },
  {
    title: "Power Supply Unit",
    link: "/power-supply-unit",
  },
  {
    title: "Storage Device",
    link: "/Storage-device",
  },
  {
    title: "Monitor",
    link: "/monitor",
  },
  {
    title: "Others",
    link: "/others",
  },
];
