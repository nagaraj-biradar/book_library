import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Sidebar from "../ui/sidebar/Sidebar";
import StoreProvider from "../provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sunshine Book Library",
  description: "An Online Store To Rent and Sell Used Books",
};

export default function BookStoreLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <div className="flex xs:flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row min-h-screen ">
        <Sidebar />
        <div className="flex flex-wrap p-2 justify-center">{children}</div>
      </div>
    </StoreProvider>
  );
}
