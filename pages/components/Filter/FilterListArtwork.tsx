import React, { useState } from "react";

interface FilterPageProps {
  handleArtworkTypeChange: (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => void;
}

const styles: { [key: string]: string } = {
  backgroundDiv: "bg-white",
  main: "mx-auto max-w-full flex items-baseline justify-between border-b border-gray-200 pb-6 pt-14 px-4 sm:px-6 lg:px-8",
  textDiv: "text-2xl font-bold tracking-tight text-base-black",
  lineDiv: "border-b-4 border-solid border-yellow-300 w-[860px] mt-2",
  blockfilterDiv: "relative inline-block text-left ml-4",
  borderDiv:
    "border-gray-300 " +
    "focus:ring-yellow-300 " +
    "focus:border-yellow-300 " +
    "h-10 pl-3 pr-7 rounded-lg",
  container_0: "flex items-center",
  container_1: "sr-only",
  container_2: "sr-only",
};

const FilterListArtwork: React.FC<FilterPageProps> = ({
  handleArtworkTypeChange,
}) => {
  return (
    <div className={`backgroundDiv ${styles.backgroundDiv}`}>
      <main className={`main ${styles.main}`}>
        <div className={`textDiv ${styles.textDiv}`}>
          <span>Expostions / Oeuvres</span>
          <div className={`lineDiv ${styles.lineDiv}`}></div>
        </div>
        <div className={`container_0 ${styles.container_0}`}>
          <div className={`blockfilterDiv ${styles.blockfilterDiv}`}>
            <div>
              <label
                htmlFor="perPageSelect"
                className={`container_1 ${styles.container_1}`}
              >
                Nombre d'éléments par page
              </label>
              <select
                id="perPageSelect"
                name="perPageSelect"
                className={`boderDiv ${styles.borderDiv} `}
                onChange={handleArtworkTypeChange}
              >
                <option value="exhibitions">Afficher les expositions</option>
                <option value="artworks">Afficher les oeuvres</option>
              </select>
            </div>
          </div>
          <div className={`blockfilterDiv ${styles.blockfilterDiv}`}>
            <div>
              <label
                htmlFor="sortSelect"
                className={`container_2 ${styles.container_2}`}
              >
                Sort
              </label>
              <select
                id="sortSelect"
                name="sortSelect"
                className={`borderDiv ${styles.borderDiv}`}
              >
                <option value="">Trier</option>
                <option value="">Plus Populaire</option>
                <option value="">Meilleur Note</option>
                <option value="">Nouveauté</option>
                <option value="">De A à Z</option>
                <option value="">De Z à A</option>
              </select>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FilterListArtwork;
