import React from 'react';

function Events({ addItemToCart }) {
  const events = [
    {
      id: 1,
      title: 'Coffee Tasting Session',
      description: 'Join us for an exclusive coffee tasting event and explore various coffee beans and brews.',
      price: 500,
      date: 'May 26, 2025',
      time: '6:00 PM - 8:00 PM',
      image: 'https://cdn.shopify.com/s/files/1/0273/0429/6535/files/group-analysing-slurping-coffee-coffee-tasting-event_600x600.jpg?v=1643121486'
    },
    {
      id: 2,
      title: 'Latte Art Workshop',
      description: 'Learn how to create stunning latte art from expert baristas.',
      price: 750,
      date: 'June 15, 2025',
      time: '10:00 AM - 12:00 PM',
      image: 'https://i.pinimg.com/736x/36/f9/b3/36f9b340bf066c94c51f92b05a400cf6.jpg'
    },
    {
      id: 3,
      title: 'Coffee Brewing Masterclass',
      description: 'Dive deep into the art of brewing coffee and perfecting your brew technique.',
      price: 1000,
      date: 'October 15, 2025',
      time: '11:00 AM - 1:00 PM',
      image: 'https://thumbs.dreamstime.com/b/collection-coffee-brewing-methods-illustrated-moka-pot-releasing-steam-over-coffee-grounds-pour-over-setup-cone-366681057.jpg'
    }
  ];

  const handleReserveSeat = (event) => {
    addItemToCart({
      id: event.id,
      name: event.title,
      price: event.price,
      image: event.image,
      description: event.description,
    });
  };

  return (
    <div className="container my-5">
      <h2>Upcoming Events</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {events.map(event => (
          <div className="col" key={event.id}>
            <div className="card h-100 shadow-sm">
              <img src={event.image} className="card-img-top" alt={event.title} />
              <div className="card-body">
                <h5 className="card-title">{event.title}</h5>
                <p className="card-text">{event.description}</p>
                <p className="card-text"><strong>₹{event.price}</strong></p>
                <p className="card-text"><strong>Date:</strong> {event.date}</p>
                <p className="card-text"><strong>Time:</strong> {event.time}</p>
                <button className="btn btn-primary" onClick={() => handleReserveSeat(event)}>Reserve Seat</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Events;
