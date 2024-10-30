import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Supplier = () => {
  const [suppliers, setSuppliers] = useState([]);
  const [newSupplier, setNewSupplier] = useState({ name: '', address: '', taxNo: '', country: '', mobile: '', email: '', status: 'Active' });

  const fetchSuppliers = async () => {
    const response = await axios.get('http://localhost:5000/suppliers');
    setSuppliers(response.data);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewSupplier({ ...newSupplier, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/suppliers', newSupplier);
    fetchSuppliers();
    setNewSupplier({ name: '', address: '', taxNo: '', country: '', mobile: '', email: '', status: 'Active' });
  };

  useEffect(() => {
    fetchSuppliers();
  }, []);

  return (
    <div>
      <h2>Suppliers</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Supplier Name" value={newSupplier.name} onChange={handleInputChange} required />
        <input name="address" placeholder="Address" value={newSupplier.address} onChange={handleInputChange} />
        <input name="taxNo" placeholder="TAX No" value={newSupplier.taxNo} onChange={handleInputChange} />
        <input name="country" placeholder="Country" value={newSupplier.country} onChange={handleInputChange} />
        <input name="mobile" placeholder="Mobile No" value={newSupplier.mobile} onChange={handleInputChange} />
        <input name="email" placeholder="Email" type="email" value={newSupplier.email} onChange={handleInputChange} />
        <select name="status" value={newSupplier.status} onChange={handleInputChange}>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
          <option value="Blocked">Blocked</option>
        </select>
        <button type="submit">Add Supplier</button>
      </form>
      <ul>
        {suppliers.map((supplier) => (
          <li key={supplier._id}>{supplier.name} - {supplier.status}</li>
        ))}
      </ul>
    </div>
  );
};

export default Supplier;
