import { useMemo } from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

function Map() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
  });

  const defaultCenter = { lat: 40.68452871196172, lng: -73.94436153324439 };

  if (!isLoaded) return <div>Loading...</div>;

  // const markerIcon = {
  //   url: '/images/logo.webp', // Replace this with the path to your logo
  //   scaledSize: new google.maps.Size(40, 40), // Adjust these values to resize the icon
  // };

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
