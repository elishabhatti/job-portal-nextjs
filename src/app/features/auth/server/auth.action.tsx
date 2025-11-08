"use server";

import { db } from "@/config/db";
import { users } from "@/drizzle/schema";
import argon2 from "argon2";
import { eq, or } from "drizzle-orm";
import { loginUserSchema, registerUserSchema } from "../auth.schema";
import { createSessionAnSetCookies } from "./use-cases/session";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import crypto from "crypto";
import { inValidateSession } from "./use-cases/session";

export const registrationAction = async (data: {
  name: string;
  userName: string;
  email: string;
  password: string;
  role: "applicant" | "employer";
}) => {
  try {
    const { data: validatedData, error } = registerUserSchema.safeParse(data);
    if (error) return { status: "ERROR", message: error.issues[0].message };
    const { name, userName, email, password, role } = validatedData;

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
    const [result] = await db
      .insert(users)
      .values({ name, userName, email, password: hashPassword, role });

    await createSessionAnSetCookies(result.insertId);

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
    const { data: validatedData, error } = loginUserSchema.safeParse(data);
    if (error) return { status: "ERROR", message: error.issues[0].message };
    const { email, password } = validatedData;
    const [user] = await db.select().from(users).where(eq(users.email, email));

    if (!user) {
      return { status: "ERROR", message: "Invalid Email or Password." };
    }

    const isValidPassword = await argon2.verify(user.password, password);
    if (!isValidPassword) {
      return {
        status: "ERROR",
        message: "Invalid Email or Password.",
      };
    }

    await createSessionAnSetCookies(user.id);

    return {
      status: "SUCCESS",
      message: "Login Completed successfully",
    };
  } catch (error) {
    console.error(error);
    return {
      status: "ERROR",
      message: "Login failed. Please try again.",
    };
  }
};

// Logout User Action
export const logoutUserAction = async () => {
  const cookiesStore = await cookies();
  const session = cookiesStore.get("session")?.value;

  if (!session) return redirect("/login");

  const hashedToken = crypto.createHash("sha256").update(session).digest("hex");

  await inValidateSession(hashedToken);
  cookieStore.delete("session");

  return redirect("/login");
};
