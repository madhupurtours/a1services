function sendContactMail(e) {
  e.preventDefault();
  document.getElementById("contact-form-valid").innerHTML = "";
  document.getElementById("conphone-valid-text").innerHTML = "";

  const conFName = document.getElementById("form-1-first-name");
  const conLName = document.getElementById("form-1-last-name");
  const conEmail = document.getElementById("form-1-email");
  const conPhone = document.getElementById("form-1-phone");
  const conMessage = document.getElementById("form-1-message");

  if (
    conFName.value === "" ||
    conLName.value === "" ||
    conEmail.value === "" ||
    conPhone.value === "" ||
    conMessage.value === ""
  ) {
    document.getElementById("contact-form-valid").innerHTML =
      "<p style='color: red; font-size: 13.5px; padding: 0 15px;'>All Fields are required, please try again</p>";
  } else if (conPhone.value.length !== 10) {
    document.getElementById("conphone-valid-text").innerHTML =
      "<p style='color: red; font-size: 13.5px; padding: 0 15px;'>You did not provide the phone field correctly, it should be of 10 digits, please try again</p>";
  } else {
    document.getElementById("contact-form-btn-wrap").innerHTML =
      "<button class='disabled-form-btn' type='button'>Sending...</btn>";
    fetch("https://pacific-taiga-26288.herokuapp.com/sendMail", {
      method: "POST",
      body: JSON.stringify({
        fName: conFName.value,
        lName: conLName.value,
        email: conEmail.value,
        phone: conPhone.value,
        message: conMessage.value,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((res) => {
        console.log(res);
        document.getElementById("contact-page-form").innerHTML =
          "<p style='color: #6d0eb1; font-size: 20px; font-weight: 700;'>The Email was sent successfully, we'll reach out to you soon</p>";
      })
      .catch((err) => console.log(err));
  }
}

function sendBookingMail(e) {
  e.preventDefault();
  document.getElementById("booking-form-valid").innerHTML = "";
  document.getElementById("phone-valid-text").innerHTML = "";

  const fromCity = document.getElementById("booking-from-city");
  const toCity = document.getElementById("booking-to-city");
  const medium = document.getElementById("booking-medium");
  const departDate = document.getElementById("booking-depart-date");
  const lengthOfTravel = document.getElementById("booking-length");
  const adults = document.getElementById("booking-adults");
  const children = document.getElementById("booking-children");
  const phone = document.getElementById("booking-phone");

  if (
    fromCity.value === "" ||
    toCity.value === "" ||
    medium.value === "" ||
    departDate.value === "" ||
    lengthOfTravel.value === "" ||
    adults.value === "" ||
    children.value === "" ||
    phone.value === ""
  ) {
    document.getElementById("booking-form-valid").innerHTML =
      "<p style='color: red; font-size: 13.5px; padding: 0 15px;'>All Fields are required, please try again</p>";
  } else if (phone.value.length !== 10) {
    document.getElementById("phone-valid-text").innerHTML =
      "<p style='color: red; font-size: 13.5px; padding: 0 15px;'>You did not provide the phone field correctly, it should be of 10 digits, please try again</p>";
  } else {
    document.getElementById("booking-form-btn-wrap").innerHTML =
      "<button class='disabled-form-btn' type='button'>Sending...</btn>";
    fetch("https://pacific-taiga-26288.herokuapp.com/sendBookingMail", {
      method: "POST",
      body: JSON.stringify({
        fromCity: fromCity.value,
        toCity: toCity.value,
        medium: medium.value,
        departDate: departDate.value,
        lengthOfTravel: lengthOfTravel.value,
        adults: adults.value,
        children: children.value,
        phone: phone.value,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((res) => {
        console.log(res);
        document.getElementById("page-1-booking-form").innerHTML =
          "<p style='color: #6d0eb1; font-size: 20px; font-weight: 700;'>The Email was sent successfully, we'll reach out to you soon</p>";
      })
      .catch((err) => console.log(err));
  }
}
