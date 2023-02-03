import React, {useState, useEffect} from 'react';

export const useUserDevice = ():string =>{
    const [device, setDevice] = useState<string>("")

    useEffect(() => {
      const device = navigator.userAgent;
      const isMobileDevice = /android|iphone|kindle|ipad/i.test(device);

      const userDevice = isMobileDevice ? 'mobile': 'desktop';
      setDevice(userDevice)

    }, [])

    return device;
    
}