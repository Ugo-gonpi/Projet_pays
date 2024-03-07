import React from 'react';

const SearchBar = () => {

    return (
        <div className='w-screen h-[100px] flex items-center justify-around'>

            <label className="input input-bordered flex items-center gap-2 w-[400px] mt-4 bg-gray-100">

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>

                <input type="text" className="grow text-black" placeholder="Search for a country..." />
                
            </label>

            <details className="dropdown flex items-center mt-[10px]">

                <summary className="m-1 btn bg-slate-200 text-slate-700">Filter by Region</summary>

                <ul className="p-2 shadow menu dropdown-content z-[1] rounded-[10px] w-52 bg-slate-200">
                    <li><a className='text-black'>Africa</a></li>

                    <li><a className='text-black'>America</a></li>

                    <li><a className='text-black'>Asia</a></li>

                    <li><a className='text-black'>Europe</a></li>

                    <li><a className='text-black'>Oceania</a></li>

                </ul>

            </details>

        </div>
    );
}

export default SearchBar;
