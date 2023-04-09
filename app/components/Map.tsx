import { useMemo } from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

function Map() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
  });

  const defaultCenter = { lat: 40.684751, lng: -73.944182 };

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <>
      <div className="z-20 mb-10 h-full overflow-hidden">
        <GoogleMap
          zoom={17}
          center={defaultCenter}
          mapContainerClassName="w-full h-96 rounded-lg"
        >
          <Marker position={defaultCenter} />
        </GoogleMap>
      </div>
    </>
  );
}

export default Map;
