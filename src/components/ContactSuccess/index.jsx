import React from "react";
import { Link } from "react-router-dom";
import { PrimaryButton } from "../Button/index.styles";
import * as S from "./index.styles";

const ContactSuccess = ({ message }) => {
  return (
    <S.Overlay>
      <S.Popup>
        <h2>Thank you! Your message has been sent.</h2>
        <p>{message}</p>
        <Link to={"/"}>
          <PrimaryButton>Back to Shop</PrimaryButton>
        </Link>
      </S.Popup>
    </S.Overlay>
  );
};

export default ContactSuccess;
