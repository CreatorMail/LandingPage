import { motion } from "framer-motion"
import { Star } from "lucide-react"
import ButtonImg from "../assets/button.svg"

const reviews = [
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3b9e8dfddf4a065581b04df49638ca9c-gs4E16RbOtpjhxTuEbWaBqTFnFgM1g.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/892ca2df6e032e2c3c86f59b0f2caa70-cu1ki9YFqygtS7k48DJ3ATFhnJkQ9s.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/49efca620db678761bac77b9ff2a218a-LVB5euNdcGf91JLgsNMbVLzF3Csxd9.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5d4f6c2c6c7caf725e2ec6d6ed6aca1d-5ht2SZNW7IbwjRZVXvSGeJM7WZqAB6.png",
]

export default function AnimatedLandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#191A1B] to-[#0E0F0F] overflow-hidden">
      {/* Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 w-full z-20 border-b border-b-[#282828] px-[102px] py-[16px] flex justify-between items-center backdrop-blur-sm bg-[#141414]"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-[#E6E6E6] tracking-[11%] text-[20px] font-semibold"
        >
          CREATORMAIL
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex gap-4"
        >
          <button className="px-4 py-2 text-[#E6E6E6] tracking-[11%] hover:text-gray-200 transition-colors text-[14px] font-normal">
            FEATURES
          </button>
          <button className="w-[142px] h-[43px] rounded-[500px] bg-[#292929] flex items-center justify-center text-[#E6E6E6] hover:bg-[#252525] transition-colors tracking-[11%] text-sm font-normal">
            SEND HERE
          </button>
        </motion.div>
      </motion.nav>

      {/* Main Content */}
      <div className="relative pt-32 px-6 max-w-[1400px] mx-auto">
        {/* Blur Effect */}
        <div
          className="absolute top-[73px] bg-[#67EFAE08] blur-[200.2px] right-0 w-[786px] h-[786px] rounded-full"
        />

        <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h1 className="text-5xl w-full max-w-[644px] lg:text-[32px] font-[300] leading-[72px] tracking-[-2%] text-white">
              Send & receive Creator tokens effortlessly via email &
              domain
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
                <img src={ButtonImg} draggable="false" alt="" className="" />
                <motion.div className="absolute inset-0 bg-transparent translate-x-[101%] group-hover:translate-x-0 transition-transform duration-300" />
              </motion.button>
              <motion.button whileHover={{ x: 2 }} className="text-[#E7E7E7] underline underline-offset-4 text-[16px] font-medium">
                See How It Works
              </motion.button>
            </div>

            <div className="flex flex-wrap gap-8 pt-4">
              {["Trusted by 4,000+ companies", "Free Forever", "Set up in just 1 day"].map((text) => (
                <motion.div
                  key={text}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="flex items-center gap-2 text-[#18A963]"
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
              className="flex gap-32 pl-32 pt-4"
            >
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%F0%9F%A6%86%20icon%20_apple%20app%20store_-4xSlAM9tDLhkKnWHaoQa0nneXINhaX.svg"
                width={115}
                height={115}
                draggable="false"
                alt="App Store"
                className="hover:opacity-90 transition-opacity cursor-pointer"
              />
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%F0%9F%A6%86%20icon%20_Google%20Play_-W5f0Oyy9YNAvkfXQYjGzVTdYtdyCWc.svg"
                width={115}
                height={115}
                draggable="false"
                alt="Google Play"
                className="hover:opacity-90 transition-opacity cursor-pointer"
              />
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
              animate={{ y: 0 }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                duration: 2,
                ease: "easeInOut",
              }}
            >
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/iPhone%2013%20Pro-iH1FcON1kiMkbAlBZakyEDCzIeT5fE.svg"
                width={986}
                height={781}
                draggable="false"
                alt="iPhone mockup"
                className="w-full h-full object-contain scale-[1.4]"
                priority
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

