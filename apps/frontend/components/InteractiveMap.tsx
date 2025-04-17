import React, { useState, useEffect } from 'react';

const InteractiveMap = ({ apiKey, locations }) => {
  const [map, setMap] = useState(null);

  useEffect(() => {
    if (window.google) {
      const map = new window.google.maps.Map(document.getElementById('map'), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
      });
      setMap(map);
    }
  }, []);

  useEffect(() => {
    if (map && locations) {
      locations.forEach((location) => {
        new window.google.maps.Marker({
          position: location,
          map: map,
        });
      });
    }
  }, [map, locations]);

  return (
    <div id="map" className="w-full h-64 sm:h-80 md:h-96 lg:h-112 xl:h-128"></div>
  );
};

export default InteractiveMap;
