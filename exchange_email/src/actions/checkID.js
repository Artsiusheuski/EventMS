import axios from "axios";

const checkID = (event, userID, setEmail) => {
  event.preventDefault();

  axios
    .post("http://localhost:3001/login/useroom/scanemail", {
      userID,
    })
    .then((response) => {
      if (response.data.message) {
        alert(response.data.message);
        setEmail("");
      } else {
        setEmail(response.data);
      }
    })
    .catch((err) => {
      console.log(err.response.data.message);
    });
};

export default checkID;
