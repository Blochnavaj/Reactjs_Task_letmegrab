 // File: src/pages/Products.jsx
import React, { useState, useEffect } from 'react';
import { assets } from '../assets/data';

const initialProducts = [
  {
    id: 1,
    title: 'Product One',
    price: 29.99,
    description: 'Description of Product One',
    category: 'Books',
    image: assets.coffee  
  },
  {
    id: 1,
    title: 'Product two',
    price: 29.99,
    description: 'Description of Product One',
    category: 'Books',
    image: assets.coffee8 
  },
  {
    id: 1,
    title: 'Product three',
    price: 29.99,
    description: 'Description of Product One',
    category: 'Books',
    image: assets.coffee7 
  },
  {
    id: 1,
    title: 'Product four',
    price: 29.99,
    description: 'Description of Product One',
    category: 'Books',
    image: assets.coffee_new2 
  },
  {
    id: 1,
    title: 'Product five',
    price: 29.99,
    description: 'Description of Product One',
    category: 'Books',
    image: assets.coffee_new 
  },
  {
    id: 2,
    title: 'Product six',
    price: 49.99,
    description: 'Description of Product Two',
    category: 'Electronics',
    image: assets.coffee4
  }
];

const Products = () => {
  const [products, setProducts] = useState(initialProducts);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');
  const [viewProduct, setViewProduct] = useState(null);

  const handleDelete = (id) => {
    const updated = products.filter(p => p.id !== id);
    setProducts(updated);
    console.log('Deleted Product ID:', id);
  };

  const handleUpdate = (product) => {
    alert(`Updated Product: ${JSON.stringify(product, null, 2)}`);
  };

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = filter === 'All' || product.category === filter;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="mt-24 px-4">
      <h1 className="text-2xl font-bold mb-4">Product Management</h1>

      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Search products..."
          className="border p-2 w-full md:w-1/2"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border p-2 md:w-1/4"
        >
          <option value="All">All Categories</option>
          <option value="Books">Books</option>
          <option value="Electronics">Electronics</option>
        </select>
      </div>

      {/* Product Table */}
      <table className="min-w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2">Image</th>
            <th className="border px-4 py-2">Title</th>
            <th className="border px-4 py-2">Price</th>
            <th className="border px-4 py-2">Description</th>
            <th className="border px-4 py-2">Category</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((product) => (
            <tr key={product.id}>
              <td className="border px-4 py-2">
                <img src={product.image} alt={product.title} className="w-16 h-16 object-cover" />
              </td>
              <td className="border px-4 py-2">{product.title}</td>
              <td className="border px-4 py-2">${product.price}</td>
              <td className="border px-4 py-2">{product.description}</td>
              <td className="border px-4 py-2">{product.category}</td>
              <td className="border px-4 py-2 space-x-2">
                <button
                  onClick={() => setViewProduct(product)}
                  className="text-blue-500 underline"
                >View</button>
                <button
                  onClick={() => handleUpdate(product)}
                  className="text-yellow-600 underline"
                >Update</button>
                <button
                  onClick={() => handleDelete(product.id)}
                  className="text-red-600 underline"
                >Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* View Product Modal */}
      {viewProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
            <h2 className="text-xl font-bold mb-2">{viewProduct.title}</h2>
            <img src={viewProduct.image} alt={viewProduct.title} className="w-32 h-32 object-cover mb-4" />
            <p><strong>Price:</strong> ${viewProduct.price}</p>
            <p><strong>Description:</strong> {viewProduct.description}</p>
            <p><strong>Category:</strong> {viewProduct.category}</p>
            <button
              onClick={() => setViewProduct(null)}
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
            >Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
