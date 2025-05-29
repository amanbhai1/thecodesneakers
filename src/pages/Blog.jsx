import React from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const Blog = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);
  
  const posts = [
    {
      title: 'AI Revolution in 2025',
      excerpt:
        'AI is no longer a buzzword. Discover how technologies like AI, Web3, and real-time app frameworks are revolutionizing industries...',
      date: 'March 12, 2024',
      author: {
        name: "The Code Sneaker's",
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=user1'
      },
      tags: ['AI', 'Web3', 'React'],
      readTime: '5 min read',
      image: 'https://www.emagia.com/blog/wp-content/uploads/2024/01/navigating-the-ai-revolution-in-7-key-steps-1.jpg',
      comments: 18,
      likes: 67,
      category: 'Tech Insights'
    },
    {
      title: 'Mastering React in 2025',
      excerpt:
        'Learn what’s new in React, from Server Components to concurrent rendering and how they’ll shape the future of frontend development...',
      date: 'March 13, 2024',
      author: {
        name: "The Code Sneaker's",
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=user2'
      },
      tags: ['React', 'Hooks', 'Frontend'],
      readTime: '6 min read',
      image: 'https://miro.medium.com/v2/resize:fit:2000/0*zj_kGMq6f2ZxW7p3.png',
      comments: 24,
      likes: 91,
      category: 'Frontend'
    },
    {
      title: 'The Web3 Developer’s Guide',
      excerpt:
        'Explore what it takes to become a Web3 developer and how to build apps using smart contracts, blockchain, and decentralized storage...',
      date: 'March 14, 2024',
      author: {
        name: "The Code Sneaker's",
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=user3'
      },
      tags: ['Web3', 'Blockchain', 'SmartContracts'],
      readTime: '7 min read',
      image: 'https://itchronicles.com/wp-content/uploads/2022/12/web3-data-storage-1024x680.jpg',
      comments: 12,
      likes: 54,
      category: 'Blockchain'
    },
    {
      title: 'DevTools You Should Know',
      excerpt:
        'Your productivity can skyrocket with the right developer tools. Here are the best VSCode extensions, browser tools, and APIs...',
      date: 'March 15, 2024',
      author: {
        name: "The Code Sneaker's",
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=user4'
      },
      tags: ['DevTools', 'VSCode', 'Productivity'],
      readTime: '4 min read',
      image: 'https://i.ytimg.com/vi/CNsvPG13ozg/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAJJ4emzMkWmqy8-uVOSIyBr1y59A',
      comments: 9,
      likes: 34,
      category: 'Developer Tools'
    }
  ];

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-[#0a0a0a]' : 'bg-white'} py-32 text-${darkMode ? 'white' : 'black'} font-poppins`}>
      <div className="max-w-7xl mx-auto px-4">
        <h1 className={`text-5xl font-extrabold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400`}>
          Latest Insights
        </h1>

        <div className="grid lg:grid-cols-2 gap-12">
          {posts.map((post, index) => (
            <div
              key={index}
              className={`rounded-2xl overflow-hidden hover:shadow-xl transition duration-300 ${darkMode ? 'bg-[#111111] border border-gray-800' : 'bg-white border border-gray-300'}`}
            >
              <img
                src={post.image}
                alt={post.title}
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/600x400?text=Image+Not+Available';
                }}
                className="w-full h-60 object-cover"
              />
              <div className={`p-6 ${darkMode ? 'text-white' : 'text-black'}`}>
                <div className="flex justify-between items-center text-sm mb-2">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
                <span className={`inline-block mb-3 text-xs uppercase ${darkMode ? 'text-cyan-400' : 'text-gray-600'} tracking-wider font-semibold`}>
                  {post.category}
                </span>
                <h3 className={`text-2xl font-bold mb-3 hover:${darkMode ? 'text-cyan-400' : 'text-blue-600'} transition`}>
                  {post.title}
                </h3>
                <p className={`mb-4 line-clamp-3 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{post.excerpt}</p>

                <div className="flex justify-between items-center mt-4 text-gray-500 text-sm">
                  <span>💬 {post.comments} comments</span>
                  <span>❤️ {post.likes} likes</span>
                </div>

                <div className="flex items-center justify-between mt-6">
                  <div className="flex items-center gap-3">
                    <img
                      src={post.author.avatar}
                      alt={post.author.name}
                      className="w-9 h-9 rounded-full border border-cyan-400"
                    />
                    <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{post.author.name}</span>
                  </div>
                  <div className="flex gap-2 flex-wrap justify-end">
                    {post.tags.map((tag, i) => (
                      <span
                        key={i}
                        className={`text-xs bg-gradient-to-r from-cyan-400 to-teal-600 px-2 py-1 rounded-full text-black font-semibold`}
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6">
                  <button className={`text-cyan-400 hover:underline text-sm ${darkMode ? 'hover:text-cyan-300' : 'hover:text-blue-600'}`}>
                    Read More →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
