import React, { useState } from 'react'

const API = {
    fetchJesus: async () => {
        const endpoint = ``
        return await (await fetch(endpoint)).json()
    }
}

export const useFetch = () => {
    const [state, setState] = useState()
    
    useEffect(() => {
        fetchThis();
      }, []);
    
      const fetchThis = async page => {
        try {

          const old = await API.fetchJesus(searchTerm, page);
          setState(() => ({}));
        } catch (error) {
         
        }
     
      };
    
    return {state}
}
