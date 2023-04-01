import React from "react";
import { Link } from "react-router-dom";
import { PrimaryButton } from "../Button/index.styles";
import * as S from "./index.styles";

/**
 * A component that displays a success message after submitting a contact form.
 * @param {Object} props - The component props.
 * @param {string} props.message - The success message to be displayed.
 * @returns {JSX.Element} A component that displays a success message after submitting a contact form.
 */
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
