import { NavLink } from "react-router";
import Logo from "./Logo";
import Theme from "./Theme";
import { FaUserCircle, FaBriefcase } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { IoSend } from "react-icons/io5";

export default function Navbar() {
  type NavItem = {
    name: string;
    icon: React.ReactNode;
  };
  const navItems: NavItem[] = [
    { name: "home", icon: <AiFillHome size="25" /> },
    { name: "about", icon: <FaUserCircle size="25" /> },
    { name: "projects", icon: <FaBriefcase size="25" /> },
    { name: "contact", icon: <IoSend size="25" /> },
  ];

  return (
    <>
      <div
        className={
          "  dark:border-gray-800  px-5 sm:px-10 lg:px-20 backdrop-blur-sm fixed w-full border-b border-gray-300 z-50 flex items-center justify-between py-3"
        }
      >
        <Logo />
        <nav className=" flex align-center justify-between gap-8">
          <ul className="hidden md:flex gap-10 items-center justify-center font-medium ">
            {navItems.map((item) => (
              <li
                key={item.name}
                className="hover:text-black transition-all duration-300 ease-in-out text-gray-600 dark:text-gray-400 dark:hover:text-white text-sm cursor-pointer border-black"
              >
                <NavLink
                  to={`/${item.name}`}
                  className={({ isActive }) =>
                    isActive ? "dark:text-white text-black text-sm " : ""
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
          <Theme />
        </nav>
      </div>

      <div className="h-fit fixed bottom-2  z-50 w-full flex md:hidden items-center justify-center">
        <nav className="w-fit backdrop-blur-xl h-full border items-center justify-center flex rounded-2xl dark:border-gray-700 border-gray-300 ">
          <ul className="flex gap-4 items-center justify-center font-medium  p-1">
            {navItems.map((item) => (
              <li
                key={item.name}
                className="hover:text-black transition-all duration-300 ease-in-out text-gray-600 dark:text-gray-400 dark:hover:text-white text-sm cursor-pointer  p-2 rounded-xl dark:bg-black bg-gray-300"
              >
                <NavLink
                  to={`/${item.name}`}
                  className={({ isActive }) =>
                    isActive ? "dark:text-white text-black " : ""
                  }
                >
                  {item.icon}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
