// Check Validation for Slider Form

// Check Name Validation
const checkName = (name) => {
  let nameErr = validateName(name);
  if (isEmpty(nameErr)) {
    document.getElementById("name_error0").innerHTML = "";
    return true;
  } else {
    document.getElementById("name_error0").innerHTML = nameErr;
    return false;
  }
};

// Check Email Validation
const checkEmail = (email) => {
  let emailErr = validateEmail(email);
  if (isEmpty(emailErr)) {
    document.getElementById("email_error0").innerHTML = "";
    return true;
  } else {
    document.getElementById("email_error0").innerHTML = emailErr;
    return false;
  }
};

// Check Contact Validation
const checkContact = (contact) => {
  let contactErr = validateContact(contact);
  if (isEmpty(contactErr)) {
    document.getElementById("contact_error0").innerHTML = "";
    return true;
  } else {
    document.getElementById("contact_error0").innerHTML = contactErr;
    return false;
  }
};

document.getElementById("query_form").addEventListener("submit", (e) => {
  e.preventDefault();

  let form_values = document.getElementById("query_form");
  let form_data = Object.fromEntries(new FormData(form_values));

  let isValidName = checkName(form_data.san_name);
  let isValidEmail = checkEmail(form_data.san_email);
  let isValidContact = checkContact(form_data.san_contact);

  if (isValidName && isValidEmail && isValidContact) {
    alert("verification Passed: Form 1");

    // Store Data to the LocalStorage
    const savedData = {
      name: form_data.san_name,
      email: form_data.san_email,
      contact: form_data.san_contact,
      business_type: form_data.san_business_type,
      message: form_data.san_message
    };
    window.localStorage.setItem("userSendInfo", JSON.stringify(savedData));
  } else {
    alert("Verification Failed: Form 1");
  }
});

//  Check Validation For Contact Form
// Check Name Validation
const checkName2 = (name) => {
  let nameErr = validateName(name);
  if (isEmpty(nameErr)) {
    document.getElementById("name_error1").innerHTML = "";
    return true;
  } else {
    document.getElementById("name_error1").innerHTML = nameErr;
    return false;
  }
};

// Check Email Validation
const checkEmail2 = (email) => {
  let emailErr = validateEmail(email);
  if (isEmpty(emailErr)) {
    document.getElementById("email_error1").innerHTML = "";
    return true;
  } else {
    document.getElementById("email_error1").innerHTML = emailErr;
    return false;
  }
};

// Check Contact Validation
const checkContact2 = (contact) => {
  let contactErr = validateContact(contact);
  if (isEmpty(contactErr)) {
    document.getElementById("contact_error1").innerHTML = "";
    return true;
  } else {
    document.getElementById("contact_error1").innerHTML = contactErr;
    return false;
  }
};

// Onsubmit for Form 2
document.getElementById("query_form2").addEventListener("submit", (e) => {
  e.preventDefault();

  let form_values = document.getElementById("query_form2");
  let form_data = Object.fromEntries(new FormData(form_values));
  console.log(form_data);
  let isValidName = checkName2(form_data.san_name1);
  let isValidEmail = checkEmail2(form_data.san_email1);
  let isValidContact = checkContact2(form_data.san_contact1);

  if (isValidName && isValidEmail && isValidContact) {
    alert("verification Passed : Form 2");

    const savedData = {
      name: form_data.san_name1,
      email: form_data.san_email1,
      contact: form_data.san_contact1,
      business_type: form_data.san_business_type1,
      message: form_data.san_message1
    };
    window.localStorage.setItem("userSendInfo2", JSON.stringify(savedData));
  } else {
    alert("Verification Failed: Form 2");
  }
});
