export const titleValidation = {
  required: { value: true, message: "This item is required." },
  maxLength: {
    value: 15,
    message: "limit is " + 15 + "characters.",
  },
  pattern: {
    value: /^[A-Za-z0-9\s_-]+$/,
    message: "Alphanumeric characters, spaces, hyphen, underscore only.",
  },
};
export const queryValidation = {
  required: { value: true, message: "This item is required." },
  maxLength: {
    value: 5000,
    message: "limit is " + 5000 + "characters.",
  },
};
export const exampleValidation = {
  required: { value: true, message: "This item is required." },
  maxLength: {
    value: 5000,
    message: "limit is " + 5000 + "characters.",
  },
};
