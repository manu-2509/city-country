import {GET_COUNTRY_WITH_CITY,DELETE_COUNTRY_WITH_CITY,ADD_COUNTRY_WITH_CITY} from "./actions.types";
const InitState = {
    data:[],
}

export const countryReducer = (state=InitState, {type,payload}) =>{
switch(type){
    case GET_COUNTRY_WITH_CITY:{
        return {...state,data:payload}
    }
    case DELETE_COUNTRY_WITH_CITY:{
        return {...state,data:state.data.filter((item)=>item.id!=payload)}
    }
    case ADD_COUNTRY_WITH_CITY:{
        return {...state,data:[...state.data,payload]}
    }
    default:{
        return state;
    }
}
}