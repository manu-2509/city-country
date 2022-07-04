import {useDispatch,useSelector} from 'react-redux'
import {useEffect} from 'react'
import { getCountryAPI ,deleteCountryAPI} from '../store/actions'
import {Country} from './Country'
import {Link} from 'react-router-dom'
export const Home=()=>{
    const dispatch =useDispatch();
    const {data}=useSelector((state)=>state.city)
    console.log(data)
    useEffect(()=>{
        dispatch(getCountryAPI())
    },[])
    const deleteCity=(id)=>{
        dispatch(deleteCountryAPI(id))
    }
    return(
        <div>
         <div>
        <Link to="/add-city">Add city</Link>
        <Link to="/add-country">Add Country</Link>
        </div>   
        <Country data={data} deleteCity={deleteCity}></Country>
        </div>
    )
}