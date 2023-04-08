import { useMemo } from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
// import { Partytown } from '@builder.io/partytown/react';

function Map() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
  });

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <>
      <div className="z-20 mb-10 h-full overflow-hidden">
        <GoogleMap
          zoom={10}
          center={{ lat: 40.6848651, lng: -73.9444802 }}
          mapContainerClassName="mx-28 w-auto h-96 rounded-lg"
        >
          <Marker position={{ lat: 40.6848651, lng: -73.9444802 }} />
        </GoogleMap>
      </div>
    </>
  );
}

export default Map;
