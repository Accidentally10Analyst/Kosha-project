import React from 'react';
import { useParams, Link } from 'react-router-dom';

const blogPosts = {
  1: {
    title: 'Welcome to Kosha Cafe',
    content: (
      <>
        <p>Kosha Cafe is where modern coffee culture meets holistic wellness. It’s not just about coffee—it’s about creating a sanctuary for your senses. Visit us and discover a cafe experience like no other.</p>
        <div className="ratio ratio-16x9 my-3">
          <iframe
            src="https://www.youtube.com/embed/your-video-id-1"
            title="Welcome to Kosha Cafe Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <h4>Celebrity Endorsement</h4>
        <p>Celebrity X chooses Kosha Cafe for its unique Ayurvedic blends that support wellness and energy.</p>
      </>
    )
  },
  2: {
    title: 'Our Coffee Selection',
    content: (
      <>
        <p>From bold espressos to rich lattes, Kosha Cafe offers a diverse range of high-quality coffee for every taste. Indulge in our handcrafted brews and experience coffee like never before.</p>
        <div className="ratio ratio-16x9 my-3">
          <iframe
            src="https://www.youtube.com/embed/your-video-id-2"
            title="Our Coffee Selection Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <h4>Celebrity Endorsement</h4>
        <p>Celebrity Y loves our coffee selection for its rich flavors and health benefits.</p>
      </>
    )
  },
  3: {
    title: 'Why Ayurvedic Coffee is Special',
    content: (
      <>
        <p>Kosha Cafe brings you a unique blend of coffee and Ayurvedic herbs. Our Ayurvedic coffee is crafted to promote balance, enhance focus, and support overall well-being. Experience a refreshing new take on coffee.</p>
        <div className="ratio ratio-16x9 my-3">
          <iframe
            src="https://www.youtube.com/embed/your-video-id-3"
            title="Why Ayurvedic Coffee is Special Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <h4>Celebrity Endorsement</h4>
        <p>Celebrity Z endorses our Ayurvedic coffee blends for their wellness benefits.</p>
      </>
    )
  }
};

function BlogDetail() {
  const { id } = useParams();
  const post = blogPosts[id];

  if (!post) {
    return (
      <div className="container my-5">
        <h2>Blog Post Not Found</h2>
        <p>The blog post you are looking for does not exist.</p>
        <Link to="/blog" className="btn btn-primary">Back to Blog</Link>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <h2>{post.title}</h2>
      {post.content}
      <Link to="/blog" className="btn btn-secondary mt-3">Back to Blog</Link>
    </div>
  );
}

export default BlogDetail;
