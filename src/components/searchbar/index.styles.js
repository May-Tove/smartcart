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
  padding-left: 2.2rem;
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
  background-color: ${(props) => props.theme.colors.white};
  box-shadow: ${(props) => props.theme.shadows.boxShadow};
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
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px;

    &:hover,
    &:focus {
      background-color: ${(props) => props.theme.colors.secondary};
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
  color: ${(props) => props.theme.colors.textMuted};
`;
