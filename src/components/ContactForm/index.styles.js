import styled from "styled-components";

export const PageWrapper = styled.section`
  display: flex;
  gap: 4rem;
  margin-top: 1rem;

  @media screen and (max-width: 950px) {
    flex-direction: column;
  }
`;

export const ContactInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const InfoGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  & p {
    font-weight: bold;
    display: flex;
    align-items: center;
    gap: 5px;
    color: ${(props) => props.theme.colors.primary};
  }
`;

// Contact Form
export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContactTextarea = styled.textarea`
  max-width: 100%;
  height: 150px;
  max-height: 300px;
`;

export const ErrorMessage = styled.span`
  color: red;
  font-size: 14px;
  margin: 5px;
`;
