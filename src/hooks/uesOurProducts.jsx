import { useEffect, useState } from "react";
import { getOurProducts } from "../lib/allProducts";

const useOurProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const fetchedProducts = await getOurProducts();
      setProducts(fetchedProducts);
      setLoading(false);
    };

    fetchProducts();
  }, []);
  return [products, setProducts, loading, setLoading];
};

export default useOurProducts;
