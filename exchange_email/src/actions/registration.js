import axios from "axios";

const registration = (event, useremail, userpassword) => {
  event.preventDefault();

  if (!useremail || !userpassword) {
    alert("Fill in your password and email");
    return;
  }

  axios
    .post("http://localhost:3001/register", {
      useremail,
      userpassword,
    })
    .then((response) => {
      alert(response.data.message);
    })
    .catch((err) => {
      console.log(err.response.data.message);
    });
};

export default registration;
