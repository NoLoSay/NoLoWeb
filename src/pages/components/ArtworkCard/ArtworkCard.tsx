import textData from '../../../../public/text.json'

const styles: { [key: string]: string } = {
  mainDiv:
    'shadow-cardShadow items-center relative rounded-2.5xl p-5 border-solid border-2 border-base-white\
    hover:border-yellow-300',
  smMainDiv: 'sm:px-2',

  contentDiv: 'flex flex-row gap-5 justify-evenly content-center',
  smContentDiv: 'sm:gap-2',

  contentDivImage: 'relative self-center h-1/2 rounded-2.5xl flex flex-1',
  smContentDivImage: '',
  mdContentDivImage: 'md:h-[50%]',

  contentDivTextDiv: 'flex flex-col w-1/2 self-center gap-2',
  smContentDivTextDiv: 'sm:w-3/4',

  contentDivTextDivTitle: 'text-gray-300 font-poppins font-bold text-base text-center',
  smContentDivTextDivTitle: 'sm:text-sm',

  contentDivTextDivText: 'text-black font-poppins font-normal text-xs',

  contentDivTextDivButton: 'rounded-md px-1 py-2 gap-2 bg-yellow-300 hover:cursor-pointer',
}

interface ArtworkCardProps {
  title: string
  imageSrc: string
  imageAlt: string
  description: string
}

const ArtworkCard = ({ title, imageSrc, imageAlt, description }: ArtworkCardProps): JSX.Element => {
  return (
    <div className={`ArtworkCard/mainDiv ${styles['mainDiv']} ${styles['smMainDiv']}`}>
      <div className={`ArtworkCard/contentDiv ${styles['contentDiv']} ${styles['smContentDiv']}`}>
        <img
          className={`ArtworkCard/contentDivImage ${styles['contentDivImage']} ${styles['smContentDivImage']} ${styles['mdContentDivImage']}`}
          src={imageSrc}
          alt={imageAlt}
        />
        <div
          className={`ArtworkCard/contentDivTextDiv ${styles['contentDivTextDiv']} ${styles['smContentDivTextDiv']}`}
        >
          <p
            className={`ArtworkCard/contentDivTextDivTitle ${styles['contentDivTextDivTitle']} ${styles['smContentDivTextDivTitle']}`}
          >
            {title}
          </p>
          <p className={`ArtworkCard/contentDivTextDivText ${styles['contentDivTextDivText']}`}>{description}</p>
          <button className={`ArtworkCard/contentDivTextDivButton ${styles['contentDivTextDivButton']}`}>
            {textData.page.components.artworkcard.clicktosee}
          </button>
        </div>
      </div>
    </div>
  )
}

export default ArtworkCard
