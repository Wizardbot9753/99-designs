// Checks if the input Field is empty
const isEmpty = (value) =>
  value === "" || value === undefined || value === null;

const validateInput = (value, fieldName) =>
  isEmpty(value) ? `${fieldName} cannot be left blank` : "";

// Function to Validate Name
const validateName = (name) => {
  let nameErr = validateInput(name, "Name");
  return nameErr !== "" ? nameErr : name.length < 3 ? "Name is too Short" : "";
};

// Function to Validate Email
const validateEmail = (email) => {
  let emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let emailErr = validateInput(email, "Email");
  return emailErr !== ""
    ? emailErr
    : !email.match(emailRegex)
    ? "Invalid Email: Email Format eg. abc@def.xyz"
    : "";
};

// Function to Validate Contacts
const validateContact = (contact) => {
  let validRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  let contactErr = validateInput(contact, "Contact No.");

  if (contactErr == "") {
    if (!validNumber(contact)) {
      contactErr = `Contact No. only should only contains digit.`;
    } else if (contact.length < 10) {
      contactErr = `Contact No. can't be less than 10 characters `;
    } else if (contact.length > 10) {
      contactErr = `Contact No. can't be more than 10 characters `;
    }
  }

  return contactErr !== ""
    ? contactErr
    : !contact.match(validRegex)
    ? "Invalid Contact No."
    : "";
};

function validNumber(num) {
  return /^[0-9]+$/.test(num);
}
