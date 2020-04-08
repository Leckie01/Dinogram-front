import client from "./client";

interface ILogin {
  email: string;
  password: string;
}

interface IRegister {
  email: string;
  name: string;
  password: string;
  passwordChk: string;
}

export const login = ({ email, password }: ILogin) => {
  client.post("/user/login", { email, password });
};

export const register = ({ email, name, password, passwordChk }: IRegister) => {
  client.post("/user/signup", { email, name, password, passwordChk });
};

export const check = () => client.get("/user/check");
