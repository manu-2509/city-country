import {useState} from 'react'
import {uuid} from 'uuid'
import { addCountryCityAPI } from '../store/actions'
import {useDispatch} from 'react-redux'
export const AddCity=()=>{
 const [details,setDetails] = useState({})  
 const dispatch = useDispatch()
 const handleChange=(e)=>{
    const {value,name} = e.target
    setDetails({
        ...details,
        [name]:value
    })
 }
 const handleSubmit=(e)=>{
    e.preventDefault()
    dispatch(addCountryCityAPI(details))

 }
    return(
        <form onSubmit={handleSubmit}>
                Country Name: <input type="text" name="country" onChange={handleChange}/>
          <br />
                City Name: <input type="text" name="city" onChange={handleChange} />
          <br />
                Population: <input type="number" name="population" onChange={handleChange}/>
          <br />
                <input type="submit" value="submit" />
        </form>
    )
}