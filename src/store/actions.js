import axios from "axios";
import {GET_COUNTRY_WITH_CITY,DELETE_COUNTRY_WITH_CITY,ADD_COUNTRY_WITH_CITY} from "./actions.types"
 
export const getCountryAPI = ()=>(dispatch)=>{
    axios.get("http://localhost:8080/city-countries").then((response)=>{
          dispatch({type:GET_COUNTRY_WITH_CITY,payload:response.data})
    })
  
}
export const deleteCountryAPI=(id)=>(dispatch)=>{
    axios.delete(`http://localhost:8080/city-countries/${id}`).then((response)=>{
       dispatch({type:DELETE_COUNTRY_WITH_CITY,payload:id});
    })
}
export const addCountryCityAPI=(data)=>(dispatch)=>{
    const json=JSON.stringify(data)
  axios.post(`http://localhost:8080/city-countries,${json}`).then((response)=>{
    dispatch({type:ADD_COUNTRY_WITH_CITY,payload:response.data})
  })
}