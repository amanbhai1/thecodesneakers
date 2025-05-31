import React , { useState }from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const Blog = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);
  const [activePost, setActivePost] = useState(null);

  const posts = [
    {
      title: 'AI Revolution in 2025',
      excerpt:
        'Artificial Intelligence has moved beyond just hype — it’s now a core part of modern businesses, transforming how we work, connect, and innovate. From intelligent automation in industries to personalized experiences powered by machine learning, AI is everywhere. This article explores how AI, along with emerging technologies like Web3 and real-time app frameworks, is shaping the future of tech in 2025. We’ll dive into real-world use cases, trends, and predictions that every tech enthusiast and developer should know about.',
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
        'React has evolved rapidly over the years, and 2025 brings even more powerful features that redefine frontend development. In this post, we break down the latest additions like Server Components, Concurrent Rendering, and the evolution of Hooks. Whether you’re a beginner or a seasoned developer, this guide will help you stay up-to-date and take full advantage of modern React practices. We’ll also cover performance optimization, component architecture, and real-world best practices that you can apply in your next project.',
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
        'The decentralized web is here to stay, and Web3 development is one of the hottest skills to have in 2025. This guide walks you through the fundamentals of becoming a Web3 developer — from understanding blockchain architecture to writing smart contracts and integrating with decentralized storage systems like IPFS. Learn how to build secure, scalable dApps (Decentralized Apps) and explore tools like Solidity, MetaMask, and web3.js that make development in the blockchain world more accessible than ever.',
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
        'Being a developer in 2025 means more than just writing code — it’s about working smart with the right tools. This post highlights the best development tools you should be using to boost productivity. Discover powerful VSCode extensions that streamline your workflow, browser devtools that enhance debugging, and APIs that can automate repetitive tasks. Whether you’re working on frontend, backend, or full-stack projects, these tools can save you hours of time and help you code more efficiently.',
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

  const openPopup = (post) => setActivePost(post);
  const closePopup = () => setActivePost(null);


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
              <img src={post.image} alt={post.title} className="w-full h-60 object-cover" />
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
                    <img src={post.author.avatar} alt={post.author.name} className="w-9 h-9 rounded-full border border-cyan-400" />
                    <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{post.author.name}</span>
                  </div>
                  <div className="flex gap-2 flex-wrap justify-end">
                    {post.tags.map((tag, i) => (
                      <span key={i} className="text-xs bg-gradient-to-r from-cyan-400 to-teal-600 px-2 py-1 rounded-full text-black font-semibold">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6">
                  <button onClick={() => openPopup(post)} className={`text-cyan-400 hover:underline text-sm ${darkMode ? 'hover:text-cyan-300' : 'hover:text-blue-600'}`}>
                    Read More →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {activePost && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className={`w-full max-w-3xl rounded-xl overflow-hidden ${darkMode ? 'bg-[#1a1a1a]' : 'bg-white'} shadow-2xl relative`}
          >
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 p-4 rounded-xl text-gray-200 backdrop-blur-xl bg-transparent/800 hover:text-cyan-500"
            >
              <FaTimes size={20} />
            </button>
            <img src={activePost.image} alt={activePost.title} className="w-full h-72 object-cover" />
            <div className="p-6">
              <h2 className="text-3xl font-bold mb-3 text-cyan-400">{activePost.title}</h2>
              <p className={`text-sm mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-700'}`}>{activePost.date} · {activePost.readTime}</p>
              <div className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{activePost.excerpt}</div>
              <div className="flex justify-between text-sm text-gray-500">
                <span>💬 {activePost.comments} comments</span>
                <span>❤️ {activePost.likes} likes</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Blog;
