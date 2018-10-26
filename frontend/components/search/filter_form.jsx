import React from 'react';

const handleChange = (filter, updateFilter) => (e) => {
  console.log();
  updateFilter(filter, e.target.value);
};

const FilterForm = ({ length, animal, category, color, updateFilter }) => (
  <div>

    <span className="filter">Filter results: {length}</span>
      <br/>
      <label>Animal:</label>
      <br/>
      <select value={animal} onChange={handleChange('animal', updateFilter)}>
        <option value="">Select an animal</option>
        <option value="dog">Dog</option>
        <option value="cat">Cat</option>
      </select>
    <br/>
    <label>Category:</label>
    <br/>
    <select value={category} onChange={handleChange('category', updateFilter)}>
      <option value="">Select an category</option>
      <option value="toy">Toy</option>
      <option value="grooming">Grooming</option>
      <option value="food">Food</option>
      <option value="accessory">Accessory</option>
    </select>
     <br/>
    <label>Color:</label>
    <br/>
      <select value={color} onChange={handleChange('color', updateFilter)}>
        <option value="">Select an color</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
        <option value="yellow">Yellow</option>
        <option value="orange">Orange</option>
        <option value="black">black</option>
      </select>
  </div>
);

export default FilterForm;
