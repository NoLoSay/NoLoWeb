// hooks/useNoloPlaces.ts

import { useMutation } from '@tanstack/react-query'
import { Place } from '../../../../global/types/Places'
import { NoloPlacesJSON } from '../../../../global/types/httpClient/queries/places'
import getPlaces from '../../places'

type UpdatePlacesDisplayedProps = {
  setPlaces: (places: Place[]) => void
  latitude?: number
  longitude?: number
  q?: string
  radius?: number
  token: string
}

/**
 * @function useNoloPlaces
 * @description Hook to handle fetching places from the Nolo API.
 * @param props - The function to set the places, and optional parameters like latitude, longitude, query, radius, and token.
 * @returns The mutation object from react-query.
 */
export default function useNoloPlaces({
  setPlaces,
  latitude,
  longitude,
  q,
  radius,
  token,
}: UpdatePlacesDisplayedProps) {
  function updatePlacesDisplayed({ newPlaces }: { newPlaces: Place[] }) {
    setPlaces(newPlaces)
  }

  const mutation = useMutation<NoloPlacesJSON>({
    mutationFn: () => getPlaces({ latitude, longitude, q, radius, token }),
    onSuccess: data => {
      try {
        updatePlacesDisplayed({ newPlaces: data.json })
      } catch (error) {
        console.error('Error updating places:', error)
      }
    },
  })

  return mutation
}
