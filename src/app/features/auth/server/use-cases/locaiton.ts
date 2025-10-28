import { headers } from "next/headers";

const IP_HEADERS_PRIORITY = [
    "cf-connection-ip",
    "x-client-ip",
    "x-forwarded-for",
    "x-real-ip",
    "x-cluster-client-ip",
    "forwarded-for",
    "forwarded",
]