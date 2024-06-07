import React, { useState } from 'react';

const styles: { [key: string]: string } = {
  backgroundDiv: "bg-white",
  main: "mx-auto max-w-full flex items-baseline justify-between border-b border-gray-200 pb-6 pt-14 px-4 sm:px-6 lg:px-8",
  textDiv: "text-2xl font-bold tracking-tight text-base-black",
  lineDiv: "border-b-4 border-solid border-yellow-300 w-[800px] mt-2",
  blockfilterDiv: "relative inline-block text-left ml-4",
  borderDiv: "border-gray-300 " +
    "focus:ring-yellow-300 " +
    "focus:border-yellow-300 " +
    "h-10 pl-3 pr-7 rounded-lg",
};

  interface FilterListPlaceProps {
    handlePerPageChange: (event: React.ChangeEvent<HTMLSelectElement>) => void; // Fonction pour mettre à jour le nombre d'éléments par page
  }
  
  const FilterListExhibitions: React.FC<FilterListPlaceProps> = ({ handlePerPageChange }) => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };

    return (
      <div className={`backgroundDiv ${styles.backgroundDiv}`}>
        <main className={`main ${styles.main}`}>
            <div className={`textDiv ${styles.textDiv}`}>
              <span>Oeuvres</span>
              <div className={`lineDiv ${styles.lineDiv}`}></div>
            </div>
            <div className="flex items-center">
              <div className={`blockfilterDiv ${styles.blockfilterDiv}`}>
                <div>
                  <label htmlFor="perPageSelect" className="sr-only">Nombre d'éléments par page</label>
                  <select
                    id="perPageSelect"
                    name="perPageSelect"
                    className={`boderDiv ${styles.borderDiv} `}
                    onChange={handlePerPageChange}
                  >
                    <option value="12">12 éléments par page</option>
                    <option value="24">24 éléments par page</option>
                    <option value="36">36 éléments par page</option>
                  </select>
                </div>
              </div>
              <div className={`blockfilterDiv ${styles.blockfilterDiv}`}>
                <div>
                  <label htmlFor="sortSelect" className="sr-only">Sort</label>
                  <select
                    id="sortSelect"
                    name="sortSelect"
                    className={`borderDiv ${styles.borderDiv}`}
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
        </main>
      </div>
  );
}

export default FilterListExhibitions;