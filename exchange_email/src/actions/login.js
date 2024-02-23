import axios from "axios";

const login = (useremail, userpassword) => {
  event.preventDefault();
  axios
    .post("http://localhost:3001/login", {
      useremail,
      userpassword,
    })
    .then((response) => {
      console.log(response);
    });
};

export default login;
