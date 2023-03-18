import styled from "styled-components";
import { CgSearch } from "react-icons/cg";

export const SearchForm = styled.form`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40%;
`;

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

export const SearchBar = styled.input`
  border: none;
  font-size: 16px;
  padding: 0.3rem;
  padding-left: 2.2rem;
  border-radius: 10px;
  border: 0.2px solid lightgrey;
  width: 100%;
`;

export const SearchIcon = styled(CgSearch)`
  position: absolute;
  top: 10px;
  left: 10px;
  transform: translate(-10%, -10%);
`;
