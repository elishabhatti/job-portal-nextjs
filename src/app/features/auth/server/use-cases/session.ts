import { headers } from "next/headers";
import crypto from "crypto"

const generateSessionToken = () => {
    return crypto.randomBytes(32).toString("hex").normalize()
}

export const createSessionAnSetCookies = (userId: number) => {
    const token = generateSessionToken()
    // const ip =
    // const headersList = await headers()     
};
