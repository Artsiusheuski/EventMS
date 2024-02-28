import axios from "axios";

const login = (event, useremail, userpassword, data, login) => {
  event.preventDefault();

  axios
    .post("http://localhost:3001/login", {
      useremail,
      userpassword,
    })
    .then((response) => {
      if (response.data.message) {
        alert(response.data.message);
      } else {
        login(true);
        data(response.data);
        sessionStorage.setItem("key", JSON.stringify(response.data));
      }
    })
    .catch((err) => {
      console.log(err.response.data.message);
    });
};

export default login;
