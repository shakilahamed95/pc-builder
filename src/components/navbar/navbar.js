import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
const Navbar = () => {
  const { data: session } = useSession();
  return (
    <div className="bg-[#4B6BFB] w-full py-1">
      <div className="container mx-auto flex items-center justify-between w-full">
        <Link className="btn btn-neutral" href={"/pc-builder"}>
          PC Builder
        </Link>
        <div className="flex items-center gap-1 sm:gap-4">
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
          <div>
            {session?.user ? (
              <button onClick={() => signOut()} className="btn btn-neutral">
                LogOut
              </button>
            ) : (
              <Link className="btn btn-neutral" href={"/login"}>
                Login
              </Link>
            )}
          </div>
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
