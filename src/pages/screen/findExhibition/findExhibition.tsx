import { Fragment, useState, ChangeEvent, useEffect, useContext } from 'react'
import Head from 'next/head'
import Layout from '../../components/Layout/Layout'
import TitleCard from '../../components/TitleCard/TitleCard'
import CardTemplate from '../../components/CardTemplate/CardTemplate'
import { ReactNode } from 'react'
import { useLocation } from 'react-router-dom'
import FilterListArtwork from '../../components/Filter/FilterListArtwork'
import { UserContext } from '../../../global/contexts/UserProvider'

interface Artwork {
  name: string
  description: string
  location: string
  city: string
  image: string
}

interface Exhibition {
  id: number
  name: string
  shortDescription: string
  longDescription: string
  startDate: string
  endDate: string
  siteId: number
  site: Site
}

interface Site {
  id: number
  name: string
  shortDescription: string
  longDescription: string
  telNumber: string
  website: string
  pictures: { hostingUrl: string }[]
  address: {
    houseNumber: string
    street: string
    city: { name: string }
  }
}

const getExhibitions = async (siteId: any, setExhibitions: Function, user: any) => {
  try {
    const url = 'https://api.nolosay.com/exhibitions'
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${user.accessToken}`, // Utilisation de l'accès utilisateur
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      throw new Error(`HTTP status ${response.status}: Failed to fetch exhibitions`)
    }
    const exhibitions = await response.json()
    const filteredExhibitions = exhibitions.filter((exhibition: any) => exhibition.site.id === siteId)
    console.log(filteredExhibitions)
    setExhibitions(filteredExhibitions) // Stockage des expositions filtrées
  } catch (error) {
    console.error('Failed to fetch exhibition details:', error)
  }
}

const styles: { [key: string]: string } = {
  mainDiv: 'flex flex-col space-y-5 m-5',
  listDiv:
    'relative max-w-full mt-8 flex flex-col gap-[35px] min-h-[493px] max-w-full text-left text-3xl text-base-black font-poppins',
  cardlistDiv: 'flex flex-col flex-wrap gap-10 items-center max-w-full z-[1] mb-8 ',
  nbcardlistDiv:
    ' gap-10 items-center mt-8 relative w-full self-stretch flex flex-row flex-wrap ml-44 justify-start gap-[77px] max-w-full z-[1] text-mini text-darkslategray ',
}

const Location = () => {
  const { user } = useContext(UserContext) // Récupération de l'utilisateur via le contexte
  const locationn = useLocation()
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [imageSrc, setImageSrc] = useState('')
  const [website, setWebsite] = useState('')
  const [city, setCity] = useState('')
  const [locationText, setLocationText] = useState('')
  const [id, setId] = useState('')
  const [filteredExhibitions, setFilteredExhibitions] = useState<Exhibition[]>([]) // Initialisation vide
  const [filteredItems, setFilteredItems] = useState<Exhibition[]>([]) // Ici on utilise des expositions
  const [selectedType, setSelectedType] = useState<string>('exhibitions')

  useEffect(() => {
    if (locationn.state) {
      const { name, description, imageSrc, website, city, location, id } = locationn.state
      setName(name)
      setDescription(description)
      setImageSrc(imageSrc)
      setWebsite(website)
      setCity(city)
      setLocationText(location)
      setId(id)

      // Appel API pour récupérer les expositions en fonction de l'ID du site
      if (user) {
        getExhibitions(id, setFilteredExhibitions, user)
      }
    }
  }, [locationn.state, id, user])

  useEffect(() => {
    // Mise à jour des éléments filtrés lorsque les expositions sont chargées
    if (selectedType === 'exhibitions') {
      setFilteredItems(filteredExhibitions)
    }
  }, [filteredExhibitions, selectedType])

  const handleArtworkTypeChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const type = event.target.value
    setSelectedType(type)
    setFilteredItems(filteredExhibitions) // Ici, on affiche toujours des expositions
  }

  // Mise à jour de la fonction pour adapter les données provenant de filteredExhibitions
  const renderCardInfo = (item: Exhibition) => {
    return {
      title: item.name,
      description: item.shortDescription,
      imageSrc: item.site.pictures[0]?.hostingUrl || '', // Utilisation de l'image du site
      location: `${item.site.address.houseNumber} ${item.site.address.street}`,
      city: item.site.address.city.name,
      videoCountPlaceholder: `1 oeuvres`, // Compter les expositions
      pathname: '/showartwork',
      id: item.id
    }
  }

  return (
    <Fragment>
      <Head>
        <title>Nolosay</title>
      </Head>
      <div className={`mainDiv ${styles['mainDiv']}`}>
        <div className='justify-center w-4/5 mx-auto'>
          <TitleCard
            title={name}
            description={description}
            website={website}
            location={`${city}, ${locationText}`}
            imgPath=''
            pagePath='/findlocation/'
          />
        </div>
        <div className={`listDiv ${styles['listDiv']}`}>
          <FilterListArtwork handleArtworkTypeChange={handleArtworkTypeChange} />
          <div className={`cardlistDiv ${styles['cardlistDiv']}`}>
            <div className={`nbcardlistDiv ${styles['nbcardlistDiv']}`}>
              {filteredItems.map((item, index) => (
                <CardTemplate key={index} cardInfo={renderCardInfo(item)} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

Location.getLayout = function getLayout(page: ReactNode) {
  return <Layout>{page}</Layout>
}

export default Location
