import React, { ReactNode, useEffect, useState } from 'react'
import { Place } from '../../../global/types/Places'

interface SearchBarProps {
  children: ReactNode
  userLocation: String
  places?: Place[]
  onSearch: (query: string) => void
}

const styles: { [key: string]: string } = {
  container: 'flex flex-row items-center gap-[20px] lg:pt-4 lg:px-96 lg:max-w-full md:max-w-[750px]',

  searchBar:
    'flex-1 rounded-1.5lg bg-base-white shadow-[0px_4px_9px_rgba(0,_0,_0,_0.25)] box-border flex flex-row items-center justify-start py-[9px] pr-4 pl-[11px] max-w-full border-[1px] border-solid border-gray-100',
  lgsearchBar: 'py-[9px] pr-4 pl-[11px] gap-[57px]',

  locationInputContainer:
    'flex-1 flex flex-row items-center justify-start py-0 pr-px pl-0 box-border gap-[21px] max-w-full',
  locationTextContainer: 'flex flex-row items-center justify-start gap-[9px]',
  locationText: 'relative tracking-[-0.41px] leading-[22px] font-medium text-black',

  searchInput: 'flex-1 relative tracking-[-0.41px] leading-[22px] font-medium text-base-black whitespace-nowrap',

  searchIcon: 'w-3 relative',
}

const SearchBar: React.FC<SearchBarProps> = ({ children, userLocation, onSearch }) => {
  const [searchQuery, setSearchQuery] = useState<string>('')

  const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value)
  }

  const handleSearch = () => {
    onSearch(searchQuery)
  }

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch()
    }
  }

  return (
    <div>
      <div>
        <div className={`container ${styles.container}`}>
          <div className={`searchBar ${styles.searchBar}`}>
            <div className={`locationInputContainer ${styles.locationInputContainer}`}>
              <div className={`locationTextContainer ${styles.locationTextContainer}`}>
                <div className={`locationText ${styles.locationText}`}>{userLocation}</div>
                <img
                  className={`searchIcon ${styles.searchIcon}`}
                  alt=''
                  src='/icon/search/CityIcon.png'
                />
              </div>
              <input
                className={`searchInput ${styles.searchInput}`}
                type='text'
                placeholder='Recherche par thème, note...'
                value={searchQuery}
                onChange={handleSearchInputChange}
                onKeyPress={handleKeyPress}
              />
            </div>
            <img
              className={`searchIcon ${styles.searchIcon}`}
              alt=''
              src='/icon/search/search.png'
              onClick={handleSearch}
            />
          </div>
          {children}
        </div>
      </div>
    </div>
  )
}

export default SearchBar
