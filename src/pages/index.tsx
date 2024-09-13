import Image from "next/image";
import localFont from "next/font/local";
import Inner from "./inner/Inner";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <Inner className="mt-5">
      <div className="w-[100%] h-[100vh] flex justify-center items-center">
        <h1>Home</h1>
      </div>
    </Inner>
  );
}
