import Link from "next/link";
import Inner from "../inner/Inner";
import { useEffect, useState } from "react";
import { TextAnim } from "../../components/TextAnim";
import { LoaderPage } from "../../components/LoaderPage";
import { useAppSelector, useAppDispatch } from "../../store/store";
import { reset } from "@/store/loader/loaderSlice";
import { Footer } from "@/components/Footer";

const words = [
    "Kevin",
    " Revelo",
    " Developer ",
    "frontend ",
    "passionate",
    "Creative",
    " and ",
    "innovative.",
  ];

export default function HomeEs() {
  const [isClient, setIsClient] = useState(false);
  const loading = useAppSelector((state) => state.loader.loader);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(reset());
    }, 3000);

    return () => clearTimeout(timer);
  });

  if (loading) {
    return <LoaderPage />;
  }
  return (
    <>
      <Inner>
        <div className="w-[100%] h-[100vh] overflow-hidden min-[319px]:px-8 md:px-60 flex  items-center">
          <div className="mt-2">
            <h1 className="  min-[319px]:text-5xl sm:text-5xl md:text-5xl text-[#353535] cursor-default lg:text-7xl box-border font-extrabold tracking-tight">
              {isClient && <TextAnim palabras={words} />}
            </h1>
            <Link href="/en/about">
              <button className="button mt-4">learn more</button>
            </Link>
          </div>
        </div>
        <Footer />
      </Inner>
    </>
  );
}
