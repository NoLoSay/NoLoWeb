import { ArtToTranslate, Place } from '../../Places'

/**
 * @typedef {Object} PlacesNeedingTranslationJSON
 * @property {ArtToTranslate[]} json - The places needing translation.
 * @property {number} status - The status of the response.
 * @property {string} message - The message of the response.
 */
export type PlacesNeedingTranslationJSON = {
  json: ArtToTranslate[]
  status: number
  message: string
}

/**
 * @typedef {Object} NoloPlacesJSON
 * @property {Place[]} json - The places needing translation.
 * @property {number} status - The status of the response.
 * @property {string} message - The message of the response.
 */
export type NoloPlacesJSON = {
  json: Place[]
  status: number
  message: string
}

export default PlacesNeedingTranslationJSON
