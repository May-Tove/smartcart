import styled from "styled-components";

export const PrimaryButton = styled.button`
  cursor: pointer;
  padding: 0.5rem 1rem;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  font-weight: bold;
  font-size: 14px;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  border: none;
  border-radius: ${(props) => props.theme.borderRadius.radius};
  transition: all 0.3s ease;

  &:hover,
  &:focus {
    opacity: 0.7;
    transition: all 0.3s ease;
  }
`;
