import React from "react";
import * as S from "./index.styles";

/**
 * Renders a component to display a fetch error message.
 * @param {string} message - The error message to display.
 * @returns {JSX.Element}
 */
function FetchError({ message = "An unexpected error occurred" }) {
  return (
    <S.FetchErrorWrapper>
      <S.FetchErrorMessage>{message}</S.FetchErrorMessage>
    </S.FetchErrorWrapper>
  );
}

export default FetchError;
