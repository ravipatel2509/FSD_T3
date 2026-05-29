import React from 'react';

const Header = () => {
  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', background: '#f4f4f4' }}>
      <div className="logo">
        <h1>MyBrand</h1>
      </div>
      <nav>
        <ul style={{ display: 'flex', listStyle: 'none', gap: '20px' }}>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <div className="actions">
        <button>Login</button>
      </div>
    </header>
  );
};

export default Header;
