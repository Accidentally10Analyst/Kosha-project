import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <section className="hero">
        <h1>Welcome to Kosha Cafe</h1>
        <p>Your journey to the finest Ayurvedic coffee begins here.</p>
        <button className="btn btn-primary" onClick={() => window.location.href = '/menu'}>Explore Our Menu</button>
      </section>

      <section className="container my-5">
        <h2>Our Philosophy</h2>
        <p>
          At Kosha Cafe, we blend the finest coffees from around the world with Ayurvedic herbs to offer a truly unique and rejuvenating experience. Our passion for quality coffee is matched by our commitment to wellness, creating each cup to nourish both the body and the mind.
        </p>
      </section>

      <section className="container my-5">
        <h2>Learn How to Brew</h2>
        <div className="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/BcPFVAKbdv0?si=gzwjDbY-P10C-Qb8"
            title="How to Make Coffee"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      <section className="container my-5">
        <h2>Featured Coffees</h2>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card h-100 shadow-sm">
              <Link to="/ayurvedic-coffee-blend-1" style={{ textDecoration: 'none', color: 'inherit' }}>
                <img src="https://images.unsplash.com/photo-1509042239860-f550ce710b93" className="card-img-top" alt="Ayurvedic Coffee Blend 1" />
                <div className="card-body">
                  <h5 className="card-title">NeuroBloom Brew</h5>
                  <p className="card-text">This blend focuses on cognitive clarity and mental wellness, infused with herbs like Brahmi, Ashwagandha, and Tulsi.</p>
                </div>
              </Link>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 shadow-sm">
              <Link to="/ayurvedic-coffee-blend-2" style={{ textDecoration: 'none', color: 'inherit' }}>
                <img src="https://images.unsplash.com/photo-1528825871115-3581a5387919" className="card-img-top" alt="Ayurvedic Coffee Blend 2" />
                <div className="card-body">
                  <h5 className="card-title">PranaFuel Elixir</h5>
                  <p className="card-text">"Prana" means life force in Ayurveda; this blend energizes your body and mind with vitality and intention.</p>
                </div>
              </Link>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 shadow-sm">
              <Link to="/ayurvedic-herbal-salad" style={{ textDecoration: 'none', color: 'inherit' }}>
                <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836" className="card-img-top" alt="Ayurvedic Herbal Salad" />
                <div className="card-body">
                  <h5 className="card-title">Ayurvedic Herbal Salad</h5>
                  <p className="card-text">A refreshing salad with herbs like Tulsi and Mint to detoxify and energize.</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
