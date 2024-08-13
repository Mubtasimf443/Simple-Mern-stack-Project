 /* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ  InshaAllah */

import React, { createContext, useContext } from 'react'
import useLocalStorage from '../useLocalStorage.hooks'


const Contex = createContext()


const useMainContext = () => {
    return useContext(Contex)
}

const MainCotext = ({child}) => {
    

    
  return (
  <Contex.Provider >
 { child}
  </Contex.Provider>
  )
 
}

export  {MainCotext,useMainContext}




