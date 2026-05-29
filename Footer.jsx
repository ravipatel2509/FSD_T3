import React from 'react';

const Footer = () => {
  return (
    <footer style={{ padding: '20px', textAlign: 'center', backgroundColor: '#f1f1f1' }}>
      <p>&copy; {new Date().getFullYear()} Your Brand Name. All rights reserved.</p>
      <ul style={{ listStyle: 'none', display: 'flex', justifyContent: 'center', gap: '15px' }}>
        <li><a href="/about">About Us</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/privacy">Privacy Policy</a></li>
      </ul>
    </footer>
  );
};

export default Footer;
