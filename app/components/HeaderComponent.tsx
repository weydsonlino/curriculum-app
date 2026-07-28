"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function HeaderComponent() {
  const pathname = usePathname();
  return (
    <header className=" text-white p-4 flex flex-row justify-between w-screen pr-30 ps-30 mt-6 font-semibold">
      <h1 className="text-[30px] font-bold">
        <span className="text-[#1A58FA]">WL </span>Developer
      </h1>
      <div className="flex flex-row items-center space-x-24 text-[20px] font-semibold">
        <nav className="space-x-12">
          <Link
            href="/"
            className={
              pathname === "/"
                ? "text-white text-primary border-b-4 border-[#8E19FB]"
                : "text-[#C7CAFF]"
            }
          >
            Home
          </Link>
          <Link href="#" className="text-[#C7CAFF]">
            About
          </Link>
          <Link href="#" className="text-[#C7CAFF]">
            Projects
          </Link>
          <Link href="#" className="text-[#C7CAFF]">
            Services
          </Link>
          <Link href="#" className="text-[#C7CAFF]">
            Contact
          </Link>
        </nav>
        <button className="bg-linear-to-r from-init to-finish text-white w-fit h-fit font-medium py-4 px-6 rounded-4xl text-2xl">
          Let´s Talk
        </button>
      </div>
    </header>
  );
}
