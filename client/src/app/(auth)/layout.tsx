import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Authontication",
  description: "Login to dashboard",
};

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="w-full h-screen flex items-center justify-center">
      {children}
    </main>
  );
};

export default AuthLayout;
