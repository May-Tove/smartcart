import styled from "styled-components";

export const BackButton = styled.button`
  border: 0;
  border-radius: 5px;
  background-color: transparent;
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  margin-bottom: 1rem;
  font-size: 16px;
  padding: 2px;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme.colors.grey};
    transition: all 0.3s ease;
  }
`;
