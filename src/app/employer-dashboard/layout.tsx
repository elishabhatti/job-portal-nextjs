// import {getCurrentUser} from ""
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
//   const user = await getCurrentUser();
  return { children };
}
