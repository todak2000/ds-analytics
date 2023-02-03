
import React, { useEffect, useState } from 'react';

export const useGetUserCity = () => {
  const [city, setCity] = useState<string | null>(null);

  useEffect(() => {
    const getCity = async () => {
      try {
        const result = await fetch("http://ip-api.com/json");
        const res = await result.json();
        setCity(res?.city ?? null);
      } catch (error) {
        console.error('Error:', error);
        setCity(null);
      }
    };
    getCity();
  }, []);

  return city;
};