import Link from "next/link";

export const NavbarComponent = () => {
  return (
    <div className="fixed w-full p-5 flex justify-around items-center">
      <Link href="/">Home</Link>

      <Link href="/about">About</Link>

      <Link href="/contact">Contact</Link>
    </div>
  );
};
