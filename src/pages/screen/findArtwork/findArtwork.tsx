import React, { useState, useEffect, useContext } from 'react'
import { Paper } from '@mui/material'
import { useLocation } from 'react-router-dom'
import CardTemplate from '../../components/CardTemplate/CardTemplate'
import { ButtonBase } from '@mui/material'
import { ArrowBackIosNewRounded } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import FilterListExhibitions from '../../components/Filter/FilterListExhibitions'
import { UserContext } from '../../../global/contexts/UserProvider'
import Pagination from '../../components/Pagination/Pagination'


interface Artwork {
  name: string
  description: string
  location: string
  city: string
  pictures: any[]
  id : any
}

const getArtworks = async (exhibitionId: any, setArtworks: Function, user: any) => {
  try {
    const url = `https://api.nolosay.com/exhibitions/${exhibitionId}/items`
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${user.accessToken}`,
        'Content-Type': 'application/json',
      },
    })
    let artworks = []
    if (response.ok) {
      artworks = await response.json()
    } else {
      console.error(`HTTP status ${response.status}: Failed to fetch artworks`)
    }
    console.log('art: ', artworks)
    setArtworks(artworks) // Mise à jour avec les œuvres filtrées
  } catch (error) {
    console.error('Failed to fetch artwork details:', error)
  }
}

const styles: { [key: string]: string } = {
  listDiv: 'flex flex-col',
  cardlistDiv:
    ' mt-8 ml-48 flex flex-col items-start justify-start gap-[35px] max-w-full text-left text-3xl text-base-black font-poppins mb-8',
  nbcardlistDiv:
    'flex flex-row gap-10 items-center mt-8 relative w-full self-stretch flex flex-row flex-wrap items-start justify-start gap-[77px] max-w-full z-[1] text-mini text-darkslategray ',
  container_0: 'flex flex-col space-y-5 m-5  mx-auto',
  container_1:
    'justify-center w-4/5 mx-auto border-solid border-4 border-yellow-300',
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
  container_12: 'font-bold text-xl mr-5',
  container_13: 'flex items-center pt-5',
  container_14: 'font-bold text-xl mr-2',
  container_15: 'flex items-center pt-5',
  container_16: 'font-bold text-xl mr-2',
  container_17: 'flex items-center pt-5',
  container_18: 'font-bold text-xl mr-2',
  pagDiv: "flex justify-center items-center pt-4",
}

const ShowArtwork = () => {
  const { user } = useContext(UserContext)
  const locationn = useLocation()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [imageSrc, setImageSrc] = useState('')
  const [location, setLocation] = useState('')
  const [city, setCity] = useState('')
  const [filteredArtworks, setFilteredArtworks] = useState<Artwork[]>([])
  const [id, setId] = useState('')

  useEffect(() => {
    if (locationn.state) {
      const { name, description, imageSrc, id, location, city } = locationn.state
      setTitle(name)
      setDescription(description)
      setImageSrc(imageSrc)
      setId(id)
      setLocation(location)
      setCity(city)
      if (user) {
        getArtworks(id, setFilteredArtworks, user)
        console.log('fiktered:', filteredArtworks)
      }
    }
  }, [locationn.state, user])

  const navigate = useNavigate()

  const [currentPage, setCurrentPage] = useState(1)
  const [placesPerPage, setPlacesPerPage] = useState(12)

  const handlePerPageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setPlacesPerPage(parseInt(event.target.value))
    setCurrentPage(1)
  }

  const renderCardInfo = (artwork: Artwork) => ({
    title: artwork.name,
    description: artwork.description,
    imageSrc: artwork.pictures && artwork.pictures.length > 0 ? artwork.pictures[0].hostingUrl : '', // Utilise la première image si disponible
    location: location,
    city: artwork.city || '',
    videoCountPlaceholder: `Voir les vidéos`, // Exemple de texte statique pour la vidéo
    pathname: '/videoaccess',
    id: artwork.id
  })

  const indexOfLastPlace = currentPage * placesPerPage;
  const indexOfFirstPlace = indexOfLastPlace - placesPerPage;
  const currentPlaces = filteredArtworks.slice(indexOfFirstPlace, indexOfLastPlace);

  const onPageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

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
                alt='Artwork'
                className={`container_7 ${styles.container_7}`}
              />
            </div>
            <div className={`container_8 ${styles.container_8}`}>
              <div className={`container_9 ${styles.container_9}`}>
                <div>
                  <p className={`container_10 ${styles.container_10}`}>{title}</p>
                  <div className={`container_11 ${styles.container_11}`}>
                    <div className={`container_12 ${styles.container_12}`}>Description:</div>
                    <>{description}</>
                  </div>
                  <div className={`container_11 ${styles.container_11}`}>
                    <div className={`container_12 ${styles.container_12}`}>Lieux:</div>
                    <>{location}</>
                  </div>
                  <div className={`container_11 ${styles.container_11}`}>
                    <div className={`container_12 ${styles.container_12}`}>Ville:</div>
                    <>{city}</>
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
            {filteredArtworks.map((artwork, index) => (
              <CardTemplate key={index} cardInfo={renderCardInfo(artwork)} />
            ))}
          </div>
        </div>
      </div>
      <div className={`pagDiv ${styles.pagDiv}`}>
          <Pagination
            totalPages={Math.ceil(filteredArtworks.length / placesPerPage)}
            currentPage={currentPage}
            onPageChange={onPageChange}
          />
        </div>
    </div>
  )
}

export default ShowArtwork
