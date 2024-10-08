import { Response, Request } from "express";
import { JwtHelper } from "../../helpers";
import {  loginService } from "@/service";
import { configENV } from "@/config";

export const login = async (req: Request, res: Response) => {
  const { email, password, recall } = req.body as {
    email: string;
    password: string;
    recall: boolean;
  };

  try {
    if (!email || !password) {
      return res.status(400).json({
        status: false,
        message: "Email and password are required",
        data: null,
      });
    }
    const user = await loginService(email, password, true);

    if (!user) {
      return res.status(402).json({
        status: false,
        message: "User does not exist",
        data: null,
      });
    }

    const { accessToken, refreshToken } = JwtHelper.generateToken(
      { id: user.id, recall },
      recall,
      true
    );

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: configENV.nodeEnv === "production",
      sameSite: "strict",
      path: "/",
    });

    const { password: undefined, ...userWithoutPassword } = user;
    res.status(200).json({
      status: true,
      message: "User logged in successfully",
      data: {
        ...userWithoutPassword,
        accessToken,
      },
    });
  } catch (error) {
    if (error instanceof Error) {
      console.error("~> Error :", error.message);
    } else {
      console.error("An unknown error occurred");
    }
    res.status(500).json({
      status: false,
      message: "Internal server error",
      data: null,
    });
  }
};

export const refresh = async (req: Request, res: Response) => {
  const refreshToken = req.cookies.refreshToken as string;

  try {
    if (!refreshToken) {
      return res.status(401).json({
        status: false,
        message: "Unauthorized",
        data: null,
      });
    }
    const { id, recall } = JwtHelper.decodeToken(refreshToken);
    const { accessToken } = JwtHelper.generateToken({ id }, recall, false);

    res.status(201).json({
      status: true,
      message: "Token refreshed successfully",
      data: {
        accessToken,
      },
    });
  } catch (error) {
    if (error instanceof Error) {
      console.error("~> Error :", error.message);
    } else {
      console.error("An unknown error occurred");
    }
    res.status(500).json({
      status: false,
      message: "Internal server error",
      data: null,
    });
  }
};
