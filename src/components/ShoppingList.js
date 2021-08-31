import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const categorizedItems = items.filter((item) => {
    if (selectedCategory !== "All")
    return item.category === selectedCategory;
    else
    return items;
  });

  function handleCategory(event){
    setSelectedCategory(event.target.value);
  }
  
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleCategory}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {categorizedItems.map((item) => (
      <Item key={item.id} name={item.name} category={item.category} />))}
      </ul>
    </div>
  );
}

export default ShoppingList;
