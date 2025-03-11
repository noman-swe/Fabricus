import { useEffect, useState } from "react";
import { getCosmetics } from "../lib/allProducts";

const useNewProducts = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetchedProducts = await getCosmetics();
        if (fetchedProducts?.products) {
          setProducts(fetchedProducts.products);
          setCategories([
            ...new Set(
              fetchedProducts.products.map((product) => product?.category)
            ),
          ]);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return [products, categories, loading];
};

export default useNewProducts;
