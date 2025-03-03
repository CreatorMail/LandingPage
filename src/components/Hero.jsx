import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import ButtonImg from "../assets/button.svg"

const reviews = [
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3b9e8dfddf4a065581b04df49638ca9c-gs4E16RbOtpjhxTuEbWaBqTFnFgM1g.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/892ca2df6e032e2c3c86f59b0f2caa70-cu1ki9YFqygtS7k48DJ3ATFhnJkQ9s.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/49efca620db678761bac77b9ff2a218a-LVB5euNdcGf91JLgsNMbVLzF3Csxd9.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5d4f6c2c6c7caf725e2ec6d6ed6aca1d-5ht2SZNW7IbwjRZVXvSGeJM7WZqAB6.png",
]

// Animated shapes component
const FloatingShapes = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Primary blur effect */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute top-[73px] bg-[#67EFAE08] blur-[200.2px] right-0 w-[786px] h-[786px] rounded-full"
      />
      
      {/* Animated geometric shapes */}
      <motion.div
        animate={{
          rotate: 360,
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-[#72E485] to-transparent opacity-10 rounded-full blur-xl"
      />
      
      <motion.div
        animate={{
          rotate: -360,
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-l from-[#F9D658] to-transparent opacity-10 rounded-full blur-xl"
      />

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
          className="absolute w-1 h-1 bg-[#72E485] rounded-full"
        />
      ))}
    </div>
  )
}

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-b from-[#191A1B] to-[#0E0F0F] pt-32 px-6 mx-auto overflow-hidden">
      <div className="max-w-[1300px] mx-auto">
        <FloatingShapes />

        {/* 3D Grid Effect */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [transform-style:preserve-3d] [perspective:1000px] [transform:rotateX(60deg)] opacity-90" />

        <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h1 className="text-[32px] w-full max-w-[644px] lg:text-5xl font-bold leading-[62px] tracking-[-2%] text-white">
              Send & receive Creator tokens effortlessly via email & domain
            </h1>
            <p className="text-[#D6D6D6] font-[400] text-[20px] leading-[30px] max-w-[480px]">
              Effortless digital asset transfers on the Creator ecosystem. Send Creator testnet tokens via email or
              domain—secure, seamless, and wallet-free.
            </p>

            <div className="flex flex-wrap gap-6 items-center">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative cursor-pointer overflow-hidden"
              >
                <img src={ButtonImg || "/placeholder.svg"} draggable="false" alt="" />
                <motion.div 
                  className="absolute inset-0 bg-transparent translate-x-[101%] group-hover:translate-x-0 transition-transform duration-300" 
                />
              </motion.button>
              <motion.button 
                whileHover={{ x: 2 }} 
                className="text-[#E7E7E7] underline underline-offset-4 text-[16px] font-medium"
              >
                See How It Works
              </motion.button>
            </div>

            <div className="flex flex-wrap gap-8 pt-4">
              {["Trusted by 40+ companies", "Free Forever", "Set up in just 1 day"].map((text) => (
                <motion.div
                  key={text}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="flex items-center gap-2 text-[#F9D658]"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                    <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
                  </svg>
                  <span className="text-white text-sm">{text}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-4"
            >
              <div className="flex -space-x-3">
                {reviews.map((src, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <img
                      src={src || "/placeholder.svg"}
                      width={40}
                      height={40}
                      alt="Review avatar"
                      className="rounded-[12px] border-2 border-[#121212] object-cover w-[40px] h-[39px]"
                    />
                  </motion.div>
                ))}
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                    >
                      <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    </motion.div>
                  ))}
                  <span className="text-white text-[16px] ml-2 font-[400]">5.0</span>
                </div>
                <span className="text-[#B8B8B8] font-normal text-[1rem]">from 200+ reviews</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-4"
            >
              <motion.a
                href="https://appdistribution.firebase.dev/i/e8ff3364adeac788"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-black/20 border border-[#ffffff26] rounded-lg px-5 py-3 hover:opacity-90 transition-all duration-300 flex items-center gap-3"
              >
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%F0%9F%A6%86%20icon%20_apple%20app%20store_-4xSlAM9tDLhkKnWHaoQa0nneXINhaX.svg"
                  width={30}
                  height={30}
                  draggable="false"
                  alt="Apple logo"
                  className="h-[30px] w-auto"
                />
                <div className="flex flex-col">
                  <span className="text-[12px] text-gray-300">Download on the</span>
                  <span className="text-[18px] font-medium text-white leading-tight">App Store</span>
                </div>
              </motion.a>
              
              <motion.a
                href="https://appdistribution.firebase.dev/i/e8ff3364adeac788"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-black/20 border border-[#ffffff26] rounded-lg px-5 py-3 hover:opacity-90 transition-all duration-300 flex items-center gap-3"
              >
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%F0%9F%A6%86%20icon%20_Google%20Play_-W5f0Oyy9YNAvkfXQYjGzVTdYtdyCWc.svg"
                  width={30}
                  height={30}
                  draggable="false"
                  alt="Google Play logo"
                  className="h-[30px] w-auto"
                />
                <div className="flex flex-col">
                  <span className="text-[12px] text-gray-300">Get it on</span>
                  <span className="text-[18px] font-medium text-white leading-tight">Google Play</span>
                </div>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Content - iPhone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mt-12 min-h-[781px] w-full max-w-[986px] mx-auto"
          >
            <motion.div
              initial={{ y: 2 }}
              animate={{ y: -10 }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 2,
                ease: "easeInOut",
              }}
              className="relative z-10"
            >
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/iPhone%2013%20Pro-iH1FcON1kiMkbAlBZakyEDCzIeT5fE.svg"
                width={986}
                height={781}
                draggable="false"
                alt="iPhone mockup"
                className="w-full h-full object-contain scale-[1.4]"
              />
              
              {/* 3D shadow effect */}
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[80%] h-[20px] bg-black opacity-20 blur-xl rounded-full" />
            </motion.div>
          </motion.div>
        </div>

        {/* Blurred Gradient Overlay at the Bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0E0F0F] to-transparent blur-[600px]" />
      </div>
    </div>
  );
};


export default Hero