import React from 'react';
import './ProductPage.css';

const AyurvedicCoffeeBlend1 = () => {
  return (
    <div className="product-container">
      <h2 className="product-title">NeuroBloom Brew</h2>
      <div className="product-row">
        <div className="product-image-container">
          <img
            src="https://media.istockphoto.com/id/2162624995/photo/beautiful-morning-lavender-speciality-coffeer-mug.webp?a=1&b=1&s=612x612&w=0&k=20&c=mwEIM-xYRokuXq69JMxqpFW37_2uF0yyVD1hOBif9uQ="
            alt="NeuroBloom Brew"
            className="product-image"
          />
        </div>
        <div className="product-content">
          <p><strong>Clarity. Calm. Concentration.</strong></p>
          <p><strong>What It Is:</strong><br/>
          NeuroBloom Brew is specially made for focus, brain health, and mental clarity. It combines coffee with herbs that support the nervous system and enhance cognitive function.</p>
          <p><strong>What’s Inside:</strong></p>
          <ul>
            <li>Brahmi & Gotu Kola – known to improve memory and concentration</li>
            <li>Shankhpushpi – helps calm the mind and support mental health</li>
            <li>Vacha & Jatamansi – traditionally used to balance the nervous system</li>
            <li>Rose petals – soothe emotional stress and bring gentle calm</li>
          </ul>
          <p><strong>What It Does:</strong></p>
          <ul>
            <li>Improves focus and memory</li>
            <li>Calms mental stress</li>
            <li>Supports long-term brain health</li>
            <li>Offers smoother energy without jitters</li>
          </ul>
          <p><strong>When to Take:</strong><br/>
          Ideal during work or study sessions, especially mid-morning or afternoon when you need clear thinking and calm focus.</p>
          <p>Experience the perfect balance of flavor and wellness in every cup.</p>
        </div>
      </div>
    </div>
  );
};

export default AyurvedicCoffeeBlend1;
