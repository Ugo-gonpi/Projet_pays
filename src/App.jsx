import axios from 'axios';
import { useState, useEffect } from 'react'
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import { Link } from 'react-router-dom';

function App() {

  const [data, setData] = useState([]);

  const [change, setChange] = useState(false);

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all")
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className='w-full h-full flex justify-center items-start flex-wrap' style={change == false ? {background : "white"} : {background : "#202d36"}}>

      <Header change={change} setChange={setChange} />

      <SearchBar />

      {data.map((element, key) => {
        return(
          <Link to={"/details"} key={key} style={change == false ? {background : "hsl(0, 0%, 95%)"} : {background : "#2b3743"}} className='w-[270px] h-[340px] flex justify-center items-center flex-wrap flex-row mb-[10px] text-center ml-[20px] mr-[20px] mt-[10px] rounded-[10px] hover:scale-105 transition-[2s] shadow-xl'>

            <img src={element.flags.png} alt="" className='w-full h-[50%] rounded-t-lg'/>

            <div className='w-full h-[50%] font-[NunitoSans] font-bold text-[20px] flex flex-col items-start justify-center pl-[20px]'>

              <h3 className='font-extrabold underline text-[24px]' style={change == false ? {color : "#262e38"} : {color : "white"}}>
                {element.name.common}
              </h3>

              <p className='text-black text-[17px]'>Population: <span style={change == false ? {color : "#262e38"} : {color : "white"}}>{element.population}.</span></p>

              <p className='text-black text-[17px]'>Region: <span style={change == false ? {color : "#262e38"} : {color : "white"}}>{element.region}.</span></p>

              <p className='text-black text-[17px]'>Capital: <span style={change == false ? {color : "#262e38"} : {color : "white"}}>{element.capital}.</span></p>

            </div>

          </Link>
        )

      })}

    </div>
  )
}

export default App
