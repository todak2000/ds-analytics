export const getUserVisitation = (): string => {
    if (typeof window === 'undefined') return "error occured!";
    const isUniqueUser = localStorage.getItem('isDSUniqueUser');
    if (isUniqueUser === null) {
      localStorage.setItem('isDSUniqueUser', JSON.stringify(true));
    }
    else{
        localStorage.setItem('isDSUniqueUser', JSON.stringify(false));
    }
    return isUniqueUser;
};
