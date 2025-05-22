const Blog = () => {
  const posts = [...Array(4)].map((_, i) => ({
    title: `Tech Trends ${i+1}`,
    excerpt: 'Exploring the latest in technology innovation...',
    date: 'March 15, 2024'
  }));

  return (
    <div className="bg-black min-h-screen py-32 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-5xl font-bold mb-8 font-poppins">Latest Insights</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          {posts.map((post, index) => (
            <div key={index} className="border border-gray-800 rounded-lg p-6 hover:border-primary transition-colors">
              <h3 className="text-2xl font-bold mb-4">{post.title}</h3>
              <p className="text-gray-400 mb-4">{post.excerpt}</p>
              <span className="text-primary">{post.date}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;