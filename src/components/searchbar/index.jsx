import React, { useState } from "react";
import { Link } from "react-router-dom";
import useApi from "../../hooks/useApi/index.jsx";
import API_URL from "../../shared/url.js";
import * as S from "./index.styles.js";

/**
 * A search bar component that allows users to search for products.
 * @returns {JSX.Element} A search bar component with search results dropdown.
 */
const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");
  const { products } = useApi(API_URL);

  // Updates the searchInput state based on user input.
  const handleSearchInput = (event) => {
    setSearchInput(event.target.value);
  };

  // Clears the search input field when a search result link is clicked.
  const handleLinkClick = () => {
    setSearchInput("");
  };

  // Filters the list of products based on the user's search input.
  const renderDropdown = () => {
    const filteredProducts = products.filter((product) =>
      product.title.toLowerCase().includes(searchInput.toLowerCase())
    );
    if (searchInput === "") {
      return null;
    }

    return (
      <S.ResultWrapper>
        <S.ResultHeading>Search results:</S.ResultHeading>
        {filteredProducts.length === 0 ? (
          <S.NoResult>No matching products found.</S.NoResult>
        ) : (
          filteredProducts.map((product) => (
            <S.ResultItem key={product.id}>
              <Link to={`/product/${product.id}`} onClick={handleLinkClick}>
                <S.ItemWrapper>
                  <img src={product.imageUrl} alt={product.title} />
                  <span>{product.title}</span>
                </S.ItemWrapper>
                <span>kr {product.discountedPrice}</span>
              </Link>
            </S.ResultItem>
          ))
        )}
      </S.ResultWrapper>
    );
  };

  return (
    <S.SearchForm role="search">
      <S.SearchWrapper>
        <S.SearchIcon aria-label="Search Icon" />
        <S.SearchBar
          type="search"
          onChange={handleSearchInput}
          value={searchInput}
          placeholder="Search Products"
          aria-label="Search products"
        />
      </S.SearchWrapper>
      {renderDropdown()}
    </S.SearchForm>
  );
};

export default SearchBar;
