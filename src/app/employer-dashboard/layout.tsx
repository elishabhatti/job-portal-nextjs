import { redirect } from "next/navigation";
import { getCurrentUser } from "../features/auth/server/auth.quires";
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await getCurrentUser();
  console.log("user", user);

  if (!user) return redirect("/login");
  if (user.role !== "employer") return redirect("/dashboard");

  return (
    <div className="flex min-h-screen bg-background">
      {/* <EmployerSidebar/> */}
      <main className="container mx-auto mt-5 ml-70 mr-5">{children}</main>
    </div>
  );
}
