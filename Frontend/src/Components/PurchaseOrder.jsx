import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PurchaseOrder = () => {
  const [purchaseOrders, setPurchaseOrders] = useState([]);
  const [newOrder, setNewOrder] = useState({ supplier: '', items: [], itemTotal: 0, discountTotal: 0, netAmount: 0 });

  const fetchPurchaseOrders = async () => {
    const response = await axios.get('http://localhost:5000/purchase-orders');
    setPurchaseOrders(response.data);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewOrder({ ...newOrder, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/purchase-orders', newOrder);
    fetchPurchaseOrders();
    setNewOrder({ supplier: '', items: [], itemTotal: 0, discountTotal: 0, netAmount: 0 });
  };

  useEffect(() => {
    fetchPurchaseOrders();
  }, []);

  return (
    <div>
      <h2>Purchase Orders</h2>
      <form onSubmit={handleSubmit}>
        <input name="supplier" placeholder="Supplier ID" value={newOrder.supplier} onChange={handleInputChange} required />
        <input name="itemTotal" placeholder="Item Total" type="number" value={newOrder.itemTotal} onChange={handleInputChange} />
        <input name="discountTotal" placeholder="Discount Total" type="number" value={newOrder.discountTotal} onChange={handleInputChange} />
        <input name="netAmount" placeholder="Net Amount" type="number" value={newOrder.netAmount} onChange={handleInputChange} />
        <button type="submit">Add Purchase Order</button>
      </form>
      <ul>
        {purchaseOrders.map((order) => (
          <li key={order._id}>Order No: {order.orderNo} - Supplier: {order.supplier}</li>
        ))}
      </ul>
    </div>
  );
};

export default PurchaseOrder;
