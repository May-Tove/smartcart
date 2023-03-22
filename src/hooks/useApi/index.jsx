import { useEffect, useState } from "react";

function useApi(url) {
  const [products, setProducts] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function getProducts() {
      try {
        setIsLoading(true);
        setIsError(false);
        const response = await fetch(url);
        const json = await response.json();
        setProducts(json);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getProducts();
  }, [url]);

  return { products, isLoading, isError };
}

export default useApi;
