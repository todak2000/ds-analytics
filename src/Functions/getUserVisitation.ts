import React, {useEffect, useState} from 'react';

export const useIsUserUnique = (): boolean =>{
  const [isUserUnique, setIsUserUnique] = useState<boolean>(false)

  useEffect(() => {
    if (typeof window === 'undefined') return 

    const uniqueUser = localStorage.getItem('isUniqueUser');
    if (uniqueUser === null) {
      localStorage.setItem('isUniqueUser', JSON.stringify(true))
      setIsUserUnique(true)
    }
    else{
      localStorage.setItem('isUniqueUser', JSON.stringify(false))
      setIsUserUnique(false)
    }

    
  }, [])
  
  return isUserUnique;
}
