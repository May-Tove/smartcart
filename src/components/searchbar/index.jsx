import React from "react";
import * as S from "./index.styles.js";

export const SearchBar = () => {
  return (
    <S.SearchForm role="search">
      <S.SearchWrapper>
        <S.SearchIcon />
        <S.SearchBar
          type="search"
          placeholder="Search Products"
          aria-label="Search products"
        />
      </S.SearchWrapper>
    </S.SearchForm>
  );
};
