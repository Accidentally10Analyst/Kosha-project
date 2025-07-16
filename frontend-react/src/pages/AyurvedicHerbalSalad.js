import React from 'react';
import './ProductPage.css';

const AyurvedicHerbalSalad = () => {
  return (
    <div className="product-container">
      <h2 className="product-title">Ayurvedic Herbal Salad</h2>
      <div className="product-row">
        <div className="product-image-container">
          <img
            src="https://plus.unsplash.com/premium_photo-1710408904453-51db30221110?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QXl1cnZlZGljJTIwSGVyYmFsJTIwU2FsYWR8ZW58MHx8MHx8fDA%3D"
            alt="Ayurvedic Herbal Salad"
            className="product-image"
          />
        </div>
        <div className="product-content" style={{ fontSize: '18px', fontFamily: 'Arial, sans-serif' }}>
          <p><strong>A Bowl of Balance</strong></p>
          <p>At Kosha Café, we believe food should do more than fill you — it should nourish, heal, and align with your body’s natural rhythm. That’s exactly what our Ayurvedic Herbal Salad is crafted to do.</p>
          <p>Rooted in the ancient principles of Ayurveda and enriched with modern nutritional wisdom, this salad is not just a side dish — it's a meal for your well-being.</p>
          <p><strong>What Makes It Ayurvedic?</strong></p>
          <p>Ayurveda teaches us that food should be fresh, seasonal, and sattvic — meaning pure, calming, and full of life energy. Our herbal salad follows this principle closely by combining tridoshic vegetables (good for all body types: Vata, Pitta, and Kapha) with digestive herbs and spices that enhance both flavor and function.</p>
          <p><strong>Key Ingredients</strong></p>
          <ul>
            <li>Leafy Greens (like spinach, moringa, or arugula): High in fiber, iron, and chlorophyll</li>
            <li>Cucumber & Carrot: Cooling and hydrating for Pitta balance</li>
            <li>Beetroot: Supports liver function and improves blood flow</li>
            <li>Herbs: Fresh coriander, mint, basil, tulsi — packed with antioxidants and digestive power</li>
            <li>Seeds & Nuts: Flaxseeds, sunflower seeds, or soaked almonds for healthy fats and grounding</li>
            <li>Lemon & Rock Salt Dressing: Alkalizing, detoxifying, and balances taste without processed additives</li>
            <li>Optional: A drizzle of cold-pressed sesame or olive oil, depending on your dosha</li>
          </ul>
          <p><strong>Why You Should Try It</strong></p>
          <p><strong>Balancing for All Doshas</strong><br/>
          Whether you’re fiery Pitta, airy Vata, or earthy Kapha — this salad is designed to be tridoshic, which means it supports everyone.</p>
          <p><strong>Improves Digestion</strong><br/>
          With digestive herbs like mint, coriander, and cumin, this salad won’t feel heavy on your stomach. It promotes agni (digestive fire) and helps prevent bloating or lethargy after eating.</p>
          <p><strong>Detox-Friendly</strong><br/>
          The natural greens, herbs, and citrus elements in the salad gently detoxify the liver and lymphatic system, leaving you feeling lighter and more energized.</p>
          <p><strong>Hydrating & Cooling</strong><br/>
          Especially beneficial in warmer months or after a heated workout or workday, it helps cool down your system from the inside out.</p>
          <p><strong>When to Eat It</strong></p>
          <p>Perfect as a midday lunch or early evening dinner</p>
          <p>Ideal before yoga, after a walk, or post-meditation</p>
          <p>Can be paired with warm herbal tea or a light soup</p>
          <p><strong>When to Avoid It</strong></p>
          <p>While raw foods have many benefits, in Ayurveda they are not ideal for everyone all the time. You may want to avoid this salad:</p>
          <ul>
            <li>If you have a very weak digestion (manda agni) or frequent bloating</li>
            <li>In cold weather, unless balanced with warming spices or slightly steamed</li>
            <li>If advised by a practitioner during a detox or imbalance-specific diet</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AyurvedicHerbalSalad;
