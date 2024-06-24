import React, { useState } from 'react';

export const categories = [
  { id: 1, name: 'Supermarket' },
  { id: 2, name: 'Fashion' },
  { id: 3, name: 'Health & Beauty' },
  { id: 4, name: 'Tech & Electronics' },
  { id: 5, name: 'Appliances' },
  { id: 6, name: 'Miscellenous' },
  { id: 7, name: 'Beauty' },
  { id: 8, name: 'Verified Vendors' },
  { id: 9, name: 'Service Providers' },
  { id: 10, name: 'Others' }
];

export const categoryChild = [
  { id: '1', name: 'Gaming', categoryId: '3' },
  { id: '2', name: 'Computing', categoryId: '3' },
  { id: '3', name: 'Phones & Gadgets', categoryId: '3' },
  { id: '4', name: 'Men', categoryId: '2' },
  { id: '5', name: 'Women', categoryId: '2' },
  { id: '6', name: 'All Fashion', categoryId: '2' },
  { id: '7', name: 'Small Appliances', categoryId: '5' },
  { id: '8', name: 'Large Appliances', categoryId: '5' },
  { id: '9', name: '' },
  { id: '10', name: '' },
  { id: '11', name: '' },
  { id: '12', name: 'Airtime', categoryId: '6' },
  { id: '13', name: 'Data', categoryId: '6' }
];

const DropdownComponent = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSubcategory, setSelectedSubcategory] = useState('');

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    setSelectedSubcategory('');
  };

  const handleSubcategoryChange = (event) => {
    setSelectedSubcategory(event.target.value);
  };

  const filteredSubcategories = categoryChild.filter(
    (child) => child.categoryId === selectedCategory
  );

  return (
    <div className="flex flex-col items-center mt-10">
      <div className="mb-4">
        <label htmlFor="category" className="block text-sm font-medium text-gray-700">
          Category
        </label>
        <select
          id="category"
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        >
          <option value="" disabled>Select a category</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="subcategory" className="block text-sm font-medium text-gray-700">
          Subcategory
        </label>
        <select
          id="subcategory"
          value={selectedSubcategory}
          onChange={handleSubcategoryChange}
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          disabled={!selectedCategory}
        >
          <option value="" disabled>Select a subcategory</option>
          {filteredSubcategories.map((subcategory) => (
            <option key={subcategory.id} value={subcategory.id}>
              {subcategory.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default DropdownComponent;
