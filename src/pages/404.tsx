import Image from "next/image";
import Link from "next/link";



export default function c404() {
 
  return (
    <section className="bg-white  ">
      <div className="container min-h-screen px-6 py-12 mx-auto lg:flex lg:items-center lg:gap-12">
        <div className="wf-ull lg:w-1/2">
          <p className="text-xl   ">404 error</p>
          <h1 className="mt-3 text-2xl font-semibold text-gray-800 ">
          Page not found
          </h1>
          <p className="mt-4 text-gray-500 ">
            Sorry, the page you are looking for doesn&apos;t exist.
          </p>

          <div className="flex items-center mt-6 gap-x-3">
            <Link href="/">
                <button className="button">
                    Home
                </button>
            </Link>
          </div>
        </div>

        <div className="relative w-full mt-12 lg:w-1/2 lg:mt-0">
           <Image width={30} height={30} className="w-full max-w-lg lg:mx-auto" src="https://merakiui.com/images/components/illustration.svg" alt="404" />
        </div>
      </div>
    </section>
  );
}

