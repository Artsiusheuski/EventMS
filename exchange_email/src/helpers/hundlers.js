// Functions that check email and password

const REGULAR =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

const emailHundler = (event, setUserEmail, setEmailError) => {
  setUserEmail(event.target.value);

  if (!REGULAR.test(String(event.target.value).toLowerCase())) {
    setEmailError("The Email no-correct");
  } else {
    setEmailError("");
  }
};

const passwordHundler = (event, setUserPassword, setPasswordError) => {
  setUserPassword(event.target.value.trim());
  if (event.target.value.length < 5 || event.target.value.length > 9) {
    setPasswordError(
      "The password must contain at least 5 and no more than 9 characters."
    );
  } else {
    setPasswordError("");
  }
};

const blurHundler = (event, setEmailDirty, setPasswordDirty) => {
  switch (event.target.name) {
    case "email":
      setEmailDirty(true);
      break;
    case "password":
      setPasswordDirty(true);
      break;
  }
};

export { emailHundler, passwordHundler, blurHundler };
