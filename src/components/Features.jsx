import { motion } from 'framer-motion'
import { useEffect, useState } from 'react';
import { Shield, ShoppingBag, CreditCard, Truck } from 'lucide-react'
import { BackgroundBeams } from "./ui/background-beams";

const features = [
  {
    icon: Shield,
    title: 'Secure Transfers',
    description: 'Send and receive Creator tokens securely via email or domain, with end-to-end encryption.'
  },
  {
    icon: CreditCard,
    title: 'Wallet-Free Transactions',
    description: 'Effortlessly transfer digital assets without needing a wallet. Perfect for creators and businesses.'
  },
  {
    icon: ShoppingBag,
    title: 'No Hidden Fees',
    description: 'Enjoy transparent pricing with no hidden costs. Only pay for what you use.'
  },
  {
    icon: Truck,
    title: 'Instant Delivery',
    description: 'Tokens are delivered instantly to the recipient’s email or domain, ensuring seamless transactions.'
  }
];


const FeatureCard = ({ icon: Icon, title, description }) => {
  const [rotation, setRotation] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  
  // Animation for the rotating gradient border
  useEffect(() => {
    if (!isHovered) return;
    
    const interval = setInterval(() => {
      setRotation(prev => (prev + 1) % 10);
    }, 50);
    
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <div 
      className="relative w-[282px] h-[318px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated gradient border - only visible on hover */}
      {isHovered && (
        <motion.div
          className="absolute inset-0 rounded-[15px] z-0"
          style={{
            background: `linear-gradient(${rotation}deg, #e6e65c, #e36bae)`, // Yellow to pink - better color combo
            padding: '2px',
          }}
          animate={{ rotate: rotation }}
        />
      )}
      
      {/* Main card content */}
      <motion.div
        whileHover={{ 
          y: -8, 
          backgroundColor: '',
          color: 'black',
          boxShadow: '0 20px 40px rgba(230, 230, 92, 0.15)'
        }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="w-full h-full cursor-pointer border border-[#e6e65c] p-[35px] uppercase rounded-[15px] bg-transparent relative z-10 flex flex-col"
      >
        <div className="h-full flex flex-col">
          <Icon className="w-12 h-12 mb-6 text-[#e6e65c]" />
          <h3 className="text-xl text-white font-bold mb-4">{title}</h3>
          <p className="text-gray-200 text-sm leading-relaxed">{description}</p>
        </div>
      </motion.div>
    </div>
  );
};



const Features = () => {
  return (
    <section className="py-20 z-10 bg-black relative overflow-hidden">
      <BackgroundBeams />
      {/* SVG Background */}
      <div className="absolute inset-0 w-full h-full">
        <svg 
          width="100%" 
          height="100%" 
          viewBox="0 0 1440 781" 
          preserveAspectRatio="none"
          className="opacity-10"
        >
          {[...Array(20)].map((_, i) => (
            <motion.line
              key={i}
              x1={-100 + (i * 5)}
              y1={-242 + (i * 30)}
              x2={1551}
              y2={0 + (i * 30)}
              stroke="#F3F3F3"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.5 }}
              transition={{
                duration: 2,
                delay: i * 0.1,
                ease: "easeInOut"
              }}
            />
          ))}
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-6xl text-gray-100 font-bold mb-4">
            Safe & Convenient Transaction
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Want to pay anything so easy with the touch of a finger. Through Creatormail, you can make practically any transaction.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <FeatureCard {...feature} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features