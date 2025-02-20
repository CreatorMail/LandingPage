import { motion } from 'framer-motion'
import { Shield, ShoppingBag, CreditCard, Truck } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Always Protected',
    description: 'Shopping with UNINE is even more secure thanks to Buyer Protection.'
  },
  {
    icon: CreditCard,
    title: 'Get Reward',
    description: 'You can keep using your favorite card and keep getting rewards.'
  },
  {
    icon: ShoppingBag,
    title: 'No Hidden fees',
    description: 'You will only be charged when selling goods or requesting payment.'
  },
  {
    icon: Truck,
    title: 'Free Shipping',
    description: 'Changed your mind after buying? Send back the item you purchased.'
  }
]

const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <motion.div
      whileHover={{ 
        y: -8, 
        backgroundColor: '#e6e65c',
        boxShadow: '0 20px 40px rgba(230, 230, 92, 0.15)'
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="w-[282px] h-[318px] p-[35px] rounded-[15px] bg-white shadow-lg transition-all duration-300"
    >
      <div className="h-full flex flex-col">
        <Icon className="w-12 h-12 mb-6 text-[#e6e65c]" />
        <h3 className="text-xl font-bold mb-4">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      </div>
    </motion.div>
  )
}

const Features = () => {
  return (
    <section className="py-20 relative overflow-hidden">
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Safe & Convenient Transaction
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Want to pay anything so easy with the touch of a finger. Through UNINE, you can make practically any transaction.
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