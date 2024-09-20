import React, { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import 'leaflet/dist/leaflet.css'
import textData from '../../../../public/text.json'
import { Place } from '../../../global/types/Places'

interface MapProps {
  center: [number, number]
  places?: Place[]
}

const styles: { [key: string]: string } = {
  Map: 'min-w-[1493px] mt-8 gap-[35px] min-h-[893px]',
  Img: 'h-[218px] w-[129px] rounded-l-lg object-cover ',
  LoadingText: 'text-base-black text-base',
}

const Map: React.FC<MapProps> = props => {
  const DEFAULT_ZOOM = 12
  const DEFAULT_CENTER: [number, number] = [0, 0]
  const [Leaflet, setLeaflet] = useState<any>(null)
  const mapRef = useRef<any>(null)
  const { center = DEFAULT_CENTER, places = [] } = props

  useEffect(() => {
    import('react-leaflet').then(module => {
      setLeaflet(module)
    })
  }, [])

  useEffect(() => {
    if (!Leaflet) return

    const L = require('leaflet')

    ;(async function init() {
      if (!L) return
      delete (L.Icon.Default.prototype as any)._getIconUrl
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'leaflet/images/marker-icon-2x.png',
        iconUrl: 'leaflet/images/marker-icon.png',
        shadowUrl: 'leaflet/images/marker-shadow.png',
      })
    })()
  }, [Leaflet])

  const L = require('leaflet')
  const redIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.5.1/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  })

  const blueIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.5.1/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  })

  return (
    <div>
      {Leaflet ? (
        <div>
          <Leaflet.MapContainer
            ref={mapRef}
            className={`Map ${styles['Map']}`}
            center={center}
            zoom={DEFAULT_ZOOM}
          >
            <Leaflet.TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
            {center[0] !== 47.216671 && center[1] !== -1.55 && (
              <Leaflet.Marker
                position={center}
                icon={blueIcon}
              >
                <Leaflet.Popup>You are here</Leaflet.Popup>
              </Leaflet.Marker>
            )}
            {places.map((place, index) => (
              <Leaflet.Marker
                key={index}
                position={[place.address.latitude, place.address.latitude]}
                icon={redIcon}
              >
                <Leaflet.Popup maxWidth={400}>
                  <div className=''>
                    <div className='rounded-xl flex flex-col items-start justify-center '>
                      <div className='rounded-1.5lg flex flex-row items-center gap-[10px]'>
                        <img
                          className={`Img ${styles['Img']}`}
                          loading='eager'
                          alt=''
                          src={place.pictures[0].hostingUrl}
                        />
                        <div className='flex-1 flex flex-col py-4 pl-2  gap-[13px] min-w-[138px] p-[10px]'>
                          <div className=' items-center justify-center text-inherit leading-[19px] font-bold font-inherit text-lg'>
                            {place.name}
                          </div>
                          <div>
                            {place.address.city.name}, {place.address.city.department.country.name}
                          </div>
                          <div>
                            {textData.page.components.map.description} {place.shortDescription}
                          </div>
                          <div>
                            {textData.page.components.map.website} <Link href={place.website}>{place.website}</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Leaflet.Popup>
              </Leaflet.Marker>
            ))}
          </Leaflet.MapContainer>
        </div>
      ) : (
        <div className={`LoadingText ${styles['LoadingText']}`}>{textData.page.components.map.loading}</div>
      )}
    </div>
  )
}

export default Map
