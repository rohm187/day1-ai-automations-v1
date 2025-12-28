import { useState } from 'react';
import { motion } from 'framer-motion';
import { Zap, Bot, BarChart, Shield, Check, ArrowRight } from 'lucide-react';
import Head from 'next/head';

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);

  const products = [
    {
      id: 'reddit-bot',
      name: 'Reddit Research Bot',
      price: 297,
      description: 'Automated market research and trend analysis from Reddit.',
      features: ['Trend Identification', 'Sentiment Analysis', 'Opportunity Detection', 'Auto-Reporting'],
      icon: <Bot className="w-12 h-12 text-orange-500" />
    },
    {
      id: 'blog-bot',
      name: 'SEO Blog Generator',
      price: 297,
      description: 'AI-powered content engine that writes and optimizes blog posts.',
      features: ['Keyword Optimization', 'Long-form Content', 'Meta Tags Generation', 'Plagiarism Free'],
      icon: <Zap className="w-12 h-12 text-yellow-400" />
    },
    {
      id: 'social-bot',
      name: 'Social Media Manager',
      price: 297,
      description: 'Automate your social presence with intelligent scheduling and engagement.',
      features: ['Multi-platform Support', 'Content Scheduling', 'Auto-Engagement', 'Analytics Dashboard'],
      icon: <BarChart className="w-12 h-12 text-blue-400" />
    },
    {
      id: 'master-brain',
      name: 'The Master Brain Bundle',
      price: 997,
      description: 'Get ALL 3 bots plus the central command dashboard.',
      features: ['All 3 Bots Included', 'Central Dashboard', 'Priority Support', 'Lifetime Updates'],
      icon: <Shield className="w-12 h-12 text-purple-500" />,
      highlight: true
    }
  ];

  const handlePurchase = async (product) => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/create-checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          productId: product.id,
          amount: product.price * 100,
          productName: product.name
        })
      });

      const { url } = await response.json();
      window.location.href = url;
    } catch (error) {
      console.error('Purchase failed:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Head>
        <title>Day 1 AI Automations | Enterprise Grade Bots</title>
        <meta name="description" content="Automate your business with our suite of AI-powered bots." />
      </Head>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-black pointer-events-none" />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"
          >
            Day 1 AI Automations
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto mb-12"
          >
            Deploy enterprise-grade AI infrastructure in minutes. Scale your operations without scaling your headcount.
          </motion.p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`relative p-8 rounded-2xl border ${product.highlight ? 'border-purple-500 bg-purple-900/10' : 'border-gray-800 bg-gray-900/50'} backdrop-blur-sm hover:border-gray-600 transition-colors`}
            >
              {product.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                  BEST VALUE
                </div>
              )}
              <div className="mb-6">{product.icon}</div>
              <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
              <p className="text-gray-400 mb-6 h-20">{product.description}</p>
              <div className="text-3xl font-bold mb-6">${product.price}</div>
              
              <ul className="space-y-3 mb-8">
                {product.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-sm text-gray-300">
                    <Check className="w-4 h-4 text-green-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handlePurchase(product)}
                disabled={isLoading}
                className={`w-full py-3 rounded-lg font-bold transition-all ${
                  product.highlight 
                    ? 'bg-purple-600 hover:bg-purple-700 text-white shadow-lg shadow-purple-500/25' 
                    : 'bg-white text-black hover:bg-gray-200'
                }`}
              >
                {isLoading ? 'Processing...' : 'Get Access Now'}
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-800 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} Day 1 AI Automations. All rights reserved.</p>
      </footer>
    </div>
  );
}
