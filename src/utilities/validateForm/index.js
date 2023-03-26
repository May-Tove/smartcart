/**
 * Validates form data and returns an object containing errors, if any.
 * @param {Object} formData - The form data object to be validated
 * @param {string} formData.name - The name value entered in the form
 * @param {string} formData.email - The email value entered in the form
 * @param {string} formData.subject - The subject value entered in the form
 * @param {string} formData.body - The body value entered in the form
 * @returns {Object} An object containing validation errors, if any
 */
function validateForm(formData) {
  let errors = {};

  if (!formData.name.trim()) {
    errors.name = "Name is required";
  } else if (formData.name.length < 3) {
    errors.name = "Name must be at least 3 characters long";
  }

  if (!formData.email) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    errors.email = "Email address is invalid";
  }

  if (!formData.subject) {
    errors.subject = "Subject is required";
  } else if (formData.subject.length < 3) {
    errors.subject = "Subject must be at least 3 characters long";
  }

  if (!formData.body) {
    errors.body = "Message is required";
  } else if (formData.body.length < 3) {
    errors.body = "Message must be at least 3 characters long";
  }

  return errors;
}

export default validateForm;
