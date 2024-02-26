import axios from "axios";

const login = async (event, useremail, userpassword, data, login) => {
  event.preventDefault();
  await axios
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
    });
};

export default login;
