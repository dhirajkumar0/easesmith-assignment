import React from 'react';
import "./index.css"
import { useLocation } from 'react-router-dom';
import {  Link } from 'react-router-dom';


const ThankYouPage = () => {
  const location = useLocation();
  const { productName } = location.state || { productName: 'the product' };

  return (
    <div className="thank-you-page">
      <h1>Thank You for Your Interest in {productName}!</h1>
      <p>We're excited that you're interested in our products. Here’s what you can do next:</p>
      
      <div className="thank-you-actions">
        <section className="order-summary">
          <h2>Product Details</h2>
          <p><strong>{productName}</strong></p>
          <p>This product is known for its quality and durability. You can find more plants like this in our <Link to="/plants">Plants section</Link>.</p>
        </section>
        
        {/* <section className="recommendations">
          <h2>You May Also Like</h2>
          <div className="recommendations-list">
            <div className="recommendation-item">
              <img src="/path-to-image" alt="Recommended Product 1" />
              <p>Product Name 1</p>
              <Link to="/product/1">View Product</Link>
            </div>
            <div className="recommendation-item">
              <img src="/path-to-image" alt="Recommended Product 2" />
              <p>Product Name 2</p>
              <Link to="/product/2">View Product</Link>
            </div>
            
          </div>
        </section> */}

        <section className="next-steps m-10">
          
          <ul>
            <li><Link to="/cart">Go to Your Cart</Link> and review your selections.</li>
            <li><Link to="/"><button className='m-3 con_btn'>Continue Shopping</button></Link> <br/>and explore more products.</li>
            <li>Visit our <Link to="/faq">FAQ page</Link> if you have any questions.</li>
            
          </ul>
        </section>
      </div>

      <footer className="thank-you-footer">
        <p>Thank you for shopping with us! We hope you find the perfect plant for your home or garden.</p>
        <p>Need assistance? Contact us at <a href="mailto:support@ecommerce.com">support@ecommerce.com</a> or call 1-800-PLANTS.</p>
      </footer>
    </div>
  );
};

export default ThankYouPage;
