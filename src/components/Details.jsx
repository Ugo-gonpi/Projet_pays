import React, {useState, useEffect} from 'react';
import Header from './Header';
import axios from 'axios';

const Details = () => {

    // const [data, setData] = useState([]);

    // useEffect(() => {
    //     axios.get("https://restcountries.com/v3.1/all")
    //         .then((response) => setData(response.data))
    //         .catch((error) => console.log(error));
    // }, []);

    return (
        <div className='w-screen h-screen bg-white flex flex-col'>

            <Header/>
            
            <div className='w-screen h-[95%] flex justify-center items-center'>

                <div className='w-[50%] h-full'>

                </div>

                <div className='w-[50%] h-full'>

                </div>

            </div>
        </div>
    );
}

export default Details;
