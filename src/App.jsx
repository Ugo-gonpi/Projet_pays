import axios from 'axios';
import { useState, useEffect } from 'react'
import Header from './components/Header';

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
      {data.map((element, key) => {
        return(
          <div key={key} className='w-[260px] h-[250px] flex justify-center items-center flex-wrap flex-row mb-[10px] text-center ml-[10px] mr-[10px] mt-[10px] rounded-[10px] bg-[hsl(0,0%,95%)]'>
            <img src={element.flags.png} alt="" className='w-full h-[50%] rounded-t-lg'/>
            <div className='w-full h-[50%] font-[NunitoSans] font-bold text-[20px]'>
              <h3 className='w-full text-[hsl(200,15%,8%)]'>
                {element.name.common}
              </h3>
              
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default App
