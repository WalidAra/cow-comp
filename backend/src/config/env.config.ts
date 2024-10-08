import dotenv from "dotenv";
dotenv.config();

export const configENV = {
  port: process.env.PORT || 3001,
  nodeEnv: process.env.NODE_ENV || "development",
  jwtSecret: process.env.JWT_SECRET,
  HOST: {
    email: process.env.HOST_EMAIL,
    password: process.env.HOST_PASSWORD,
  },
};
