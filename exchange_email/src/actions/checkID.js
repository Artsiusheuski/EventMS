import axios from "axios";

const checkID = async (event, userID, setEmail) => {
  event.preventDefault();
  await axios
    .post("http://localhost:3001/login/useroom/scanemail", {
      userID,
    })
    .then((response) => {
      if (response.data.message) {
        alert(response.data.message);
      } else {
        console.log(response.data);
        setEmail(response.data);
      }
    });
};

export default checkID;
