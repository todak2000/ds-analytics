
import React, { useEffect, useState } from 'react';

export const useGetUserCountry = () => {
  const [country, setCountry] = useState<string | null>(null);

  useEffect(() => {
    const getCountry = async () => {
      try {
        const result = await fetch("http://ip-api.com/json");
        const res = await result.json();
        setCountry(res?.country ?? null);
      } catch (error) {
        console.error('Error:', error);
        setCountry(null);
      }
    };
    getCountry();
  }, []);

  return country;
};