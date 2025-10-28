import { headers } from "next/headers";
import crypto from "crypto";
import { getIpAddress } from "./location";
import { db } from "@/config/db";
import { sessions } from "@/drizzle/schema";

type CreateSessionData = {
  userAgent: string;
  ip: string;
  userId: number;
  token: string;
};

const generateSessionToken = () => {
  return crypto.randomBytes(32).toString("hex").normalize();
};

export const createUserSession = async ({
  token,
  userId,
  userAgent,
  ip,
}: CreateSessionData) => {
  const hashesToken = crypto.createHash("sha-256").update(token).digest("hex");

  const [result] = await db.insert(sessions).values({
    userId,
    expiresAt: new Date(Date.now() + SESSION_LIFETIME * 1000),
    ip,
    userAgent,
  });
};

export const createSessionAnSetCookies = async (userId: number) => {
  const token = generateSessionToken();
  const ip = getIpAddress();
  const headersList = await headers();

  await createUserSession({
    token,
    userId: userId,
    userAgent: headersList.get("user-agent") || "",
    ip: ip,
  });
};
