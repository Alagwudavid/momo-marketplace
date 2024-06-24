import React, { useState } from 'react';

export const categories = [
  { id: 1, name: 'Supermarket' },
  { id: 2, name: 'Fashion' },
  { id: 3, name: 'Health & Beauty' },
  { id: 4, name: 'Tech & Electronics' },
  { id: 5, name: 'Appliances' },
  { id: 6, name: 'Miscellaneous' },
  { id: 7, name: 'Beauty' },
  { id: 8, name: 'Verified Vendors' },
  { id: 9, name: 'Service Providers' },
  { id: 10, name: 'Others' }
];

export const subcategories = [
  { id: '1', name: 'Gaming', categoryId: '3' },
  { id: '2', name: 'Computing', categoryId: '3' },
  { id: '3', name: 'Phones & Gadgets', categoryId: '3' },
  { id: '4', name: 'Men', categoryId: '2' },
  { id: '5', name: 'Women', categoryId: '2' },
  { id: '6', name: 'All Fashion', categoryId: '2' },
  { id: '7', name: 'Small Appliances', categoryId: '5' },
  { id: '8', name: 'Large Appliances', categoryId: '5' },
  { id: '9', name: 'Airtime', categoryId: '6' },
  { id: '10', name: 'Data', categoryId: '6' }
];

export const coItems = [
    { id: '1', name: 'Playstation', subcategoryId: '1' },
    { id: '2', name: 'Xbox', subcategoryId: '1' },
    { id: '3', name: 'Laptops', subcategoryId: '2' },
    { id: '4', name: 'Desktops', subcategoryId: '2' },
    { id: '5', name: 'Smartphones', subcategoryId: '3' },
    { id: '6', name: 'Tablets', subcategoryId: '3' },
    { id: '7', name: 'Shirts', subcategoryId: '4' },
    { id: '8', name: 'Pants', subcategoryId: '4' },
    { id: '9', name: 'Dresses', subcategoryId: '5' },
    { id: '10', name: 'Skirts', subcategoryId: '5' },
    { id: '11', name: 'Gaming Accessories', subcategoryId: '1' },
    { id: '12', name: 'Computer Accessories', subcategoryId: '2' },
    { id: '13', name: 'Phone Accessories', subcategoryId: '3' },
    { id: '14', name: 'Men\'s Shoes', subcategoryId: '4' },
    { id: '15', name: 'Women\'s Shoes', subcategoryId: '5' },
    { id: '16', name: 'Refrigerators', subcategoryId: '7' },
    { id: '17', name: 'Washing Machines', subcategoryId: '8' },
    { id: '18', name: 'Microwaves', subcategoryId: '7' },
    { id: '19', name: 'Air Conditioners', subcategoryId: '8' },
    { id: '20', name: 'Face Care', subcategoryId: '6' },
    { id: '21', name: 'Body Care', subcategoryId: '6' },
    { id: '22', name: 'Hair Care', subcategoryId: '6' },
    { id: '23', name: 'Fitness Equipment', subcategoryId: '7' },
    { id: '24', name: 'Vitamins & Supplements', subcategoryId: '7' },
    { id: '25', name: 'TVs', subcategoryId: '8' },
    { id: '26', name: 'Audio Systems', subcategoryId: '8' },
    { id: '27', name: 'Kitchen Appliances', subcategoryId: '7' },
    { id: '28', name: 'Vacuum Cleaners', subcategoryId: '8' },
    { id: '29', name: 'Toys & Games', subcategoryId: '1' },
    { id: '30', name: 'Office Supplies', subcategoryId: '2' }
  ];  

  const CategoryComponent = () => {
    const [hoveredCategory, setHoveredCategory] = useState(null);
    const [hoveredSubcategory, setHoveredSubcategory] = useState(null);
  
    const handleCategoryMouseEnter = (categoryId) => {
      setHoveredCategory(categoryId);
      setHoveredSubcategory(null);
    };
  
    const handleSubcategoryMouseEnter = (subcategoryId) => {
      setHoveredSubcategory(subcategoryId);
    };
  
    const handleMouseLeave = () => {
      setHoveredCategory(null);
      setHoveredSubcategory(null);
    };
  
    const filteredSubcategories = subcategories.filter(
      (child) => child.categoryId === hoveredCategory
    );
  
    const filteredCoItems = coItems.filter(
      (item) => item.subcategoryId === hoveredSubcategory
    );
  
    return (
      <div className="flex flex-col items-center" onMouseLeave={handleMouseLeave}>
        <div className="relative">
          <ul className="flex space-x-4">
            {categories.map((category) => (
              <li
                key={category.id}
                onMouseEnter={() => handleCategoryMouseEnter(category.id.toString())}
                className="relative cursor-pointer px-4 py-2 rounded-md hover:bg-gray-200"
              >
                {category.name}
                {hoveredCategory === category.id.toString() && filteredSubcategories.length > 0 && (
                  <ul className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                    {filteredSubcategories.map((subcategory) => (
                      <li
                        key={subcategory.id}
                        onMouseEnter={() => handleSubcategoryMouseEnter(subcategory.id.toString())}
                        className="relative px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      >
                        {subcategory.name}
                        {hoveredSubcategory === subcategory.id.toString() && filteredCoItems.length > 0 && (
                          <ul className="absolute left-full top-0 mt-0 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-20">
                            {filteredCoItems.map((item) => (
                              <li
                                key={item.id}
                                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                              >
                                {item.name}
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };
  
  export default CategoryComponent;