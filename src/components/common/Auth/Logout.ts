import axios from "axios";

const Logout = () => {
  axios.post("user/logout");
};

export default Logout;
