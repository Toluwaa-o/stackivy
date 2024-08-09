import { Nunito_Sans } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "Keed",
  description:
    "At Keed, we believe in making finance fun and exciting for kids. Join our free platform and embark on a thrilling journey to gain essential financial skills that will set you up for lifelong success. Get ready to explore, learn, and earn exciting rewards along the way!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="py-4 px-3">
          <span className="bg-light-gray flex justify-between items-center px-4 py-2 rounded-lg sm:rounded-3xl sm:px-2 sm:w-full">
            <img src="/Images/Logo.png" alt="logo" />
            <span className="sm:flex hidden items-center m-auto w-full">
              <span className="w-[70%] flex items-center justify-around m-auto md:w-[40%]">
                <p>Home</p>
                <p>Services</p>
                <p>Resources</p>
                <p>Blog</p>
              </span>
            </span>
            <p className="sm:block min-w-[20%] md:min-w-[15%] hidden ml-auto py-2 px-2 rounded-3xl bg-my-orange text-black text-center">
              Get started
            </p>
            <span className="flex flex-col gap-1 sm:hidden">
              <div className="w-[20px] h-[1px] bg-almost-black"></div>
              <div className="w-[20px] h-[1px] bg-almost-black"></div>
              <div className="w-[20px] h-[1px] bg-almost-black"></div>
            </span>
          </span>
        </header>
        {children}
      </body>
    </html>
  );
}
