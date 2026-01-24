import { getCurrentUser } from "@/app/features/auth/server/auth.quires";
import { redirect } from "next/navigation";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await getCurrentUser();
  console.log("user", user);

  if (!user) return redirect("/login");
  if (user.role !== "applicant") return redirect("/employer-dashboard");

  return (
    <div className="flex min-h-screen bg-background">
      <main className="container mx-auto mt-5 ml-70 mr-5">{children}</main>
    </div>
  );
}
