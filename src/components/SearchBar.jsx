// import React, { useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
  // export const searchProducts = [
  //   { id: '1', name: 'Textbooks', categoryId: '1' },
  //   { id: '2', name: 'Notebooks & Journals', categoryId: '1' },
  //   { id: '3', name: 'Writing Instruments', categoryId: '1' },
  //   { id: '4', name: 'Laptops & Tablets', categoryId: '2' },
  // ];  


  const Search = () => {
    return (
              <div className="relative flex flex-row gap-1 lg:w-[560px] md:w-96 min-w-64 bg-[#e6e5ff] rounded-full">
              <MagnifyingGlassIcon className="h-[20px] w-[20px] absolute left-3 top-3" />
                      <input name="search" type="search" role="searchbox" autoComplete="on" className="h-[44px] w-full overflow-hidden rounded-full border border-solid pl-10 pr-3 focus:bg-gray-200  focus:outline-none text-[17px] font-semibold" placeholder="'Amazon Gift Card'" />
              </div>
    );
  };
  
  export default Search;