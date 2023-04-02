import styled from "styled-components";

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 0 2rem 0;
  margin: 0 auto;
  background-color: ${(props) => props.theme.colors.grey};
  font-size: 14px;
`;

export const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90vw;
  border-bottom: 0.5px solid grey;
  padding-bottom: 2rem;

  @media screen and (max-width: 960px) {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
`;

export const FooterLogo = styled.img`
  width: 100%;
  max-width: 200px;
  object-fit: cover;

  @media screen and (max-width: 960px) {
    margin: 0 auto;
  }
`;

export const LinkWrapper = styled.div`
  display: flex;
  gap: 4rem;

  @media screen and (max-width: 960px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 2rem;
  }
`;

export const LinkGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  & span {
    font-weight: 500;
  }
`;

export const Payment = styled.div`
  display: flex;
  font-size: 1.8rem;
  gap: 10px;

  @media screen and (max-width: 960px) {
    margin: 0 auto;
  }
`;

export const Copyright = styled.div`
  padding-top: 2rem;
  color: ${(props) => props.theme.colors.textMuted}; ;
`;
