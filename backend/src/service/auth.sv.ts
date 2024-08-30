import { configENV } from "@/config";

export const loginService = async (
  email: string,
  password: string,
  include?: boolean
) => {
  if (configENV.HOST.email === email && configENV.HOST.password === password) {
    return {
      id: crypto.randomUUID(),
      email: configENV.HOST.email,
      password: configENV.HOST.password,
      role: "admin",
      name: "Walid",
    };
  }
  return null;
};
