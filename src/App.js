import {Home} from "./components/Home"
import {AddCity} from './components/AddCity'
import {AddCountry} from './components/AddCountry'
import {Routes,Route} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
     <Home></Home>
     <Routes>
      <Route path="/add-country" element={<AddCountry/>}/>
      <Route path="/add-city" element={<AddCity/>}/>
     </Routes>
    </div>
  );
}

export default App;
