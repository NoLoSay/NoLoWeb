import React, { useState } from 'react';

function ProductsPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  return (
    <div className="bg-white">
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-14">
          <div className="text-5xl font-bold tracking-tight text-base-black">Lieux</div>

          <div className="flex items-center">
            <div className="relative inline-block text-left">
              <div>
                <button
                  type="button"
                  className="group inline-flex justify-center text-base font-medium text-gray-700 hover:text-yellow-300"
                  id="menu-button"
                  aria-expanded={isMenuOpen}
                  aria-haspopup="true"
                  onClick={toggleMenu}
                >
                  Sort
                  <svg
                    className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="false"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>

              {isMenuOpen && (
                <div
                  className="absolute right-0 z-10 mt-2 w-52 origin-top-right rounded-md bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                  tabIndex={-1}
                >
                  <div className="py-1" role="none">
                    <a href="#" className="text-base-black block px-4 py-2 text-base hover:text-yellow-300" role="menuitem" tabIndex={-1} id="menu-item-0">
                      Most Popular
                    </a>
                    <a href="#" className="text-base-black block px-4 py-2 text-base hover:text-yellow-300" role="menuitem" tabIndex={-1} id="menu-item-1">
                      Best Rating
                    </a>
                    <a href="#" className="text-base-black block px-4 py-2 text-base hover:text-yellow-300" role="menuitem" tabIndex={-1} id="menu-item-2">
                      Newest
                    </a>
                    <a href="#" className="text-base-black block px-4 py-2 text-base hover:text-yellow-300" role="menuitem" tabIndex={-1} id="menu-item-3">
                      Distance: Close to Far
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default function FilterPage() {
  return (
    <div className="bg-white">
      <ProductsPage />
    </div>
  );
}
