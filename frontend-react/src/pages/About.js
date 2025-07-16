import React from 'react';

function About() {
  const team = [
    { id: 1, name: 'Pradeep Yadav', role: 'Founder', image: 'https://randomuser.me/api/portraits/men/32.jpg' },
    { id: 2, name: 'Nishant Sinha', role: 'Co-Founder', image: 'https://randomuser.me/api/portraits/men/45.jpg' },
    { id: 3, name: 'Anita Sharma', role: 'Head Barista', image: 'https://randomuser.me/api/portraits/women/65.jpg' },
    { id: 4, name: 'Ravi Kumar', role: 'Roasting Expert', image: 'https://randomuser.me/api/portraits/men/52.jpg' }
  ];

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-6">
          <h2>About Kosha Coffee and Ayurveda</h2>
          <p>
            Kosha Coffee and Ayurveda, founded in 2025 by Pradeep Yadav, was created with a bold vision: to brew India’s finest Ayurvedic coffees and share them with the world. Combining the rich legacy of Indian coffee with the ancient healing science of Ayurveda, Kosha brings a fresh perspective to what coffee can be — a daily ritual that supports both energy and wellness.
          </p>
          <p>
            At Kosha, we don’t just make coffee — we craft experiences that heal, energize, and connect. Our coffees are made from specialty-grade beans, all scoring 80 or above, sourced from ethical farms across India. These beans are roasted in small batches to maintain freshness, seasonal character, and flavor integrity.
          </p>
          <p>
            What sets Kosha apart is our infusion of Ayurvedic herbs and adaptogens like Ashwagandha, Tulsi, Turmeric, and Brahmi, thoughtfully paired with coffee to promote balance and vitality. Each blend is designed to support your lifestyle — whether you’re looking for focus, calm, immunity, or clean energy.
          </p>
          <p>
            Our commitment goes beyond the cup. We ensure that our farmers are paid fair, and often premium prices, supporting sustainable practices and preserving traditional methods of cultivation. Our entire value chain — from crop to cup — is built on respect, transparency, and care.
          </p>
          <p>
            In 2025, we took a proud step onto the global stage by opening our first international outlet in Helsinki, Finland, introducing Ayurvedic coffee to European communities. Back home, Kosha is expanding across major Indian cities, connecting people through the power of mindful, wellness-driven coffee.
          </p>
          <p>
            With every sip of Kosha, you taste India’s heritage, nature’s wisdom, and a vision for conscious living.
            We invite you to be part of this journey — where coffee becomes more than just a beverage, it becomes a way to live better.
          </p>
          <h3>Our Promise</h3>
          <p>
            Purity: Only natural, clean, and ethically sourced ingredients go into our coffee.
          </p>
          <p>
            Purpose: Everything we do aims to support wellness — of people, communities, and the planet.
          </p>
          <p>
            People: We treat every link in the chain — from farmer to roaster to customer — with respect and fairness.
          </p>
          <p>
            Progress: We innovate not just to grow, but to serve better, live better, and build a healthier tomorrow.
          </p>
          <h3>Join the Kosha Movement</h3>
          <p>
            At Kosha Coffee and Ayurveda, every sip is a celebration of India’s heritage, nature’s intelligence, and modern craftsmanship. Whether you're a coffee connoisseur, a wellness seeker, or just someone curious to try something new — you are welcome at Kosha.
          </p>
          <p>
            Because here, coffee is more than a drink. It’s a way of life.
          </p>
        </div>
        <div className="col-md-6">
          <img
            src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2hvcHxlbnwwfHwwfHx8MA%3D%3D"
            alt="Cafe Interior"
            className="img-fluid rounded img-hover-pop"
          />
          <img
            src="https://images.unsplash.com/photo-1508424757105-b6d5ad9329d0?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Cafe Interior 2"
            className="img-fluid rounded mt-3 img-hover-pop"
          />
        </div>
      </div>

      <h3 className="mt-5">About Founder Pradeep Yadav</h3>
      <div className="row align-items-center">
        <div className="col-md-4">
          <img
            src="https://images.unsplash.com/photo-1588826807439-7f4a93dc2a59?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Founder Pradeep Yadav"
            className="img-fluid rounded mb-3 img-hover-pop"
          />
        </div>
        <div className="col-md-8">
          <p>
            Pradeep Yadav, the founder of Kosha Coffee and Ayurveda, is a passionate coffee professional and a visionary who is redefining India’s presence in the global specialty coffee space. A graduate in Hospitality Management from the Institute of Hotel Management (IHM), Jodhpur, Pradeep’s journey with coffee began not in a boardroom but behind the bar — as a barista.
          </p>
          <p>
            It was there that he truly fell in love with the craft. From pulling the perfect espresso to understanding bean origins and roasting methods, Pradeep immersed himself completely in the world of coffee. Over time, he became known for his expertise in Indian specialty coffee, earning respect within the industry as both a practitioner and a thought leader.
          </p>
          <p>
            In 2025, Pradeep launched Kosha Coffee and Ayurveda, combining two of India’s greatest gifts — coffee and Ayurveda. His idea was simple yet groundbreaking: to blend high-quality Indian coffee with Ayurvedic herbs, creating a range of wellness-driven brews that promote balance, energy, and healing.
          </p>
          <p>
            That same year, he took a major leap by opening Kosha’s first international outlet in Helsinki, Finland — the first Ayurvedic coffee café of its kind. The move put Indian specialty coffee on the global map and introduced the world to a unique wellness experience.
          </p>
          <p>
            A frequent traveler and a passionate learner, Pradeep continues to explore coffee plantations, connect with farmers, and meet coffee lovers around the world. His mission is to grow Kosha into a global brand while staying rooted in sustainability, wellness, and tradition.
          </p>
          <p>
            With every cup of Kosha, you taste not just coffee — but a philosophy shaped by knowledge, care, and vision.
          </p>
        </div>
      </div>

      <h3>Our Cafes</h3>
      <p>
        Kosha Coffee House has outlets in Pune, Mumbai, and Lucknow. Find a cafe near your location to enjoy India’s finest Ayurvedic coffees in spaces designed meticulously to elevate your coffee experience.
      </p>
      <div className="row">
          <div className="col-md-4 mb-3">
              <img
                src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2hvcHxlbnwwfHwwfHx8MA%3D%3D"
                alt="Cafe Interior"
                className="img-fluid rounded img-hover-pop"
              />
          </div>
        <div className="col-md-4 mb-3">
              <img
                src="https://images.unsplash.com/photo-1752006335516-44a0302035de?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29mZmVlJTIwY2FmZSUyMGF5dXJ2ZWRpYyUyMHNob3BzfGVufDB8fDB8fHww"
                alt="Coffee Shop"
                className="img-fluid rounded img-hover-pop"
              />
        </div>
        <div className="col-md-4 mb-3">
              <img
                src="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Coffee Beans"
                className="img-fluid rounded img-hover-pop"
              />
        </div>
      </div>

      <h3>Our Team</h3>
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {team.map(member => (
          <div className="col" key={member.id}>
            <div className="card h-100 shadow-sm text-center">
              <img src={member.image} className="card-img-top rounded-circle mx-auto mt-3 img-hover-pop" alt={member.name} style={{width: '120px', height: '120px', objectFit: 'cover'}} />
              <div className="card-body">
                <h5 className="card-title">{member.name}</h5>
                <p className="card-text">{member.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
