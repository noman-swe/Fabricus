/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";
import Rating from "../Rating/Rating";
import { truncate } from "../../lib/turncate";
import { addToCart } from "../../lib/addToCart";
import { useLocation, useNavigate } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
const NewItems = ({
  isLanding = false,
  products,
  loading,
  selectedCategory,
}) => {
  const [productsbyCat, setProductsbyCat] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (selectedCategory && products.length > 0) {
      setProductsbyCat(
        products.filter((product) => product?.category === selectedCategory)
      );
    }
  }, [products, selectedCategory, location]);

  if (loading) {
    return <div className="text-center text-gray-500">Loading...</div>;
  }

  return (
    <div>
      {/* <Navbar /> */}
      <div className="container">
        {/* Header section */}
        {!isLanding && (
          <div className="my-20">
            {/* <Navbar /> */}
            <div className="text-left ">
              <h1 data-aos="fade-up" className="text-3xl font-bold">
                All Products
              </h1>
              <p data-aos="fade-up" className="text-xs text-gray-400">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
                asperiores modi Sit asperiores modi
              </p>
            </div>
            {/* <Link to={"/"}> */}
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-0.5 bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-primay/10 group-hover:text-white"
            >
              <IoIosArrowRoundBack size={24} /> Back
            </button>
            {/* </Link> */}
          </div>
        )}
        {/* Body section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
          {productsbyCat?.map((data) => (
            <div
              key={data?.id}
              data-aos="zoom-in"
              className="rounded-2xl bg-white dark:bg-gray-800 0 dark:hover:bg-primary relative shadow-xl duration-300 group min-w-[300px] min-h-[300px]"
            >
              {/* image section */}
              <div className="">
                <img
                  src={data?.thumbnail}
                  alt=""
                  className="max-w-[160px] block mx-auto transform h-[160px] transition-transform duration-300 group-hover:scale-110 pt-4 pb-1"
                />
              </div>
              {/* details section */}
              <div className="p-4 text-center space-y-3">
                {/* star rating */}
                <div className="w-full flex items-center justify-center gap-1">
                  <Rating rating={data?.rating} />
                </div>
                <p className="text-gray-500 duration-300 text-sm line-clamp-2">
                  Price: ${data?.price}
                </p>
                <h1 className="text-xl font-bold">
                  {data?.title.length > 25
                    ? truncate(data?.title, 25)
                    : data.title}
                </h1>
                <p className="text-gray-500 duration-300 text-sm line-clamp-2">
                  {data?.description}
                </p>

                <button
                  className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-primay/10 group-hover:text-white"
                  onClick={() => {
                    addToCart(data);
                  }}
                >
                  Add To Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
NewItems.propTypes = {
  isLanding: PropTypes.bool,
  // setCategories: PropTypes.func.isRequired,
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      category: PropTypes.string,
      thumbnail: PropTypes.string,
      rating: PropTypes.number,
      price: PropTypes.number,
      title: PropTypes.string,
      description: PropTypes.string,
    })
  ).isRequired,
  loading: PropTypes.bool,
  selectedCategory: PropTypes.string,
};

export default NewItems;
