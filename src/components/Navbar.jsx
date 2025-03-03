import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import Logo from "../assets/logo1.jpeg"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent bg-opacity-95 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img src={Logo} alt="CreatorMail" className="h-8" />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-[#E6E6E6] tracking-[11%] text-[20px] font-semibold"
                >
                CREATORMAIL
            </motion.div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden cursor-pointer md:flex text-sm items-center space-x-8">
            <div className="relative group">
              <button className="flex items-center text-white hover:text-[#F9D75A] transition-colors">
                App <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute hidden group-hover:block w-48 bg-white rounded-lg shadow-lg mt-2 py-2">
                <a href="https://appdistribution.firebase.google.com/testerapps/1:480551064849:android:70ebca12e0e974e94768b0/releases/2rk83tv9cdjcg?utm_source=firebase-console" className="block px-4 py-2 hover:bg-gray-100">Android App</a>
                <a href="https://appdistribution.firebase.google.com/testerapps/1:480551064849:android:70ebca12e0e974e94768b0/releases/2rk83tv9cdjcg?utm_source=firebase-console" className="block px-4 py-2 hover:bg-gray-100">IOS App</a>
              </div>
            </div>
            <div className="relative group">
              <button className="flex items-center text-white hover:text-[#F9D75A] transition-colors">
                Community <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute hidden group-hover:block w-48 bg-white rounded-lg shadow-lg mt-2 py-2">
                <a href="https://x.com/creatormail_?t=EDyX8M6Q_d1Ubs3Qz3kKVQ&s=09" className="block px-4 py-2 hover:bg-gray-100">Forum (X)</a>
                <a href="https://x.com/creatormail_?t=EDyX8M6Q_d1Ubs3Qz3kKVQ&s=09" className="block px-4 py-2 hover:bg-gray-100">Blog</a>
              </div>
            </div>
            <a href="#work" className="text-white hover:text-[#F9D75A] transition-colors">
              Creatormail at Work
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex text-sm items-center space-x-">
            <a
              href="https://appdistribution.firebase.dev/i/e8ff3364adeac788"
              className="bg-[#e6e65c] w-[151px] h-[49px] flex items-center justify-center text-black rounded-lg hover:bg-opacity-90 transition-colors"
            >
              Get a demo
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
          transition={{ duration: 0.2 }}
        >
          <div className="pt-4 pb-3 space-y-3">
            <a href="#learn" className="block text-white hover:text-[#72E485]">
              Learn
            </a>
            <a href="#app" className="block text-white hover:text-[#72E485]">
              App
            </a>
            <a href="#community" className="block text-white hover:text-[#72E485]">
              Community
            </a>
            <a href="#work" className="block text-white hover:text-[#72E485]">
              Creatormail at Work
            </a>
            <div className="pt-4 space-y-3">
              <a
                href="#demo"
                className="block bg-[#72E485] text-black px-4 py-2 rounded-lg hover:bg-opacity-90 text-center"
              >
                Get a demo
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </nav>
  )
}

export default Navbar