import React, { useState, useEffect } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const Search = () => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [isSuggestionsVisible, setSuggestionsVisible] = useState(false);

  // Example list of products (replace this with your API call or database query)
  const productList = [
    'Amazon Gift Card',
    'Apple iPhone 13',
    'Samsung Galaxy S21',
    'Sony WH-1000XM4 Headphones',
    'Dell XPS 13 Laptop',
    'Nike Air Max Sneakers',
    'Adidas Running Shoes',
    'Google Pixel 6',
  ];

  useEffect(() => {
    if (query) {
      const filteredSuggestions = productList.filter(product =>
        product.toLowerCase().includes(query.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
      setSuggestionsVisible(true);
    } else {
      setSuggestions([]);
      setSuggestionsVisible(false);
    }
  }, [query]);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion);
    setSuggestions([]);
    setSuggestionsVisible(false);
  };

  return (
    <div className="relative flex flex-col items-center lg:w-[560px] md:w-96 min-w-64 bg-[#e6e5ff] rounded-full">
      <div className="relative w-full">
        <MagnifyingGlassIcon className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2" />
        <input
          name="search"
          type="search"
          role="searchbox"
          autoComplete="off"
          className="h-11 w-full overflow-hidden rounded-full border border-solid pl-10 pr-3 focus:bg-gray-200 focus:outline-none text-[17px] font-semibold"
          placeholder="'Amazon Gift Card'"
          value={query}
          onChange={handleInputChange}
        />
      </div>
      {isSuggestionsVisible && (
        <ul className="absolute z-10 top-full w-full bg-white border border-gray-300 rounded-lg mt-2 max-h-60 overflow-y-auto">
          <div className='px-4 py-2 border-[1px] font-bold'>Search suggestions:</div>
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              className="px-4 py-2 cursor-pointer hover:bg-gray-200"
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Search;
