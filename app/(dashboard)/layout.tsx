"use client";

import BackToTop from "@/components/BackToTop";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import useStore from "@/store/useStore";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isMenuOpen } = useStore();

  return (
    <div className="h-screen w-full relative flex">
      {/* LEFT (Sidebar) */}

      <Sidebar />
      {/* RIGHT (Main Content) */}
      <div
        className={`${
          isMenuOpen ? "w-5/6" : "w-[100%]"
        } flex w-full flex-col transition-all duration-300 `}
      >
        <Navbar />

        <div className=" h-auto flex-1   overflow-y-auto bg-[url('/images/bgImg.png')] dark:bg-none bg-cover bg-center">
          {children}
        </div>
      </div>
      <BackToTop />
    </div>
  );
}
