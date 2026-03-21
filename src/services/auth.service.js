import authApi from "../apis/auth.api.js";

const signup = async (userInfo) => {
  const username = userInfo.username;
  const email = userInfo.email;
  const password = userInfo.password;
  const phone = userInfo.phone;
  const role = userInfo.role;
  const response = {
    success: true,
    listErr: [],
  };
  try {
    const data = await authApi.signup(username, email, password, phone, role);
  } catch (Err) {
    response.success = false;
    if (Err.response.status === 400) {
      const errors = Err.response.data.errors;
      errors.forEach((err) => {
        response.listErr.push({
          path: err.path,
          msg: err.msg,
        });
      });
    } else console.error(Err);
  }
  return response;
};
const login = async (userInfo) => {
  const email = userInfo.email;
  const password = userInfo.password;
  const response = {
    success: true,
    listErr: [],
  };
  try {
    const data = await authApi.login(email, password);
  } catch (Err) {
    response.success = false;
    if (Err.response.status === 400) {
      const errors = Err.response.data.errors;
      errors.forEach((err) => {
        response.listErr.push({
          path: err.path,
          msg: err.msg,
        });
      });
    } else if (Err.response.status === 401){
      const error = Err.response.data.errors;
      console.log(Err.response);
      response.listErr.push({
        path: "auth",
        msg: "Invalid Credential"
      })
    }
    else console.error(Err);
  }
  return response;
};
export default { signup, login };
