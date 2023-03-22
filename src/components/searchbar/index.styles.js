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

// Search results
export const ResultWrapper = styled.ul`
  position: absolute;
  top: 50px;
  left: 0;
  right: 0;
  height: fit-content;
  max-height: 400px;
  overflow-y: scroll;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  list-style: none;
  padding: 1rem;
  margin: 0 auto;
  border-radius: 10px;
  z-index: 1;

  & img {
    width: 60px;
    height: 60px;
    object-fit: cover;
    border-radius: 5px;
  }

  @media (max-width: 800px) {
    left: -70%;
    right: -70%;
    min-width: 300px;
  }
`;

export const ResultHeading = styled.p`
  font-weight: bold;
  margin-bottom: 1rem;
`;

export const ResultItem = styled.li`
  a {
    color: #333;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px;

    &:hover,
    &:focus {
      background-color: #eef8fd;
      color: ${(props) => props.theme.colors.primary};
    }
  }
`;

export const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const NoResult = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  color: grey;
`;
