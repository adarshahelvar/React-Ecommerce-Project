import React, { createContext,useContext, useEffect, useReducer } from 'react'
import axios from 'axios';
import reducer from '../reducer/productReducer';

const AppContext = createContext();

const API = "https://api.pujakaitem.com/api/products";

const AppProvider = ({children}) => {
    const initialState ={
        isLoading: false,
        isError: false,
        products: [],
        featureProducts: [],
        isSingleLoading: false,
        singleProduct:{},
    }

    const [state, dispatch] = useReducer(reducer, initialState);

const getProducts = async(url) =>{
    dispatch({type:'SET_LOADING'})
    try {
        const res = await axios.get(url);
        const products = await res.data;
    dispatch({type: 'SET_API_DATA', payload: products });
    } catch(error){
        dispatch({type:'API_ERROR'})
    }
    
};

//API call for single product
const getSingleProduct= async(url)=>{
    dispatch({type:'SET_SINGLE_LOADING'})
    try{
        const res = await axios.get(url);
        const singleproduct = await res.data;
        dispatch({type: 'SET_SINGLE_PRODUCT', payload: singleproduct });
    }catch(error){
        dispatch({type:'SET_SINGLE_ERROR'})
    }
};



    useEffect(()=>{
        getProducts(API);
    },[])

    return (
    <AppContext.Provider value={{...state, getSingleProduct}} >
        {children}
    </AppContext.Provider>)
};


// custom hooks creation 
const useProductContext = () =>{
    return useContext(AppContext);
}



export { AppProvider, AppContext, useProductContext };