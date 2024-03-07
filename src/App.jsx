import axios from 'axios';
import { useState, useEffect } from 'react'
import Header from './components/Header';
import SearchBar from './components/SearchBar';

function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all")
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className='w-full h-full flex justify-center items-start flex-wrap bg-white'>
      <Header />
      <SearchBar />
      {data.map((element, key) => {
        return(
          <div key={key} className='w-[300px] h-[340px] flex justify-center items-center flex-wrap flex-row mb-[10px] text-center ml-[10px] mr-[10px] mt-[10px] rounded-[10px] bg-[hsl(0,0%,95%)] hover:scale-105'>
            <img src={element.flags.png} alt="" className='w-full h-[50%] rounded-t-lg'/>
            <div className='w-full h-[50%] font-[NunitoSans] font-bold text-[20px] text-center'>
              <h3 className='text-[hsl(200,15%,8%)] font-extrabold underline text-[24px]'>
                {element.name.common}
              </h3>
              <p className='text-black text-[17px]'>Population: <span className='text-[hsl(198,26%,17%)]'>{element.population}</span></p>
              <p className='text-black text-[17px]'>Region: <span className='text-[hsl(198,26%,17%)]'>{element.region}</span></p>
              <p className='text-black text-[17px]'>Capital: <span className='text-[hsl(198,26%,17%)]'>{element.capital}</span></p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default App
