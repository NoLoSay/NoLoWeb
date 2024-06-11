import React from "react";
import textData from "../../../public/text.json";

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
};

const FilterListArtwork: React.FC<FilterPageProps> = ({
  handleArtworkTypeChange,
}) => {
  return (
    <div className={`backgroundDiv ${styles.backgroundDiv}`}>
      <main className={`main ${styles.main}`}>
        <div className={`textDiv ${styles.textDiv}`}>
          <span>
            {textData.page.components.filter.filterListArtwork.exhibitions}
          </span>
          <div className={`lineDiv ${styles.lineDiv}`}></div>
        </div>
        <div className={`container_0 ${styles.container_0}`}>
          <div className={`blockfilterDiv ${styles.blockfilterDiv}`}>
            <div>
              <select
                id="perPageSelect"
                name="perPageSelect"
                className={`boderDiv ${styles.borderDiv} `}
                onChange={handleArtworkTypeChange}
              >
                <option value="exhibitions">
                  {
                    textData.page.components.filter.filterListArtwork
                      .seeexhibitions
                  }
                </option>
                <option value="artworks">
                  {
                    textData.page.components.filter.filterListArtwork
                      .seeartworks
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
                  {textData.page.components.filter.filterListArtwork.sort}
                </option>
                <option value="">
                  {
                    textData.page.components.filter.filterListArtwork
                      .mostpopular
                  }
                </option>
                <option value="">
                  {textData.page.components.filter.filterListArtwork.new}
                </option>
                <option value="">
                  {textData.page.components.filter.filterListArtwork.atoz}
                </option>
                <option value="">
                  {textData.page.components.filter.filterListArtwork.ztoa}
                </option>
              </select>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FilterListArtwork;
