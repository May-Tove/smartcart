import React, { useState } from "react";
import { Link } from "react-router-dom";
import useApi from "../../hooks/useApi/index.jsx";
import { API_URL } from "../../shared/url.js";
import * as S from "./index.styles.js";

export const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");
  const { products } = useApi(API_URL);

  const handleSearchInput = (event) => {
    setSearchInput(event.target.value);
  };

  const handleLinkClick = () => {
    setSearchInput("");
  };

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
        <S.SearchIcon />
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
