import { useState } from "react";

/**
 * Custom hook for handling form state and submission.
 * @param {function} validate - The validation function to use for the form data
 * @returns {Object} An object containing the form state and functions for handling form changes and submission
 */
const useForm = (validate) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    body: "",
  });

  const [errors, setErrors] = useState({});

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors = validate(formData);

    if (Object.keys(validationErrors).length === 0) {
      console.log(formData);
      setIsSubmitted(true);
    }

    setErrors(validationErrors);
  };

  return { handleInputChange, formData, handleSubmit, errors, isSubmitted };
};

export default useForm;
