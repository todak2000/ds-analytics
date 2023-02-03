import React, { useEffect, useState } from 'react';

export const useUserNavigation = (): string=>{
    const [navLocation, setNavLocation] = useState<string>("")

    useEffect(() => {
      setNavLocation(window.location.pathname)
    }, [])
    return navLocation;
}