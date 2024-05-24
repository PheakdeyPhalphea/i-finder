import React from "react";

export default function FooterComponent() {
  return (
    <footer className="bg-Bg border-t-2 border-VariantTextColor dark:bg-gray-800">
      <div className="w-full flex justify-between px-16 pt-3">
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-VariantTextColor dark:text-gray-400 sm:mt-0">
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              IFinder
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              Parthers
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              About
            </a>
          </li>
        </ul>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-VariantTextColor dark:text-gray-400 sm:mt-0">
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              Privacy
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              Terms
            </a>
          </li>
        </ul>
      </div>
    </footer>

   
  );
}
