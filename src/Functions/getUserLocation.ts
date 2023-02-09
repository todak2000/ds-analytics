
import React, { useEffect, useState } from 'react';

function useGetUserLocation(): {city:string, country:string}{
  const [country, setCountry] = useState<string>("");
  const [city, setCity] = useState<string>("");

  useEffect(() => {
    const getCountry = async () => {
      try {
        const result = await fetch("http://ip-api.com/json");
        const res = await result.json();
        setCountry(res?.country ?? null);
        setCity(res?.city ?? null);
      } catch (error) {
        console.error('Error:', error);
      }
    };
    getCountry();
  }, []);

  return {country, city};
}

export default useGetUserLocation

