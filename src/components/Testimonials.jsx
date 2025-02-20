import { useRef } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

const testimonials = [
  {
    id: 1,
    name: 'Ronald Richards',
    title: 'First Year of using UNINE',
    quote: 'Without the system and the support, I would have been canoeing without a paddle! Thanks for being my paddle, UNINE. 😄 👍 ✌️',
    amount: '$24,000 first year'
  },
  {
    id: 2,
    name: 'Wade Warren',
    title: '3 Years of using UNINE',
    quote: 'When i got frustrated with Mint and its lack of flexibility. i found YNAB through some random blog post. I never looked back. 😄 👍 ✌️',
    amount: 'My net worth is already $43k'
  }
]

const Testimonials = () => {
  const swiperRef = useRef(null)

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Our Customer Says
        </motion.h2>

        <div className="relative">
          <Swiper
            ref={swiperRef}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              768: {
                slidesPerView: 2
              }
            }}
            className="py-8"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-2xl shadow-lg"
                >
                  <h3 className="text-2xl font-bold mb-4">{testimonial.amount}</h3>
                  <p className="text-gray-600 mb-6">{testimonial.quote}</p>
                  <div className="flex items-center">
                    <img
                      src="/placeholder.svg"
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-bold">{testimonial.name}</h4>
                      <p className="text-gray-600">{testimonial.title}</p>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          <button
            onClick={() => swiperRef.current.swiper.slidePrev()}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => swiperRef.current.swiper.slideNext()}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Testimonials