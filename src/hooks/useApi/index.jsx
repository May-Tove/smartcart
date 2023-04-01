import { useEffect, useState } from "react";

/**
 * A custom hook for fetching data from an API.
 * @param {string} url - The URL of the API to fetch data from.
 * @returns {Object} An object with properties for the fetched data, loading state, and error state.
 * @property {Array} products - The fetched data from the API.
 * @property {boolean} isLoading - A boolean indicating whether the data is currently being fetched.
 * @property {boolean} isError - A boolean indicating whether an error occurred while fetching the data.
 */
const useApi = (url) => {
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
};

export default useApi;
