import styled from "styled-components";
import HeroImage from "../../assets/hero-img.jpg";

export const HeroImg = styled.section`
  background-image: linear-gradient(
      rgba(0, 91, 135, 0.6),
      rgba(0, 91, 135, 0.6)
    ),
    url(${HeroImage});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 80vh;
  text-align: center;
  color: ${(props) => props.theme.colors.lightText};
  padding-top: 10rem;
  margin-bottom: 2rem;
`;

export const HeroHeading = styled.h1`
  font-size: 60px;
  font-weight: bold;
`;

export const HeroSlogan = styled.p`
  margin-top: 0;
  font-size: 21px;
  font-weight: 600;
`;
