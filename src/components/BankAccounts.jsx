import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const BankAccounts = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <h2 className="text-3xl font-bold mb-4">Bank Accounts</h2>
            <p className="text-gray-600 mb-4">
              High interest, FDIC insured checking for individuals and businesses
            </p>
            <button className="flex items-center text-[#72E485] hover:underline">
              Learn more <ArrowRight className="ml-2 w-4 h-4" />
            </button>
            <div className="mt-8">
              <div className="relative">
                <img 
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-g6Rp0EVvr0L1SKx4fPBB0MzXkKZhJC.png" 
                  alt="Balance Graph" 
                  className="w-full rounded-lg"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4 flex items-center">
              Keep your cash flow clear 🚀
              <br />
              and keep increasing 🚀
            </h2>
            <p className="text-gray-600 mb-8">
              See it all at a glance when you link your cash accounts, credit cards, investment, and bills.
            </p>
            <button className="bg-[#72E485] text-black px-6 py-3 rounded-lg hover:bg-opacity-90 transition-colors">
              Try for now
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default BankAccounts