"use server";

import { db } from "@/config/db";
import { users } from "@/drizzle/schema";
import argon2 from "argon2";
import { eq, or } from "drizzle-orm";

export const registrationAction = async (data: {
  name: string;
  userName: string;
  email: string;
  password: string;
  role: "applicant" | "employer";
}) => {
  try {
    const { name, userName, email, password, role } = data;

    const [user] = await db
      .select()
      .from(users)
      .where(or(eq(users.email, email), eq(users.userName, userName)));

    if (user) {
      if (user.email === email)
        return { status: "ERROR", message: "Email Already Exists" };
      else
        return {
          status: "ERROR",
          message: "Username already Exists",
        };
    }

    const hashPassword = await argon2.hash(password);
    await db
      .insert(users)
      .values({ name, userName, email, password: hashPassword, role });

    return {
      status: "SUCCESS",
      message: "Registration Completed successfully",
    };
  } catch (error) {
    console.error(error);
    return {
      status: "ERROR",
      message: "Registration failed. Please try again.",
    };
  }
};

type LoginData = {
  email: string;
  password: string;
};

export const loginUserAction = async (data: LoginData) => {
  try {
    const { email, password } = data;
    const [user] = await db.select().from(users).where(eq(users.email, email));

    if (!user) {
      return { status: "ERROR", message: "Email Already Exists" };
    }

    const isValidPassword = await argon2.verify(password, user.password)
  } catch (error) {
    console.error(error);
    return {
      status: "ERROR",
      message: "Login failed. Please try again.",
    };
  }
};
