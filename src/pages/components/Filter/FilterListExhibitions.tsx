import React from 'react'
import textData from '../../../../public/text.json'

const styles: { [key: string]: string } = {
  backgroundDiv: 'bg-white flex max-w-full  gap-10 items-center justify-center mt-12 ',
  main: 'flex items-baseline justify-between',
  textDiv: 'text-2xl font-bold tracking-tight text-base-black',
  lineDiv: 'border-b-8 rounded-lg border-solid border-yellow-300 w-[1000px] mt-2',
  blockfilterDiv: 'relative inline-block text-left ml-4',
  borderDiv:
    'border-gray-300 text-md ' + 'focus:ring-yellow-300 ' + 'focus:border-yellow-300 ' + 'h-10 pl-3 pr-7 rounded-lg',
  container_0: 'flex items-center',
}

interface FilterListPlaceProps {
  handlePerPageChange: (event: React.ChangeEvent<HTMLSelectElement>) => void // Fonction pour mettre à jour le nombre d'éléments par page
}

const FilterListExhibitions: React.FC<FilterListPlaceProps> = ({ handlePerPageChange }) => {
  return (
    <div className={`backgroundDiv ${styles.backgroundDiv}`}>
      <main className={`main ${styles.main}`}>
        <div className={`textDiv ${styles.textDiv}`}>
          <span>{textData.page.components.filter.filterListExhibitions.artworks}</span>
          <div className={`lineDiv ${styles.lineDiv}`}></div>
        </div>
        <div className={`container_0 ${styles.container_0}`}>
          <div className={`blockfilterDiv ${styles.blockfilterDiv}`}>
            <div>
              <select
                id='perPageSelect'
                name='perPageSelect'
                className={`boderDiv ${styles.borderDiv} `}
                onChange={handlePerPageChange}
              >
                <option value='9'>{textData.page.components.filter.filterListPlace.twelelements}</option>
                <option value='18'>{textData.page.components.filter.filterListPlace.twentelements}</option>
                <option value='36'>{textData.page.components.filter.filterListPlace.thirtelements}</option>
              </select>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default FilterListExhibitions
