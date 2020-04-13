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

export const login = async ({ email, password }: ILogin) =>
  await client.post("/user/login", { email, password });

export const logout = () => client.post("/user/logout");

export const register = async ({
  email,
  name,
  password,
  passwordChk
}: IRegister) =>
  await client.post("/user/signup", { email, name, password, passwordChk });

export const check = async () => await client.get("/user/check");
