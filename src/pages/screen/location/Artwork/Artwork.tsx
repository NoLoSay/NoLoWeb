import React, { useState, useEffect } from 'react'
import { Paper } from '@mui/material'
import { useLocation } from 'react-router-dom'
import CardTemplate from '../../../components/CardTemplate/CardTemplate'
import exhibitionsData from '../../../../../tests/exhibitions.json'
import { ButtonBase } from '@mui/material'
import { ArrowBackIosNewRounded } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import FilterListExhibitions from '../../../components/Filter/FilterListExhibitions'

interface Artwork {
  name: string
  description: string
  location: string
  city: string
  image: string
}

interface Exhibition {
  name: string
  description: string
  image: string
  artworks: Artwork[]
}

const exhibitions: Exhibition[] = exhibitionsData.exhibitions

const styles: { [key: string]: string } = {
  listDiv: 'flex flex-col',
  cardlistDiv:
    ' mt-8 ml-8 flex flex-col items-start justify-start gap-[35px] max-w-full text-left text-3xl text-base-black font-poppins mb-8',
  nbcardlistDiv:
    'flex flex-row gap-10 items-center justify-center mt-8 relative w-full self-stretch flex flex-row flex-wrap items-start justify-start gap-[77px] max-w-full z-[1] text-mini text-darkslategray ',
  container_0: 'flex flex-col space-y-5 m-5  mx-auto',
  container_1:
    'flex p-5 flex-col mx-auto space-x-5 w-full items-center justify-around border-solid border-4 border-yellow-300',
  container_2: 'flex flex-col',
  container_3: 'flex flex-row ml-2 mr-7 p-2',
  container_4: 'mt-36 ',
  container_5: 'flex-shrink-0 pr-10',
  container_6: ' mr-2 pl-4',
  container_7: 'flex h-80 w-96 rounded-1.5lg shadow-lg',
  container_8: 'border ml-10',
  container_9: 'p-5 m-4 flex flex-col justify-between h-full',
  container_10: 'font-bold text-4xl',
  container_11: 'flex items-center pt-5',
  container_12: 'font-bold text-xl mr-2',
  container_13: 'flex items-center pt-5',
  container_14: 'font-bold text-xl mr-2',
  container_15: 'flex items-center pt-5',
  container_16: 'font-bold text-xl mr-2',
  container_17: 'flex items-center pt-5',
  container_18: 'font-bold text-xl mr-2',
}

const ShowArtwork = () => {
  const locationn = useLocation()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [imageSrc, setImageSrc] = useState('')
  const [artworks, setArtworks] = useState<Artwork[]>([])

  useEffect(() => {
    if (locationn.state) {
      const { name, description, imageSrc } = locationn.state
      setTitle(name)
      setDescription(description)
      setImageSrc(imageSrc)
      console.log(title)
      const exhibition = exhibitions.find(exhibition => exhibition.name === name)
      if (exhibition) {
        setArtworks(exhibition.artworks)
      }
      console.log(artworks)
    }
  }, [locationn.state])

  const navigate = useNavigate()

  const [currentPage, setCurrentPage] = useState(1)
  const [placesPerPage, setPlacesPerPage] = useState(12)

  const handlePerPageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setPlacesPerPage(parseInt(event.target.value))
    setCurrentPage(1)
  }

  return (
    <div className={`container_0 ${styles.container_0}`}>
      <Paper className={`container_1 ${styles.container_1}`}>
        <div className={`container_2 ${styles.container_2}`}>
          <div className={`container_3 ${styles.container_3}`}>
            <div
              className={`container_4 ${styles.container_4}`}
              onClick={() => navigate(-1)}
            >
              <ButtonBase className={`container_5 ${styles.container_5}`}>
                <ArrowBackIosNewRounded sx={{ color: 'Grey-300' }} />
              </ButtonBase>
            </div>
            <div className={`container_6 ${styles.container_6}`}>
              <img
                src={imageSrc}
                alt='Image'
                className={`container_7 ${styles.container_7}`}
              />
            </div>
            <div className={`container_8 ${styles.container_8}`}>
              <div className={`container_9 ${styles.container_9}`}>
                <div>
                  <p className={`container_10 ${styles.container_10}`}>{title}</p>
                  <div className={`container_11 ${styles.container_11}`}>
                    <p className={`container_12 ${styles.container_12}`}>Description:</p>
                    <p>{description}</p>
                  </div>
                  <div className={`container_13 ${styles.container_13}`}>
                    <p className={`container_14 ${styles.container_14}`}>Type d'exposition:</p>
                    <p>{`Art moderne`}</p>
                  </div>
                  <div className={`container_15 ${styles.container_15}`}>
                    <p className={`container_16 ${styles.container_16}`}>Date de création:</p>
                    <p>{`Juillet 2018`}</p>
                  </div>
                  <div className={`container_17 ${styles.container_17}`}>
                    <p className={`container_18 ${styles.container_18}`}>Lieu:</p>
                    <p>{`Château des Ducs de Bretagne, Nantes`}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Paper>
      <div className={`listDiv ${styles.listDiv}`}>
        <FilterListExhibitions handlePerPageChange={handlePerPageChange} />
        <div className={`cardlistDiv ${styles.cardlistDiv}`}>
          <div className={`nbcardlistDiv ${styles.nbcardlistDiv}`}>
            {artworks.map((artwork, index) => (
              <CardTemplate
                key={index}
                cardInfo={{
                  title: artwork.name,
                  description: artwork.description,
                  imageSrc: artwork.image,
                  location: artwork.location,
                  city: artwork.city,
                  videoCountPlaceholder: '22 videos',
                  pathname: '/videoaccess',
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShowArtwork
