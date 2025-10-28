import { headers } from "next/headers";
import crypto from "crypto";
import { getIpAddress } from "./location";

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
}: CreateSessionData) => {};

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
