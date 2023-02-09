import React, { useEffect, useState } from 'react';
import {useLocation} from 'react-router-dom';


function useUserNavigation(): string {
    const location = useLocation();

    const [navLocation, setNavLocation] = useState<string>("")

    useEffect(() => {
      setNavLocation(location.pathname)
    }, [location.pathname])
    return navLocation;
}

export default useUserNavigation;