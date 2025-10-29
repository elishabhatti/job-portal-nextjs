import { cookies, headers } from "next/headers";
import crypto from "crypto";
import { getIpAddress } from "./location";
import { db } from "@/config/db";
import { sessions } from "@/drizzle/schema";
import { SESSION_LIFETIME } from "@/config/constant";

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
  const hashedToken = crypto.createHash("sha256").update(token).digest("hex");

  const [session] = await db.insert(sessions).values({
    id: hashedToken,
    userId,
    expiresAt: new Date(Date.now() + SESSION_LIFETIME * 1000),
    ip,
    userAgent,
  });
  return session;
};

export const createSessionAnSetCookies = async (userId: number) => {
  const token = generateSessionToken();
  const ip = await getIpAddress();
  const headersList = await headers();

  await createUserSession({
    token,
    userId: userId,
    userAgent: headersList.get("user-agent") || "",
    ip: ip,
  });

  const cookiesStore = await cookies();
  cookiesStore.set("session", token, {
    secure: true,
    httpOnly: true,
    maxAge: SESSION_LIFETIME,
  });
};
