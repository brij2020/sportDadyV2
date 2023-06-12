import * as React from 'react'

const useGetQuery = (queryname) => {
    const [queryValue, setQueryValue ] =  React.useState('');
    React.useEffect(() => {
        let params = new URL(document.location).searchParams;
        let queryValue = params?.get(queryname) ?? '';
        setQueryValue(queryValue)
    },[]);
    
    const setCustomQuery = query => setQueryValue(query);

    return [queryValue, setCustomQuery]
} 

export { useGetQuery } 
