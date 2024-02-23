import axios from "axios";

const registration = async (useremail, userpassword) => {
  event.preventDefault();
  if (!useremail || !userpassword) {
    alert("Fill in your password and email");
    return;
  }

  try {
    const response = await axios.post("http://localhost:3001/register", {
      useremail,
      userpassword,
    });
    alert(response.data.message);
  } catch (e) {
    alert(e.response.data.message);
  }
};

export default registration;
