import React, { useState } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline'

export const categories = [
    { id: 1, name: 'Sell on momo' },
    { id: 2, name: 'Buy on momo' },
    { id: 3, name: 'Locations' },
    { id: 4, name: 'About Us' },
    { id: 5, name: 'Resources & Links' }
  ];
  
  export const subcategories = [
    { id: '1', name: 'For a verified store', categoryId: '1' },
    { id: '2', name: 'For official stores', categoryId: '1' },
    { id: '3', name: 'As a guest', categoryId: '2' },
    { id: '4', name: 'As a verified user', categoryId: '2' },
    { id: '5', name: 'Location 1', categoryId: '3' },
    { id: '6', name: 'Location 2', categoryId: '3' },
    { id: '7', name: 'Location 3', categoryId: '3' },
    { id: '8', name: 'Legals', categoryId: '4' },
    { id: '9', name: 'About-us', categoryId: '4' },
    { id: '10', name: 'Help-Center', categoryId: '5' },
    { id: '11', name: 'Support', categoryId: '5' },
    { id: '12', name: 'Socials', categoryId: '5' }
  ];  

  export const coItems = [
  
    { id: '14', name: 'one', subcategoryId: '5' },
    { id: '15', name: 'two', subcategoryId: '5' },
    { id: '16', name: 'three', subcategoryId: '6' },
    { id: '17', name: 'four', subcategoryId: '6' },
    { id: '18', name: 'Others', subcategoryId: '6' },
  
    // Clothing & Accessories
    { id: '19', name: 'five', subcategoryId: '7' },
    { id: '20', name: 'six', subcategoryId: '7' },
    { id: '21', name: 'seven', subcategoryId: '7' },
  
    // Food & Beverages
    { id: '34', name: 'Facebook', subcategoryId: '12' },
    { id: '35', name: 'Twitter', subcategoryId: '12' },
    { id: '36', name: 'Youtube', subcategoryId: '12' },
    { id: '37', name: 'Instagram', subcategoryId: '12' },
    { id: '37', name: 'Whatsapp', subcategoryId: '12' },
  ];  

  const SubNavbarLarge = () => {
    const [activeCategoryId, setActiveCategoryId] = useState(null);
  
    const handleCategoryClick = (categoryId) => {
      setActiveCategoryId(categoryId);
    };
  
    const handleCategoryClose = () => {
      setActiveCategoryId(null);
    };
  
    const filteredSubcategories = subcategories.filter(
      (child) => child.categoryId === activeCategoryId
    );
  
    return (
      <div className="flex flex-col items-center">
        <div className="relative">
          <ul className="flex lg:space-x-4 overflow-x-auto">
            {categories.map((category) => (
              <li key={category.id} className="relative flex-shrink-0">
                <button
                  onClick={() => handleCategoryClick(category.id.toString())}
                  className="px-4 py-2 rounded-md hover:font-bold"
                >
                  {category.name}
                </button>
                {activeCategoryId === category.id.toString() && filteredSubcategories.length > 0 && (
                  <ul
                    className="fixed w-screen px-2 sm:px-8 py-5 lg:px-32 bg-white border border-gray-200 rounded-md shadow-lg z-10 dropdown-menu"
                    style={{
                      top: `${category.offsetTop + category.offsetHeight}px`,
                      left: 0,
                    }}
                  >
                    
                    <button
                      onClick={handleCategoryClose}
                      className="px-1 py-[2px] text-gray-600 hover:text-gray-900 bg-slate-300 rounded-lg fixed right-20 mt-3"
                    >
                      <XMarkIcon className="h-6 w-5" />
                    </button>
                        <div className='flex flex-row flex-wrap gap-3 justify-around'>
                    {filteredSubcategories.map((subcategory) => {
                      const coItemsForSubcategory = coItems.filter(
                        (item) => item.subcategoryId === subcategory.id
                      );
                      return (
                        <li key={subcategory.id} className="relative px-4 py-2">
                          <span className='font-semibold'>{subcategory.name}</span>
                          <hr />
                          {coItemsForSubcategory.length > 0 && (
                            <ul className="">
                              {coItemsForSubcategory.map((item) => (
                                <li key={item.id} className="px-4 py-2 hover:font-bold cursor-pointer">
                                  {item.name}
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      );
                    })}
                        </div>
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };
  
  export default SubNavbarLarge;