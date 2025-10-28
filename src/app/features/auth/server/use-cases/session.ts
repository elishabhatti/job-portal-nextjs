import { headers } from "next/headers";
import crypto from "crypto"
import { getIpAddress } from "./locaiton";

const generateSessionToken = () => {
    return crypto.randomBytes(32).toString("hex").normalize()
}

export const createSessionAnSetCookies = (userId: number) => {
    const token = generateSessionToken()
    const ip = getIpAddress();
    // const headersList = await headers()     
};
