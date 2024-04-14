import React, { ReactNode }  from 'react';

interface SearchBarProps {
    children: ReactNode;
  }

const styles: { [key: string]: string } = {
  container: "relative flex flex-row items-center justify-start gap-[20px] max-w-full",
  
  searchBar: "flex-1 rounded-3xs bg-base-white shadow-[0px_4px_9px_rgba(0,_0,_0,_0.25)] box-border flex flex-row items-center justify-start py-[9px] pr-4 pl-[11px] gap-[57px] max-w-full border-[1px] border-solid border-gray-100 mq450:gap-[28px]",
  lgsearchBar:"py-[9px] pr-4 pl-[11px] gap-[57px]",
  
  locationInputContainer: "flex-1 flex flex-row items-center justify-start py-0 pr-px pl-0 box-border gap-[21px] max-w-full",
  locationTextContainer: "flex flex-row items-center justify-start gap-[9px]",
  locationText: "relative tracking-[-0.41px] leading-[22px] font-medium text-black",
  
  searchInput: "flex-1 relative tracking-[-0.41px] leading-[22px] font-medium text-gray-100 whitespace-nowrap",
  
  searchIcon: "h-[13.9px] w-3 relative",
  
};

const SearchBar: React.FC<SearchBarProps> = ({ children }) => {
  return (
    <div>
        <div>
            <div className={styles.container}>
                <div className={styles.searchBar}>
                    <div className={styles.locationInputContainer}>
                    <div className={styles.locationTextContainer}>
                        <div className={styles.locationText}>Nantes</div>
                        <img className={styles.searchIcon} alt="" src="/icon/search/CityIcon.png" />
                    </div>
                    <div className={styles.searchInput}>Recherche par thème, note...</div>
                    </div>
                    <img className={styles.searchIcon} alt="" src="/icon/search/search.png" />
                </div>
                {children}
            </div>
        </div>
    </div>
  );
};

export default SearchBar;