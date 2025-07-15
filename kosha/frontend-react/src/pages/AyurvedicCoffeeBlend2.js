import React from 'react';
import './ProductPage.css';

const AyurvedicCoffeeBlend2 = () => {
  return (
    <div className="product-container">
      <h2 className="product-title">PranaFuel Elixir</h2>
      <div className="product-row">
        <div className="product-image-container">
          <img
            src="https://images.unsplash.com/photo-1521677633993-721dd3f95c10?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzY29sbGVjdGlvbi1wYWdlfDN8MTY1MTA5NXx8ZW58MHx8fHw%3D"
            alt="PranaFuel Elixir"
            className="product-image"
          />
        </div>
        <div className="product-content">
          <p><strong>Your Daily Dose of Vitality</strong></p>
          <p><strong>What It Is:</strong><br/>
          PranaFuel Elixir is a wellness-focused coffee blend that helps boost your energy levels, support immunity, and reduce stress, all while keeping your digestion in check.</p>
          <p><strong>What’s Inside:</strong></p>
          <ul>
            <li>Ashwagandha – an adaptogen that helps your body cope with stress</li>
            <li>Tulsi (Holy Basil) – known for its immune-boosting and respiratory benefits</li>
            <li>Ginger & Cardamom – great for digestion and warmth</li>
            <li>Trikatu – improves metabolism and nutrient absorption</li>
          </ul>
          <p><strong>What It Does:</strong></p>
          <ul>
            <li>Provides natural, sustainable energy</li>
            <li>Helps your body adapt to stress</li>
            <li>Promotes gut health</li>
            <li>Supports your immune system</li>
          </ul>
          <p><strong>When to Take:</strong><br/>
          Best in the morning or mid-morning — especially when you need a natural energy lift without the crash.</p>
          <p>Enjoy a flavorful coffee experience that supports your well-being.</p>
        </div>
      </div>
    </div>
  );
};

export default AyurvedicCoffeeBlend2;
