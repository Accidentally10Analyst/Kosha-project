import React, { useState } from 'react';

const drinks = [
  { id: 1, name: 'Ashwagandha Latte', description: 'Creamy latte infused with Ashwagandha for stress relief.', price: 350, image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93' },
  { id: 2, name: 'Tulsi Cappuccino', description: 'Classic cappuccino with a hint of Tulsi for immunity.', price: 320, image: 'https://images.unsplash.com/photo-1528825871115-3581a5387919' },
  { id: 3, name: 'Turmeric Espresso', description: 'Bold espresso with turmeric for anti-inflammatory benefits.', price: 300, image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836' },
  { id: 4, name: 'Brahmi Mocha', description: 'Rich mocha with Brahmi extract for mental clarity.', price: 360, image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348' },
  { id: 5, name: 'Mulethi Macchiato', description: 'Sweet macchiato with Mulethi for digestive health.', price: 340, image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93' },
  { id: 6, name: 'Saffron Flat White', description: 'Smooth flat white infused with saffron for vitality.', price: 370, image: 'https://images.unsplash.com/photo-1528825871115-3581a5387919' },
  { id: 7, name: 'Cardamom Cold Brew', description: 'Refreshing cold brew with cardamom spice.', price: 330, image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836' },
  { id: 8, name: 'Ginger Espresso', description: 'Spicy espresso with ginger for warmth and energy.', price: 310, image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348' },
  { id: 9, name: 'Tulsi Americano', description: 'Classic Americano with a hint of Tulsi.', price: 300, image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93' },
  { id: 10, name: 'Ashwagandha Iced Latte', description: 'Iced latte with Ashwagandha for relaxation.', price: 350, image: 'https://images.unsplash.com/photo-1528825871115-3581a5387919' },
  { id: 11, name: 'Turmeric Chai Latte', description: 'Spiced chai latte with turmeric for immunity.', price: 320, image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836' },
  { id: 12, name: 'Brahmi Brew', description: 'Herbal brew with Brahmi for focus and calm.', price: 300, image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348' },
  { id: 13, name: 'Mulethi Mocha', description: 'Mocha with Mulethi for a sweet herbal twist.', price: 360, image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93' },
  { id: 14, name: 'Saffron Latte', description: 'Creamy latte infused with saffron for wellness.', price: 370, image: 'https://images.unsplash.com/photo-1528825871115-3581a5387919' },
  { id: 15, name: 'Cardamom Cappuccino', description: 'Cappuccino with cardamom spice for flavor.', price: 330, image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836' },
  // ... add more drinks to reach 50+
];

const food = [
  { id: 101, name: 'Herbal Energy Bar', description: 'Nutritious bar with Ayurvedic herbs and nuts.', price: 150, image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb' },
  { id: 102, name: 'Spiced Quinoa Salad', description: 'Fresh quinoa salad with Ayurvedic spices.', price: 200, image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836' },
  { id: 103, name: 'Ayurvedic Chai Cake', description: 'Moist cake infused with traditional chai spices.', price: 180, image: 'https://images.unsplash.com/photo-1542831371-d531d36971e6' },
  { id: 104, name: 'Turmeric Hummus Wrap', description: 'Wrap with turmeric-spiced hummus and fresh veggies.', price: 220, image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836' },
  { id: 105, name: 'Ashwagandha Smoothie Bowl', description: 'Smoothie bowl with Ashwagandha and fresh fruits.', price: 250, image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb' },
  { id: 106, name: 'Brahmi Lentil Soup', description: 'Hearty lentil soup infused with Brahmi.', price: 180, image: 'https://images.unsplash.com/photo-1542831371-d531d36971e6' },
  { id: 107, name: 'Tulsi Veggie Stir Fry', description: 'Stir fry with fresh veggies and Tulsi.', price: 210, image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836' },
  { id: 108, name: 'Mulethi Granola', description: 'Crunchy granola with Mulethi and nuts.', price: 190, image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb' },
  { id: 109, name: 'Saffron Rice Pudding', description: 'Creamy rice pudding with saffron.', price: 200, image: 'https://images.unsplash.com/photo-1542831371-d531d36971e6' },
  { id: 110, name: 'Cardamom Fruit Tart', description: 'Fruit tart with cardamom-spiced crust.', price: 230, image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836' },
  { id: 111, name: 'Ginger Carrot Soup', description: 'Warm soup with ginger and carrots.', price: 180, image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb' },
  { id: 112, name: 'Ayurvedic Energy Balls', description: 'Bite-sized energy balls with herbs.', price: 160, image: 'https://images.unsplash.com/photo-1542831371-d531d36971e6' },
  { id: 113, name: 'Tulsi Chia Pudding', description: 'Chia pudding infused with Tulsi.', price: 190, image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836' },
  { id: 114, name: 'Ashwagandha Oatmeal', description: 'Oatmeal with Ashwagandha and nuts.', price: 210, image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb' },
  { id: 115, name: 'Brahmi Veggie Wrap', description: 'Veggie wrap with Brahmi-spiced hummus.', price: 220, image: 'https://images.unsplash.com/photo-1542831371-d531d36971e6' },
  // ... add more food items
];

const merchandise = [
  { id: 201, name: 'Kosha Coffee Mug', description: 'Elegant mug with Kosha branding.', price: 500, image: 'https://images.unsplash.com/photo-1517686469429-8bdbf3a7a1a1' },
  { id: 202, name: 'Ayurvedic Coffee Beans Pack', description: 'Specialty grade coffee beans with Ayurvedic herbs.', price: 1200, image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93' },
  { id: 203, name: 'Kosha Tote Bag', description: 'Eco-friendly tote bag with Kosha logo.', price: 350, image: 'https://images.unsplash.com/photo-1517686469429-8bdbf3a7a1a1' },
  { id: 204, name: 'Herbal Tea Set', description: 'Assorted herbal teas for wellness.', price: 800, image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93' },
  { id: 205, name: 'Coffee Grinder', description: 'Manual coffee grinder for fresh brews.', price: 1500, image: 'https://images.unsplash.com/photo-1517686469429-8bdbf3a7a1a1' },
  { id: 206, name: 'Ceramic Coffee Dripper', description: 'Elegant ceramic dripper for pour-over coffee.', price: 1200, image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93' },
  { id: 207, name: 'Kosha Mug Warmer', description: 'Keep your coffee warm with this mug warmer.', price: 900, image: 'https://images.unsplash.com/photo-1517686469429-8bdbf3a7a1a1' },
  { id: 208, name: 'Reusable Coffee Straws', description: 'Eco-friendly reusable straws.', price: 300, image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93' },
  { id: 209, name: 'Coffee Scoop', description: 'Precision coffee scoop for perfect measurements.', price: 250, image: 'https://images.unsplash.com/photo-1517686469429-8bdbf3a7a1a1' },
  { id: 210, name: 'Kosha Coffee Beans Gift Box', description: 'Gift box with assorted Ayurvedic coffee beans.', price: 2500, image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93' },
  { id: 211, name: 'Espresso Machine', description: 'Compact espresso machine for home use.', price: 15000, image: 'https://images.unsplash.com/photo-1517686469429-8bdbf3a7a1a1' },
  { id: 212, name: 'Coffee Thermos', description: 'Insulated thermos for hot coffee on the go.', price: 1200, image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93' },
  { id: 213, name: 'Kosha Coffee Apron', description: 'Stylish apron with Kosha branding.', price: 800, image: 'https://images.unsplash.com/photo-1517686469429-8bdbf3a7a1a1' },
  { id: 214, name: 'Coffee Filter Set', description: 'Set of reusable coffee filters.', price: 600, image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93' },
  { id: 215, name: 'Kosha Coffee Table Book', description: 'Beautiful coffee table book about Ayurvedic coffee.', price: 1200, image: 'https://images.unsplash.com/photo-1517686469429-8bdbf3a7a1a1' },
  // ... add more merchandise
];

function Menu({ cart, addItemToCart, removeItemFromCart }) {
  const [activeTab, setActiveTab] = useState('drinks');

  const items = activeTab === 'drinks' ? drinks : activeTab === 'food' ? food : merchandise;

  return (
    <div className="container my-5">
      <h2>Our Menu</h2>
      <p>Explore our extensive selection of Ayurvedic coffees, delicious food, and exclusive merchandise.</p>
      <ul className="nav nav-tabs mb-4">
        <li className="nav-item">
          <button className={`nav-link ${activeTab === 'drinks' ? 'active' : ''}`} onClick={() => setActiveTab('drinks')}>Drinks</button>
        </li>
        <li className="nav-item">
          <button className={`nav-link ${activeTab === 'food' ? 'active' : ''}`} onClick={() => setActiveTab('food')}>Food</button>
        </li>
        <li className="nav-item">
          <button className={`nav-link ${activeTab === 'merchandise' ? 'active' : ''}`} onClick={() => setActiveTab('merchandise')}>Merchandise</button>
        </li>
      </ul>

      <div className="row row-cols-1 row-cols-md-3 g-4">
        {items.map(item => (
          <div className="col" key={item.id}>
            <div className="card h-100 shadow-sm">
              <img src={item.image} className="card-img-top" alt={item.name} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.description}</p>
                <p className="card-text"><strong>₹{item.price}</strong></p>
                <div className="mt-auto d-flex align-items-center">
                  {cart[item.id] ? (
                    <>
                      <button className="btn btn-outline-secondary me-2" onClick={() => removeItemFromCart(item.id)}>-</button>
                      <span>{cart[item.id].count}</span>
                      <button className="btn btn-outline-secondary ms-2" onClick={() => addItemToCart(item)}>+</button>
                    </>
                  ) : (
                    <button className="btn btn-primary" onClick={() => addItemToCart(item)}>Add Item</button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4">
        <a href="https://www.starbucks.in/ordering" target="_blank" rel="noopener noreferrer" className="btn btn-link">
        </a>
      </div>
    </div>
  );
}

export default Menu;
