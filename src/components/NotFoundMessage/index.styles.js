import styled from "styled-components";

export const NotFoundWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const ErrorHeader = styled.h1`
  color: ${(props) => props.theme.colors.primary};
  font-size: 120px;
`;

export const Message = styled.p`
  font-size: 25px;
  margin-bottom: 1rem;
`;
