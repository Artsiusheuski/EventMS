import axios from "axios";

const registration = async (useremail, userpassword) => {
  if (!useremail || !userpassword) {
    alert("Fill in your password and email");
    return;
  } else alert("Sucsefully");

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
