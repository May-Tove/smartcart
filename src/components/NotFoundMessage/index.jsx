import React from "react";
import { Link } from "react-router-dom";
import { PrimaryButton } from "../Button/index.styles";
import * as S from "./index.styles";

const NotFoundMessage = () => {
  return (
    <S.NotFoundWrapper>
      <S.ErrorHeader>404</S.ErrorHeader>
      <S.Message>Page not found</S.Message>
      <Link to={"/"}>
        <PrimaryButton>Go back home </PrimaryButton>
      </Link>
    </S.NotFoundWrapper>
  );
};

export default NotFoundMessage;
