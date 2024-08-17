import React from "react";
import textData from "../../../../public/text.json";

const styles: { [key: string]: string } = {
  backgroundDiv: "bg-white",
  main: "mx-auto max-w-full flex items-baseline justify-between border-b border-gray-200 pb-6 pt-14 px-4 sm:px-6 lg:px-8",
  textDiv: "text-2xl font-bold tracking-tight text-base-black",
  lineDiv: "border-b-4 border-solid border-yellow-300 w-[800px] mt-2",
  blockfilterDiv: "relative inline-block text-left ml-4",
  borderDiv:
    "border-gray-300 " +
    "focus:ring-yellow-300 " +
    "focus:border-yellow-300 " +
    "h-10 pl-3 pr-7 rounded-lg",
  container_0: "flex items-center",
};

interface FilterListPlaceProps {
  handlePerPageChange: (event: React.ChangeEvent<HTMLSelectElement>) => void; // Fonction pour mettre à jour le nombre d'éléments par page
}

const FilterListPlace: React.FC<FilterListPlaceProps> = ({
  handlePerPageChange,
}) => {
  return (
    <div className={`backgroundDiv ${styles.backgroundDiv}`}>
      <main className={`main ${styles.main}`}>
        <div className={`textDiv ${styles.textDiv}`}>
          <span>{textData.page.components.filter.filterListPlace.place}</span>
          <div className={`lineDiv ${styles.lineDiv}`}></div>
        </div>
        <div className={`container_0 ${styles.container_0}`}>
          <div className={`blockfilterDiv ${styles.blockfilterDiv}`}>
            <div>
              <select
                id="perPageSelect"
                name="perPageSelect"
                className={`boderDiv ${styles.borderDiv} `}
                onChange={handlePerPageChange}
              >
                <option value="12">
                  {textData.page.components.filter.filterListPlace.twelelements}
                </option>
                <option value="24">
                  {
                    textData.page.components.filter.filterListPlace
                      .twentelements
                  }
                </option>
                <option value="36">
                  {
                    textData.page.components.filter.filterListPlace
                      .thirtelements
                  }
                </option>
              </select>
            </div>
          </div>
          <div className={`blockfilterDiv ${styles.blockfilterDiv}`}>
            <div>
              <select
                id="sortSelect"
                name="sortSelect"
                className={`borderDiv ${styles.borderDiv}`}
              >
                <option value="">
                  {textData.page.components.filter.filterListPlace.sort}
                </option>
                <option value="">
                  {textData.page.components.filter.filterListPlace.mostpopular}
                </option>
                <option value="">
                  {textData.page.components.filter.filterListPlace.new}
                </option>
                <option value="">
                  {textData.page.components.filter.filterListPlace.distance}
                </option>
              </select>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FilterListPlace;
