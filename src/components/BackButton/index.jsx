import React from "react";
import { useNavigate } from "react-router-dom";
import { CgArrowLeft } from "react-icons/cg";
import * as S from "./index.styles";

/**
 * A React component that renders a back button and navigates to the previous page when clicked.
 * @returns {JSX.Element}
 */
const BackButton = () => {
  const navigate = useNavigate();

  // Navigates to the previous page using the useNavigate hook from react-router-dom.
  function handleClick() {
    navigate(-1);
  }

  return (
    <S.BackButton onClick={handleClick}>
      <CgArrowLeft /> Back
    </S.BackButton>
  );
};

export default BackButton;
