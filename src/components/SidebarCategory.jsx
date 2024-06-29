import React, { useState } from 'react';

export const categories = [
    { id: 1, name: 'Books & Stationery' },
    { id: 2, name: 'Electronics & Gadgets' },
    { id: 3, name: 'Clothing & Accessories' },
    { id: 4, name: 'Health & Wellness' },
    { id: 5, name: 'Food & Beverages' },
    { id: 6, name: 'Services' },
    { id: 7, name: 'Miscellaneous' }
  ];
  
  export const subcategories = [
    { id: '1', name: 'Textbooks', categoryId: '1' },
    { id: '2', name: 'Notebooks & Journals', categoryId: '1' },
    { id: '3', name: 'Writing Instruments', categoryId: '1' },
    { id: '4', name: 'Laptops & Tablets', categoryId: '2' },
    { id: '5', name: 'Smartphones', categoryId: '2' },
    { id: '6', name: 'Accessories', categoryId: '2' },
    { id: '7', name: 'Casual Wear', categoryId: '3' },
    { id: '8', name: 'Formal Wear', categoryId: '3' },
    { id: '9', name: 'Footwear', categoryId: '3' },
    { id: '10', name: 'Fitness Equipment', categoryId: '4' },
    { id: '11', name: 'Personal Care', categoryId: '4' },
    { id: '12', name: 'Snacks', categoryId: '5' },
    { id: '13', name: 'Beverages', categoryId: '5' },
    { id: '14', name: 'Supermarket', categoryId: '5' },
    { id: '15', name: 'Tutoring', categoryId: '6' },
    { id: '16', name: 'Career Services', categoryId: '6' },
    { id: '17', name: 'Health Services', categoryId: '6' },
    { id: '18', name: 'Dorm Essentials', categoryId: '7' },
    { id: '19', name: 'Transportation', categoryId: '7' },
    { id: '20', name: 'Entertainment', categoryId: '7' }
  ];  

  export const coItems = [
    // Books & Stationery
    { id: '1', name: 'Science', subcategoryId: '1' },
    { id: '2', name: 'Mathematics', subcategoryId: '1' },
    { id: '3', name: 'Literature', subcategoryId: '1' },
    { id: '4', name: 'History', subcategoryId: '1' },
    { id: '5', name: 'Spiral Notebooks', subcategoryId: '2' },
    { id: '6', name: 'Composition Notebooks', subcategoryId: '2' },
    { id: '7', name: 'Planners', subcategoryId: '2' },
    { id: '8', name: 'Pens', subcategoryId: '3' },
    { id: '9', name: 'Pencils', subcategoryId: '3' },
    { id: '10', name: 'Markers', subcategoryId: '3' },
  
    // Electronics & Gadgets
    { id: '11', name: 'Windows Laptops', subcategoryId: '4' },
    { id: '12', name: 'MacBooks', subcategoryId: '4' },
    { id: '13', name: 'Tablets', subcategoryId: '4' },
    { id: '14', name: 'Android Phones', subcategoryId: '5' },
    { id: '15', name: 'iPhones', subcategoryId: '5' },
    { id: '16', name: 'Headphones', subcategoryId: '6' },
    { id: '17', name: 'Chargers', subcategoryId: '6' },
    { id: '18', name: 'USB Drives', subcategoryId: '6' },
  
    // Clothing & Accessories
    { id: '19', name: 'T-Shirts', subcategoryId: '7' },
    { id: '20', name: 'Jeans', subcategoryId: '7' },
    { id: '21', name: 'Hoodies', subcategoryId: '7' },
    { id: '22', name: 'Dress Shirts', subcategoryId: '8' },
    { id: '23', name: 'Blazers', subcategoryId: '8' },
    { id: '24', name: 'Trousers', subcategoryId: '8' },
    { id: '25', name: 'Sneakers', subcategoryId: '9' },
    { id: '26', name: 'Sandals', subcategoryId: '9' },
    { id: '27', name: 'Formal Shoes', subcategoryId: '9' },
  
    // Health & Wellness
    { id: '28', name: 'Yoga Mats', subcategoryId: '10' },
    { id: '29', name: 'Dumbbells', subcategoryId: '10' },
    { id: '30', name: 'Resistance Bands', subcategoryId: '10' },
    { id: '31', name: 'Skincare', subcategoryId: '11' },
    { id: '32', name: 'Haircare', subcategoryId: '11' },
    { id: '33', name: 'Hygiene Products', subcategoryId: '11' },
  
    // Food & Beverages
    { id: '34', name: 'Chips', subcategoryId: '12' },
    { id: '35', name: 'Cookies', subcategoryId: '12' },
    { id: '36', name: 'Nuts', subcategoryId: '12' },
    { id: '37', name: 'Coffee', subcategoryId: '13' },
    { id: '38', name: 'Tea', subcategoryId: '13' },
    { id: '39', name: 'Energy Drinks', subcategoryId: '13' },
    { id: '40', name: 'Instant Noodles', subcategoryId: '14' },
    { id: '41', name: 'Canned Foods', subcategoryId: '14' },
    { id: '42', name: 'Ready-to-Eat Meals', subcategoryId: '14' },
  
    // Services
    { id: '43', name: 'Math Tutors', subcategoryId: '15' },
    { id: '44', name: 'Science Tutors', subcategoryId: '15' },
    { id: '45', name: 'Language Tutors', subcategoryId: '15' },
    { id: '46', name: 'Resume Building', subcategoryId: '16' },
    { id: '47', name: 'Interview Coaching', subcategoryId: '16' },
    { id: '48', name: 'Counseling', subcategoryId: '17' },
    { id: '49', name: 'Medical Consultations', subcategoryId: '17' },
  
    // Miscellaneous
    { id: '50', name: 'Bedding', subcategoryId: '18' },
    { id: '51', name: 'Kitchen Supplies', subcategoryId: '18' },
    { id: '52', name: 'Cleaning Supplies', subcategoryId: '18' },
    { id: '53', name: 'Bicycles', subcategoryId: '19' },
    { id: '54', name: 'Skateboards', subcategoryId: '19' },
    { id: '55', name: 'Video Games', subcategoryId: '20' },
    { id: '56', name: 'Board Games', subcategoryId: '20' }
  ];  

  const SidebarCategory = () => {
    const [hoveredCategory, setHoveredCategory] = useState(null);

    const handleCategoryMouseEnter = (categoryId) => {
      setHoveredCategory(categoryId);
    };
  
    const handleMouseLeave = () => {
      setHoveredCategory(null);
    };
  
    const filteredSubcategories = subcategories.filter(
      (child) => child.categoryId === hoveredCategory
    );
  
    return (
      <div className="flex flex-col items-center" onMouseLeave={handleMouseLeave}>
        <div className="relative border-[1px] rounded-lg mt-5">
          <ul className="flex flex-col">
            {categories.map((category) => (
                <>
              <li
                key={category.id}
                onMouseEnter={() => handleCategoryMouseEnter(category.id.toString())}
                className="relative cursor-pointer px-4 py-2"
              >
               <span className='hover:text-[#635ef7]'>{category.name}</span>
                {hoveredCategory === category.id.toString() && filteredSubcategories.length > 0 && (
                  <ul className="absolute left-[196px] -top-2 mt-2 min-w-[468px] bg-white border border-gray-200 rounded-md shadow-lg z-10 grid grid-cols-2 gap-3">
                    {filteredSubcategories.map((subcategory) => {
                      const coItemsForSubcategory = coItems.filter(
                        (item) => item.subcategoryId === subcategory.id
                      );
                      return (
                        <li
                          key={subcategory.id}
                          className="relative px-4 py-2"
                        >
                          {subcategory.name}
                          <hr />
                          {coItemsForSubcategory.length > 0 && (
                            <ul className="">
                              {coItemsForSubcategory.map((item) => (
                                <li
                                  key={item.id}
                                  className="px-4 py-2 hover:font-bold cursor-pointer"
                                >
                                  {item.name}
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                )}
              </li>
              </>
            ))}
          </ul>
        </div>
        <div className='relative border-[1px] rounded-lg mt-5 px-6 py-2 text-[14px] block text-center'>
          <div className='relative'>&copy; 2024 Momo Mini-marketplace,</div>
          <span>by <a href='https://www.wynx.vercel.app' className='hover:text-blue-700'>wynx softwares llc</a></span>
          <ul className='flex flex-row flex-wrap gap-1 items-center'>
            <li className='hover:underline'>About</li>
            <span className='bg-gray-400 p-[2px] rounded-full h-[2px]'></span>
            <li className='hover:underline'>Legal</li>
            <span className='bg-gray-400 p-[2px] rounded-full h-[2px]'></span>
            <li className='hover:underline'>Advertise</li>
          </ul>
        </div>
      </div>
    );
  };
  
  export default SidebarCategory;