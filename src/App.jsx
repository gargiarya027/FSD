import React, { useState } from 'react';
import productsData from './assets/product.json';
import './App.css';

const Header = () => <header className="header">My Store</header>;

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search product..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};


const Product = ({ products }) => {
  return (
    <div className="product-list">
      {products.length > 0 ? (
        products.map((item) => (
          <div key={item.id} className="product-card">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>{item.price}</p>
          </div>
        ))
      ) : (
        <p>No products found.</p>
      )}
    </div>
  );
};

const Footer = () => <footer className="footer">© 2025 My Store</footer>;

const App = () => {
  const [products, setProducts] = useState(productsData);

  const handleSearch = (query) => {
    const filtered = productsData.filter((p) =>
      p.name.toLowerCase().includes(query.toLowerCase())
    );
    setProducts(filtered);
  };

  return (
    <div className="app">
      <Header />
      <Search onSearch={handleSearch} />
      <Product products={products} />
      <Footer />
    </div>
  );
};

export default App;
