import React from "react";
import { CgMail, CgSmartphone } from "react-icons/cg";
import useForm from "../../hooks/useForm";
import validateForm from "../../utilities/validateForm";
import { PrimaryButton } from "../Button/index.styles";
import ContactSuccess from "../ContactSuccess";
import * as S from "./index.styles";

/**
 * A component that displays a contact form and a contact information section
 * */
const ContactForm = () => {
  const { handleInputChange, formData, handleSubmit, errors, isSubmitted } =
    useForm(validateForm);

  return (
    <>
      {isSubmitted ? (
        <ContactSuccess message={"We will get back to you within 48 hours"} />
      ) : (
        <S.PageWrapper>
          <S.ContactInfoWrapper>
            <p>
              We are happy to answer any questions you might have. Send us a
              message!
            </p>
            <S.InfoGroup>
              <p>
                <CgMail aria-label="Email icon" /> Email
              </p>
              <a href="mailto:smartcart@contact.com">smartcart@contact.com</a>
            </S.InfoGroup>
            <S.InfoGroup>
              <p>
                <CgSmartphone aria-label="Smart phone icon" /> Phone
              </p>
              <a href="tel:+4712345678">+47 12 34 56 78</a>
            </S.InfoGroup>
          </S.ContactInfoWrapper>
          <S.FormWrapper onSubmit={handleSubmit}>
            <h2>Send us a message</h2>
            <S.InputGroup>
              <label htmlFor="name">* Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              {errors.name && <S.ErrorMessage>{errors.name}</S.ErrorMessage>}
            </S.InputGroup>
            <S.InputGroup>
              <label htmlFor="email">* Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              {errors.email && <S.ErrorMessage>{errors.email}</S.ErrorMessage>}
            </S.InputGroup>
            <S.InputGroup>
              <label htmlFor="subject">* Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
              />
              {errors.subject && (
                <S.ErrorMessage>{errors.subject}</S.ErrorMessage>
              )}
            </S.InputGroup>
            <S.InputGroup>
              <label htmlFor="body">* Message</label>
              <S.ContactTextarea
                id="body"
                name="body"
                value={formData.body}
                onChange={handleInputChange}
                required
              />
              {errors.body && <S.ErrorMessage>{errors.body}</S.ErrorMessage>}
            </S.InputGroup>
            <PrimaryButton type="submit">Submit</PrimaryButton>
          </S.FormWrapper>
        </S.PageWrapper>
      )}
    </>
  );
};

export default ContactForm;
