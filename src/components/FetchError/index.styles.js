import styled from "styled-components";

export const FetchErrorWrapper = styled.div`
  padding: 2rem;
  margin: 1rem 0;
  background-color: #ffe3e5;
  border-radius: ${(props) => props.theme.borderRadius.radius};
`;

export const FetchErrorMessage = styled.div`
  color: red;
  text-align: center;
`;
