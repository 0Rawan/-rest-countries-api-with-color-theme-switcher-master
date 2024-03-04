"use client"; 
import React, { useState, useContext } from 'react';
import { DataContext } from '../context/dataContext';
import jsdata from "../data"


export default function Dropdown({ options, label }) {
    const [isOpen, setIsOpen] = useState(false);
    const { data, setData } = useContext(DataContext);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const onSelect = (option) => {
    console.log(`Selected option: ${option.label}`);
    const filteredData = jsdata.filter((item) =>
    { 
    return item.region.toLowerCase().includes(option.label.toLowerCase()); 
    });
    setData(filteredData);
  };
  const handleOptionClick = (option) => {
    setIsOpen(false);
    onSelect(option);
  };
    return (
        <div className="relative mt-10 sm:mt-0">
          <button
            onClick={toggleDropdown}
            className=" w-2/4 sm:w-full flex items-center whitespace-nowrap p-2 text-sm font-medium text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            {label}
            <svg
              className="ml-2 -mr-0.5 h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
    
          {isOpen && (
            <ul className="absolute z-10 w-full py-1 mt-1 text-gray-900 border border-gray-300  bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              {options.map((option) => (
                <li
                  key={option.value}
                  className="cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-500"
                  onClick={() => handleOptionClick(option)}
                >
                  <a className="block px-4 py-2 text-sm text-gray-700  dark:text-white">
                    {option.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      );
    };

