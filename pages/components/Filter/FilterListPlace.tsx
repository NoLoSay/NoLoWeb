import React, { useState } from 'react';


  interface FilterListPlaceProps {
    handlePerPageChange: (event: React.ChangeEvent<HTMLSelectElement>) => void; // Fonction pour mettre à jour le nombre d'éléments par page
  }
  
  const FilterListPlace: React.FC<FilterListPlaceProps> = ({ handlePerPageChange }) => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };

    return (
    <div className="bg-white">
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-14">
          <div className="text-5xl font-bold tracking-tight text-base-black">
            <span>Lieux</span>
            <div className="border-b-4 border-solid border-yellow-300 w-[800px] mt-2"></div> {/* Ligne noire */}
          </div>
          <div className="flex items-center">
            <div className="relative inline-block text-left">
              <div>
                <label htmlFor="perPageSelect" className="sr-only">Nombre d'éléments par page</label>
                <select
                  id="perPageSelect"
                  name="perPageSelect"
                  className="border-gray-300 focus:ring-yellow-300 focus:border-yellow-300 h-10 pl-3 pr-7 border-1 border-gray-300 rounded-lg"
                  onChange={handlePerPageChange}
                >
                  <option value="12">12 éléments par page</option>
                  <option value="24">24 éléments par page</option>
                  <option value="36">36 éléments par page</option>
                </select>
              </div>
            </div>
            <div className="relative pl-2 inline-block text-left">
              <div>
                <label htmlFor="perPageSelect" className="sr-only">Sort</label>
                <select
                  id="perPageSelect"
                  name="perPageSelect"
                  className="border-gray-300 focus:ring-yellow-300 focus:border-yellow-300 h-10 pl-3 pr-7 border-1 border-gray-300 rounded-lg"
                >
                  <option value="">Trier</option>
                  <option value="">Plus Populaire</option>
                  <option value="">Meilleur Note</option>
                  <option value="">Nouveauté</option>
                  <option value="">Distance: Du + au - Proche</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default FilterListPlace;