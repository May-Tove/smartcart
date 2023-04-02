import styled from "styled-components";

export const BackButton = styled.button`
  border: 0;
  border-radius: ${(props) => props.theme.borderRadius.radius};
  background-color: transparent;
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  margin-bottom: 1rem;
  font-size: 16px;
  padding: 2px;
  transition: all 0.3s ease;

  &:hover,
  &:focus {
    background-color: ${(props) => props.theme.colors.grey};
    transition: all 0.3s ease;
  }
`;
