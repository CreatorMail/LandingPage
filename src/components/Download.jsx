import { motion } from 'framer-motion'

const Download = () => {
  return (
    <section className="bg-[#72E485] py-20">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get Unine App on Google play or App store
          </h2>
          <p className="text-lg mb-8">
            Build your financial literacy within a transparent community.
            Follow other investors, share insights with people.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#" className="hover:opacity-80 transition-opacity">
              <img
                src="/app-store.svg"
                alt="Download on the App Store"
                className="h-12"
              />
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity">
              <img
                src="/google-play.svg"
                alt="Get it on Google Play"
                className="h-12"
              />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Download