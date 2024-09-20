import { NoloPlacesJSON } from '../../global/types/httpClient/queries/places'
import { get } from './common'

/**
 * @function getPlaces Get the places from the server.
 * @returns Promise of an array of places
 */
export default async function getPlaces({
  latitude,
  longitude,
  q,
  radius,
  token,
}: {
  latitude?: number
  longitude?: number
  q?: string
  radius?: number
  token: string
}): Promise<NoloPlacesJSON> {
  try {
    const queryParams: { [key: string]: string } = {}

    if (latitude !== undefined) {
      queryParams.latitude = latitude.toString()
    }
    if (longitude !== undefined) {
      queryParams.longitude = longitude.toString()
    }
    if (radius !== undefined) {
      queryParams.radius = radius.toString()
    }
    if (q !== undefined) {
      queryParams.q = q
    }

    const response = await get({
      endpoint: `/sites`,
      authorizationToken: token,
    })

    const responseData = await response.json()

    if (!response.ok) {
      throw new Error(responseData.message)
    }

    return {
      json: responseData,
      status: response.status,
      message: responseData.message,
    }
  } catch (error) {
    console.log("Error, couldn't get places:", error)
    throw new Error(error instanceof Error ? error.message : String(error))
  }
}
