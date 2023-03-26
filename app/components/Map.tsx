import { useMemo } from 'react'
import {GoogleMap, useLoadScript, Marker } from '@react-google-maps/api'
import Script from 'next/script';

function Map() {
    const {isLoaded} = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
    });

    if (!isLoaded) return <div>Loading...</div>
  return (
    <>
<Script src="../components/Map.tsx" type="text/partytown" />
<div className='h-screen w-screen'> 
<div className='z-20 h-full w-auto overflow-hidden'>
 <GoogleMap zoom={10} center={{lat:  40.6848651, lng: -73.9444802}} mapContainerClassName='mx-28 w-auto h-96 rounded-l'> 
 <Marker position={{lat:  40.6848651, lng: -73.9444802}} />
 </GoogleMap>
 </div>
 </div>
  </>
  )}
  
 export default Map
