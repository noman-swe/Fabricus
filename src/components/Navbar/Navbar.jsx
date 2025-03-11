/* eslint-disable no-unused-vars */
import Logo from "../../assets/logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import DarkMode from "./DarkMode";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import useNewProducts from "../../hooks/useNewProducts";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Top Rated",
    link: "/#topRated",
  },
  {
    id: 4,
    name: "Kids Wear",
    link: "/#",
  },
  {
    id: 5,
    name: "Mens Wear",
    link: "/#",
  },
  {
    id: 6,
    name: "Electronics",
    link: "/#",
  },
];

const clothesCat = [
  {
    id: 1,
    name: "Kids Wear",
    link: "/#kids",
  },
  {
    id: 2,
    name: "Mens Wear",
    link: "/#mens",
  },
  {
    id: 3,
    name: "Top Rated",
    link: "/#top",
  },
];

// eslint-disable-next-line react/prop-types, no-unused-vars
const Navbar = ({ isLanding = false, cartCount }) => {
  // const handleCarts = () => {
  //   alert("carts");
  // };
  const [products, categories] = useNewProducts();
  console.log("🚀 ~ Navbar ~ categories:", categories);

  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      {/* upper Navbar */}
      <div className="bg-primary/40 py-2">
        <div className="container flex justify-between items-center">
          <div>
            <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
              <img src={Logo} alt="Logo" className="w-10" />
              Fabricus
            </a>
          </div>

          {/* search bar */}
          <div className="flex justify-between items-center gap-4">
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="search"
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800"
              />
              <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
            </div>

            {/* order button */}
            {isLanding && (
              <button className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white  py-1 px-4 rounded-full flex items-center gap-3 group">
                <Link to={"/carts"}>
                  <div className="relative">
                    <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
                    {cartCount > 0 && (
                      <span className="absolute -top-3 -right-[30px] bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                        {cartCount}
                      </span>
                    )}
                  </div>
                </Link>
              </button>
            )}

            {/* Darkmode Switch */}
            <div>
              <DarkMode />
            </div>
          </div>
        </div>
      </div>
      {/* lower Navbar */}
      <div data-aos="zoom-in" className="flex justify-center">
        <ul className="sm:flex hidden items-center gap-4">
          {Menu.map((data) => (
            <li key={data?.id}>
              <a
                href={data?.link}
                className="inline-block px-4 hover:text-primary duration-200"
              >
                {data?.name}
              </a>
            </li>
          ))}
          {/* Simple Dropdown and Links */}
          <li className="group relative cursor-pointer">
            <a href="#" className="flex items-center gap-[2px] py-2">
              Clothes
              <span>
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
              </span>
            </a>
            <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md">
              <ul>
                {clothesCat.map((data) => (
                  <li key={data?.id}>
                    <a
                      href={data?.link}
                      className="inline-block w-full rounded-md p-2 hover:bg-primary/20 "
                    >
                      {data?.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
          {/* Simple Dropdown and Links */}
          <li className="group relative cursor-pointer">
            <a href="#" className="flex items-center gap-[2px] py-2">
              New Products
              <span>
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
              </span>
            </a>
            <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md">
              <ul>
                {categories?.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data}
                      className="inline-block w-full rounded-md p-2 hover:bg-primary/20 capitalize "
                    >
                      {data}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
Navbar.propTypes = {
  cartCount: PropTypes.number,
  // categories: PropTypes.arrayOf(PropTypes.string),
};

export default Navbar;
