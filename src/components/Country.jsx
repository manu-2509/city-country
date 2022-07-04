import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { useState,useEffect} from 'react';
export const Country=({data,deleteCity})=>{
const [sort,setSort] = useState("")
console.log(sort)
useEffect(()=>{
if(sort=="desc"){
data.sort((a,b)=>{
    return a.population-b.population;
})
}
else if(sort=="asc"){
    data.sort((a,b)=>{
        return b.population-a.population;
    }) 
} 
},[sort])
    return(
        <div>
        <select onChange={(e)=>setSort(e.target.value)}>
            <option value="">--</option>
            <option value="asc">asc</option>
            <option value="desc">desc</option>
        </select>
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>id</TableCell>
              <TableCell align="right">Country</TableCell>
              <TableCell align="right">City</TableCell>
              <TableCell align="right">Population</TableCell>
              <TableCell align="right">Edit</TableCell>
              <TableCell align="right">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item,index)=>(
              <TableRow
              key={item.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">{index+1}</TableCell>
                <TableCell align="right">{item.country}</TableCell>
                <TableCell align="right">{item.city}</TableCell>
                <TableCell align="right">{item.population}</TableCell>
                <TableCell align="right"><Button>Edit</Button></TableCell>
                <TableCell align="right"><Button onClick={()=>deleteCity(item.id)}>Delete</Button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </div>
    )
}