import React, {useEffect, useState} from 'react';

function useIsUserUnique(): boolean {
  const [isUserUnique, setIsUserUnique] = useState<boolean>(false)

  useEffect(() => {
    if (typeof window === 'undefined') return 

    const uniqueUser = localStorage.getItem('isUniqueUser');
    if (uniqueUser === null) {
      setIsUserUnique(true)
    }
    else{
      localStorage.setItem('isUniqueUser', JSON.stringify(false))
      setIsUserUnique(false)
    }

    
  }, [])
  
  return isUserUnique;
}
export default useIsUserUnique;


  // const uniqueUser = ()=>{
  //   if (typeof window === 'undefined') return 

  //   const uniqueUse = localStorage.getItem('isUniqueUser');
  //   if (uniqueUse === null) {
  //     localStorage.setItem('isUniqueUser', JSON.stringify(true))
  //     // setIsUserUnique(true)
  //     return true
  //   }
  //   else{
  //     // localStorage.setItem('isUniqueUser', JSON.stringify(false))
  //     // setIsUserUnique(false)
  //     return false
  //   }

  // }