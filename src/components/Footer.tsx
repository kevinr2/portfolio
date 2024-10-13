

export const Footer = () => {
  return (
    <footer className="bg-white flex items-end ">
      <div className="w-full px-6 p-4 mx-auto">
        <hr className="my-10 border-gray-200 w-full " />
        <div className="flex flex-col items-center sm:flex-row sm:justify-between mx-5">
          <p className="text-sm text-gray-500">
            © Copyright 2024. All Rights Reserved.
          </p>
          <div className="flex mt-3 -mx-2 sm:mt-0">
            <div
              className="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-500 "
              aria-label="Reddit"
            >
              Cali,Colombia
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
