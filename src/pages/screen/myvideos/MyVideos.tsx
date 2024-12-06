import React, { useState, useEffect, useContext } from 'react'
import { Paper } from '@mui/material'
import CardTemplate from '../../components/CardTemplate/CardTemplate'
import { useNavigate } from 'react-router-dom'
import FilterListExhibitions from '../../components/Filter/FilterListExhibitions'
import { UserContext } from '../../../global/contexts/UserProvider'
import Pagination from '../../components/Pagination/Pagination'

export interface AccountType {
    accountID: number
    uuid: string
    email: string
    username: string
    phoneNumber: string
    accessToken: string
    image: string
    name: {
      firstName: string
      lastName: string
    }
    createdAt: Date
}

export type ArtToTranslate = {
    id: string
    uuid: string
    name: string
    description: string
    textToTranslate: string
    pictures: {
      id: number
      hostingUrl: string
    }[]
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    RelatedPerson: any
    ItemType: {
      id: number
      name: string
      ItemCategory: {
        id: number
        name: string
      }
    }
}

export enum VideoValidationStatus {
    Pending = 'PENDING',
    Approved = 'APPROVED',
    Rejected = 'REJECTED',
  }
  

export type VideoLibrary = {
    id: number
    uuid: string
    duration: number
    externalProviderId: string
    likeBy: AccountType[]
    item: ArtToTranslate
    postedBy: AccountType
    validationStatus: VideoValidationStatus
    createdAt: Date
    updatedAt?: Date
    deletedAt?: Date
    deletedReason?: string
  }

const getVideos = async (setVideos: Function, user: any) => {
  try {
    const url = `https://api.nolosay.com/users/${user.id}/videos`
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${user.accessToken}`,
        'Content-Type': 'application/json',
      },
    })
    let Videos = []
    if (response.ok) {
      Videos = await response.json()
      console.log('videos: ', Videos)
    } else {
      console.error(`HTTP status ${response.status}: Failed to fetch Videos`)
    }
    setVideos(Videos) // Mise à jour avec les œuvres filtrées
  } catch (error) {
    console.error('Failed to fetch artwork details:', error)
  }
}

const styles: { [key: string]: string } = {
  listDiv: 'flex flex-col',
  cardlistDiv:
    ' mt-8 flex flex-col items-start justify-start gap-[35px] max-w-full text-left text-3xl text-base-black font-poppins mb-8',
  nbcardlistDiv:
    'flex flex-row gap-10 items-center mt-8 relative w-full self-stretch flex flex-row flex-wrap items-start justify-start gap-[77px] max-w-full z-[1] text-mini text-darkslategray ',
  container_0: 'flex flex-col space-y-5 m-5  mx-auto',
  container_1:
    'justify-center w-5/5 m-10 p-10 mx-auto border-solid border-4 border-yellow-300',
  container_10: 'font-bold text-4xl',
  pagDiv: "flex justify-center items-center pt-4",
}

const MyVideos = () => {
  const { user } = useContext(UserContext)
  const [Videos, setVideos] = useState<VideoLibrary[]>([])


  useEffect(() => {
      if (user) {
        getVideos(setVideos, user)
        console.log('fiktered:', Videos)
      }
  }, [user])

  const [currentPage, setCurrentPage] = useState(1)
  const [placesPerPage, setPlacesPerPage] = useState(12)

  const handlePerPageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setPlacesPerPage(parseInt(event.target.value))
    setCurrentPage(1)
  }

  const renderCardInfo = (Videos: VideoLibrary, user: any) => ({
    title: Videos.item.name,
    description: Videos.item.description,
    imageSrc: Videos.item.pictures && Videos.item.pictures.length > 0 && Videos.item.pictures[0].hostingUrl ? Videos.item.pictures[0].hostingUrl : '/images.empty.jpg', // Utilise la première image si disponible
    location: Videos.item.description,
    city: '',
    videoCountPlaceholder: Videos.validationStatus, // Exemple de texte statique pour la vidéo
    pathname: '',
    id: user.id,
  })

  const indexOfLastPlace = currentPage * placesPerPage;
  const indexOfFirstPlace = indexOfLastPlace - placesPerPage;
  const currentPlaces = Videos.slice(indexOfFirstPlace, indexOfLastPlace);

  const onPageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className={`container_0 ${styles.container_0}`}>
      <Paper className={`container_1 ${styles.container_1}`}>
        <p className={`container_10 ${styles.container_10}`}>Mes Videos</p>
      </Paper>
      <div className={`listDiv ${styles.listDiv}`}>
        <div className={`cardlistDiv ${styles.cardlistDiv}`}>
          <div className={`nbcardlistDiv ${styles.nbcardlistDiv}`}>
            {Videos.map((Videos, index) => (
              <CardTemplate key={index} cardInfo={renderCardInfo(Videos, user)} />
            ))}
          </div>
        </div>
      </div>
      <div className={`pagDiv ${styles.pagDiv}`}>
          <Pagination
            totalPages={Math.ceil(Videos.length / placesPerPage)}
            currentPage={currentPage}
            onPageChange={onPageChange}
          />
        </div>
    </div>
  )
}

export default MyVideos
