import { motion } from 'framer-motion'
import { Twitter, Instagram, DiscIcon as Discord, ArrowRight } from 'lucide-react'

const Download = () => {
  return (
    <section className="bg-[#0A0A0A] py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#e6e65c]/10 rounded-full blur-3xl"
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
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-black/40 backdrop-blur-xl rounded-3xl p-12 border border-white/10"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="text-left space-y-6">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-4xl md:text-5xl font-bold text-white leading-tight"
                >
                  Get Started with{' '}
                  <span className="text-[#e6e65c]">CreatorMail</span>
                </motion.h2>
                <p className="text-gray-400 text-lg">
                  Join our community of creators and start managing your digital assets with confidence.
                </p>
                
                <div className="flex flex-col gap-4">
                  <motion.a
                    href="https://appdistribution.firebase.dev/i/e8ff3364adeac788"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center justify-between bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-4 group transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%F0%9F%A6%86%20icon%20_apple%20app%20store_-4xSlAM9tDLhkKnWHaoQa0nneXINhaX.svg"
                        alt="App Store"
                        className="w-8 h-8"
                      />
                      <div>
                        <p className="text-gray-400 text-sm">Download on the</p>
                        <p className="text-white font-medium">App Store</p>
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
                  </motion.a>

                  <motion.a
                    href="https://appdistribution.firebase.dev/i/e8ff3364adeac788"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center justify-between bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-4 group transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%F0%9F%A6%86%20icon%20_Google%20Play_-W5f0Oyy9YNAvkfXQYjGzVTdYtdyCWc.svg"
                        alt="Google Play"
                        className="w-8 h-8"
                      />
                      <div>
                        <p className="text-gray-400 text-sm">Get it on</p>
                        <p className="text-white font-medium">Google Play</p>
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
                  </motion.a>
                </div>
              </div>

              {/* Right Content - 3D Illustration */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <motion.div
                  animate={{
                    y: [0, -20, 0],
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/illus-HecFDmtfdQWfIgoIlgTs6wpQtkjTek.png"
                    alt="3D Mechanism"
                    className="w-full max-w-md mx-auto"
                  />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


export default Download