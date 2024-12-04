/**
 * @function getCity
 * @description Gets the city of the user from latitude and longitude.
 * @param {Object} props - Contains the latitude and longitude of the user
 * @param {number} props.latitude - The latitude of the user
 * @param {number} props.longitude - The longitude of the user
 * @returns {Promise<string>}
 */
export default async function getCity({
  latitude,
  longitude,
}: {
  latitude: number
  longitude: number
}): Promise<string> {
  const defaultCity = 'Nantes'
  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=18&addressdetails=1`
    )
    const data = await response.json()
    return (
      data.address.city ||
      data.address.town ||
      data.address.village ||
      data.address.county ||
      data.address.state ||
      data.address.country
    )
  } catch (error) {
    console.error('Error in getCity:', error)
    return defaultCity
  }
}
