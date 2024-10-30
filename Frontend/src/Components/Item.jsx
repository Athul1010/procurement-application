import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Item = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({ itemName: '', inventoryLocation: '', brand: '', category: '', supplier: '', stockUnit: '', unitPrice: '', itemImages: [] });

  const fetchItems = async () => {
    const response = await axios.get('http://localhost:5000/items');
    setItems(response.data);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewItem({ ...newItem, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/items', newItem);
    fetchItems();
    setNewItem({ itemName: '', inventoryLocation: '', brand: '', category: '', supplier: '', stockUnit: '', unitPrice: '', itemImages: [] });
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div>
      <h2>Items</h2>
      <form onSubmit={handleSubmit}>
        <input name="itemName" placeholder="Item Name" value={newItem.itemName} onChange={handleInputChange} required />
        <input name="inventoryLocation" placeholder="Inventory Location" value={newItem.inventoryLocation} onChange={handleInputChange} />
        <input name="brand" placeholder="Brand" value={newItem.brand} onChange={handleInputChange} />
        <input name="category" placeholder="Category" value={newItem.category} onChange={handleInputChange} />
        <input name="supplier" placeholder="Supplier ID" value={newItem.supplier} onChange={handleInputChange} />
        <input name="stockUnit" placeholder="Stock Unit" value={newItem.stockUnit} onChange={handleInputChange} />
        <input name="unitPrice" placeholder="Unit Price" type="number" value={newItem.unitPrice} onChange={handleInputChange} />
        <button type="submit">Add Item</button>
      </form>
      <ul>
        {items.map((item) => (
          <li key={item._id}>{item.itemName} - {item.unitPrice}</li>
        ))}
      </ul>
    </div>
  );
};

export default Item;
