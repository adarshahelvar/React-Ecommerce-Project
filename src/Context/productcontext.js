import React, { createContext,useContext } from 'react'

const AppContext = createContext();

const AppProvider = ({children}) => {
    return <AppContext.Provider value={{myName: 'Adi Helvar'}} >{children}</AppContext.Provider>
};



// custom hooks creation 
const useProductContext = () =>{
    return useContext(AppContext);
}



export { AppProvider, AppContext, useProductContext };