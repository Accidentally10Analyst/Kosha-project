import React from 'react';
import './Blog.css';

function Blog() {
  const posts = [
    {
      id: 1,
      title: 'Welcome to Kosha Cafe',
      description: 'Kosha Cafe is where modern coffee culture meets holistic wellness. It’s not just about coffee—it’s about creating a sanctuary for your senses. Visit us and discover a cafe experience like no other.',
      image: 'https://img.freepik.com/free-photo/delicious-organic-coffee-still-life_23-2151762341.jpg?semt=ais_hybrid&w=740'
    },
    {
      id: 2,
      title: 'Our Coffee Selection',
      description: 'From bold espressos to rich lattes, Kosha Cafe offers a diverse range of high-quality coffee for every taste. Indulge in our handcrafted brews and experience coffee like never before.',
      image: 'https://weaverscoffee.com/cdn/shop/articles/A_selection_of_fresh_roasted_and_unroasted_coffee_beans_arranged_in_a_diagonal_stripe_pattern_1000x.jpg?v=1710793144'
    },
    {
      id: 3,
      title: 'Why Ayurvedic Coffee is Special',
      description: 'Kosha Cafe brings you a unique blend of coffee and Ayurvedic herbs. Our Ayurvedic coffee is crafted to promote balance, enhance focus, and support overall well-being. Experience a refreshing new take on coffee.',
      image: 'https://i.pinimg.com/736x/c2/4b/8e/c24b8e65dbc6b3ea11799c0c46b5223e.jpg'
    }
  ];

  return (
    <div className="blog-container">
      <h2 className="blog-title">From Our Blog</h2>
      <div className="blog-posts">
        {posts.map(post => (
          <div className="blog-card" key={post.id}>
            <div className="blog-image-container">
              <img src={post.image} alt={post.title} className="blog-image" />
            </div>
            <div className="blog-content">
              <h3 className="blog-post-title">{post.title}</h3>
              <p className="blog-post-description">{post.description}</p>
              <button
                className="blog-read-more-btn"
                onClick={() => window.location.href = `/blog/${post.id}`}
              >
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
