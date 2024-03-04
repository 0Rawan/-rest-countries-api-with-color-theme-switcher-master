"use client"; 
import { useState, useContext } from "react";
import { DataContext } from '../context/dataContext';
import jsdata from "../data"


export default function Search() {
    const [searchTerm, setSearchTerm] = useState("");
    const { data, setData } = useContext(DataContext);

   // const { data, setNewData } = useGlobalContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  const onSearch = (term) => { 
    const filteredData = jsdata.filter((item) =>
        { 
        return item.name.toLowerCase().includes(term.toLowerCase()); 
        });
        setData(filteredData);
    };
  return (
    
    <form onSubmit={handleSubmit} className="flex items-center w-full sm:w-9/12 relative">
    <label htmlFor="search-field" className="sr-only">
      Search
    </label>
    <input
      type="text"
      id="search-field"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="block w-full  sm:w-1/3 p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder="Search..."
    />
    <div className="text-whit absolute p-2 me-2 cursor-pointer">
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512"  height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M456.69 421.39L362.6 327.3a173.81 173.81 0 0034.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.81 173.81 0 00327.3 362.6l94.09 94.09a25 25 0 0035.3-35.3zM97.92 222.72a124.8 124.8 0 11124.8 124.8 124.95 124.95 0 01-124.8-124.8z"></path></svg>

    </div>
  </form>
  )
}
