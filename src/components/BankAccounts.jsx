import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const FloatingElement = ({ children, delay = 0 }) => {
  return (
    <motion.div
      animate={{
        y: [0, -10, 0],
        rotate: [0, 2, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    >
      {children}
    </motion.div>
  )
}

const BankAccounts = () => {
  return (
    <section className="py-20 bg-[#0A0A0A] relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-[#e6e65c]/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-[#e6e65c]/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 bg-black/40 backdrop-blur-xl rounded-2xl p-10 border border-white/10">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#e6e65c] to-white bg-clip-text text-transparent">
                Creator Wallet
              </h2>
              <p className="text-gray-400 mb-6 text-lg">
                Secure, decentralized banking for creators. FDIC insured with high-yield returns.
              </p>
              
              <motion.button
                whileHover={{ scale: 1.02, x: 5 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center text-[#e6e65c] hover:text-white transition-colors group"
              >
                Connect wallet 
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <div className="mt-12 relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-20" />
                <div className="relative z-10">
                  <FloatingElement>
                    <img 
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/illus-HecFDmtfdQWfIgoIlgTs6wpQtkjTek.png"
                      alt="3D Mechanism"
                      className="w-full max-w-[300px] mx-auto"
                    />
                  </FloatingElement>
                </div>
              </div>
            </div>
            
            {/* Glowing effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#e6e65c]/20 to-transparent blur-2xl opacity-50" />
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-4xl font-bold text-white space-y-2">
              <span className="block">Automate your</span>
              <span className="block text-[#e6e65c]">financial workflow</span>
            </h2>
            
            <p className="text-gray-400 text-lg leading-relaxed">
              Connect your creator wallet to automate payments, track earnings, and manage investments—all in one place.
            </p>

            <div className="flex flex-col space-y-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#e6e65c] text-black px-8 py-4 rounded-xl font-medium hover:bg-opacity-90 transition-colors"
              >
                Create a new wallet
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white/5 text-white px-8 py-4 rounded-xl font-medium hover:bg-white/10 transition-colors border border-white/10"
              >
                I already have a wallet
              </motion.button>
            </div>

            <div className="pt-8 grid grid-cols-2 gap-6">
              {[
                { label: "Total Balance", value: "$52,300.00" },
                { label: "Active Users", value: "2.5M+" }
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="bg-black/20 backdrop-blur-xl rounded-xl p-6 border border-white/10"
                >
                  <p className="text-gray-400 text-sm mb-2">{stat.label}</p>
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default BankAccounts