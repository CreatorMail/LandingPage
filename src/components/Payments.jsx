import { motion } from 'framer-motion'

const Payments = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4 flex items-center">
              Manage regular payments easily 😜
            </h2>
            <div className="grid grid-cols-2 gap-8 mt-8">
              <div>
                <h3 className="text-xl font-bold mb-2">Globality</h3>
                <p className="text-gray-600">
                  Send payments to the person in front of you and the rest of the world.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Integrate</h3>
                <p className="text-gray-600">
                  We work with local banks and overseas banks so you don't have to world.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <img 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-6R8eJxbtf1I9iKMI6XRgi2rifz3Vo4.png" 
              alt="Payment Interface" 
              className="w-full rounded-2xl shadow-lg"
            />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              <div className="w-2 h-2 rounded-full bg-[#72E485]"></div>
              <div className="w-2 h-2 rounded-full bg-gray-300"></div>
              <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Payments