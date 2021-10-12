import axios from "../utils/http";
export const Login = (data) => {
  return axios({
    url: "/adminapi/login",
    method: "post",
    data,
  });
};
