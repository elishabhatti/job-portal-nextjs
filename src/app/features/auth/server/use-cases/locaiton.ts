import { headers } from "next/headers";

const IP_HEADERS_PRIORITY = [
  "cf-connection-ip",
  "x-client-ip",
  "x-forwarded-for",
  "x-real-ip",
  "x-cluster-client-ip",
  "forwarded-for",
  "forwarded",
];

export async function getIpAddress() {
  const headersList = await headers();
  for (const header of IP_HEADERS_PRIORITY) {
    const value = headersList.get(header);
    if (typeof value === "string") {
      const ip = value.split(",")[0].trim();
      if (ip) return ip;
    }
  }
  return "0.0.0.0";
}
