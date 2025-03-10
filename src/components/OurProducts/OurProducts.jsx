import Img1 from "../../assets/shirt/shirt.png";
import Img2 from "../../assets/shirt/shirt2.png";
import Img3 from "../../assets/shirt/shirt3.png";
import PropTypes from "prop-types";
import { ourProducts } from "../../lib/allProducts";
import { useEffect, useState } from "react";
import Rating from "../Rating/Rating";
import { truncate } from "../../lib/turncate";

const staticProducts = [
  {
    id: 1,
    img: Img1,
    title: "Casual Wear",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    img: Img2,
    title: "Printed shirt",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    img: Img3,
    title: "Women shirt",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const OurProducts = ({ handleOrderPopup }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const fetchedProducts = await ourProducts();
      setProducts(fetchedProducts.length ? fetchedProducts : staticProducts);
      setLoading(false);
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div className="text-center text-gray-500">Loading...</div>;
  }
  return (
    <div>
      <div className="container">
        {/* Header section */}
        <div className="text-left my-24">
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            All Products
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
            asperiores modi Sit asperiores modi
          </p>
        </div>
        {/* Body section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
          {products.slice(0, 6).map((data) => (
            <div
              key={data?.id}
              data-aos="zoom-in"
              className="rounded-2xl bg-white dark:bg-gray-800 0 dark:hover:bg-primary relative shadow-xl duration-300 group min-w-[300px] min-h-[300px] "
            >
              {/* image section */}
              <div className="">
                <img
                  src={data?.image}
                  alt=""
                  className="max-w-[160px] block mx-auto transform h-[160px] transition-transform duration-300 group-hover:scale-110 pt-4 pb-1"
                />
              </div>
              {/* details section */}
              <div className="p-4 text-center">
                {/* star rating */}
                <div className="w-full flex items-center justify-center gap-1">
                  <Rating rating={data?.rating?.rate} />
                </div>
                <p className="text-gray-500 duration-300 text-sm line-clamp-2">
                  {data?.price}
                </p>
                <h1 className="text-xl font-bold">
                  {data?.title.length > 18
                    ? truncate(data?.title, 18)
                    : data.title}
                </h1>
                <p className="text-gray-500 duration-300 text-sm line-clamp-2">
                  {data?.description}
                </p>

                <button
                  className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-primay/10 group-hover:text-white"
                  onClick={handleOrderPopup}
                >
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
OurProducts.propTypes = {
  handleOrderPopup: PropTypes.func.isRequired,
};

export default OurProducts;
