import { useState, useEffect, useContext } from 'react'
import { useRouter } from 'next/router'
import { UserContext } from '../../../global/contexts/UserProvider' // Si tu as un context d'utilisateur
import useNoloPlaces from '../../../helpers/httpClient/queries/places/usePlace' // Adapte le hook à ta logique métier
import getCity from '../../../helpers/httpClient/localization'
import { Place } from '../../../global/types/Places'

interface HomeScreenController {
  city: string
  userPosition: [number, number]
  currentPage: 'map' | 'carousel'
  displaySearchBar: boolean
  searchValue: string
  setSearchValue: (value: string) => void
  places: Place[]
  getNearestPlaces: () => Place[]
  getAllPlacesUsingSearch: () => void
  isLoading: boolean
  onRefresh: () => void
  isRefreshing: boolean
  isSuccessful: boolean
}

export default function useHomeScreenController(): HomeScreenController {
  const router = useRouter()
  const [city, setCity] = useState<string>('')
  const [currentPage, setCurrentPage] = useState<'map' | 'carousel'>('carousel')
  const [displaySearchBar, setDisplaySearchBar] = useState<boolean>(false)
  const [searchValue, setSearchValue] = useState<string>('')
  const { user, setUser } = useContext(UserContext)
  const [userPosition, setUserPosition] = useState<[number, number]>([47.216671, -1.55])
  const [places, setPlaces] = useState<Place[]>([])

  const noloPlacesMutation = useNoloPlaces({
    setPlaces,
    latitude: user?.latitude || 0,
    longitude: user?.longitude || 0,
    token: user?.accessToken,
  })

  const noloPlacesMutationUsingSearch = useNoloPlaces({
    setPlaces,
    q: searchValue,
    token: user?.accessToken,
  })

  const getAllPlaces = () => {
    noloPlacesMutation.mutate()
  }

  const getAllPlacesUsingSearch = () => {
    noloPlacesMutationUsingSearch.mutate()
    toggleSearchBar()
    setCity(searchValue)
  }

  useEffect(() => {
    console.log('a')
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async position => {
          const { latitude, longitude } = position.coords
          setUserPosition([position.coords.latitude, position.coords.longitude])
          user.longitude = position.coords.longitude
          user.latitude = position.coords.longitude
          setUser((prev: any) => ({
            ...prev,
            localisation: { coords: { latitude, longitude } },
          }))

          const reversedCity = await getCity({ latitude, longitude }) // Adapte cette fonction à ton projet
          console.log('b' + reversedCity)
          setCity(reversedCity)
        },
        async () => {
          setCity('Nantes')
          setUser((prev: any) => ({
            ...prev,
            localisation: { coords: { latitude: 47.218371, longitude: -1.553621 } },
          }))
          const reversedCity = await getCity({ latitude: 47.218371, longitude: -1.553621 })
          setCity(reversedCity)
          alert("Vous avez désactivé la localisation, veuillez l'activer dans vos réglages.")
        }
      )
    } else {
      alert("La géolocalisation n'est pas prise en charge par ce navigateur.")
    }

    getAllPlaces()
  }, [])

  function onRefresh() {
    getAllPlaces()
  }

  function togglePage() {
    setCurrentPage(prevPage => (prevPage === 'map' ? 'carousel' : 'map'))
  }

  function toggleSearchBar() {
    setDisplaySearchBar(prev => !prev)
  }

  function getNearestPlaces(): Place[] {
    let localisation = { latitude: 0, longitude: 0 }

    if (user?.latitude !== undefined && user?.longitude !== undefined) {
      localisation = { latitude: user.latitude, longitude: user.longitude }
    }

    const placesBis = [...places]

    const placesOrderedByDistance = placesBis.sort((a, b) => {
      const distanceA = Math.sqrt(
        (a.address.latitude - localisation.latitude) ** 2 + (a.address.longitude - localisation.longitude) ** 2
      )
      const distanceB = Math.sqrt(
        (b.address.latitude - localisation.latitude) ** 2 + (b.address.longitude - localisation.longitude) ** 2
      )

      return distanceA - distanceB
    })

    return placesOrderedByDistance.slice(0, 5)
  }

  return {
    city,
    userPosition,
    currentPage,
    displaySearchBar,
    searchValue,
    setSearchValue,
    places,
    getNearestPlaces,
    getAllPlacesUsingSearch,
    isLoading: noloPlacesMutation.isPending || noloPlacesMutationUsingSearch.isPending,
    onRefresh,
    isRefreshing: noloPlacesMutation.isPending,
    isSuccessful: noloPlacesMutation.isSuccess || noloPlacesMutationUsingSearch.isSuccess,
  }
}
