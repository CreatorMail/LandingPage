import { useRef } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

const testimonials = [
  {
    id: 1,
    name: 'Ronald Richards',
    title: 'First Year of using CreatorMail',
    quote: 'Without the system and the support, I would have been canoeing without a paddle! Thanks for being my paddle, CreatorMail. 😄 👍 ✌️',
    amount: '$24,000',
    rating: 5,
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ronald'
  },
  {
    id: 2,
    name: 'Wade Warren',
    title: '3 Years of using CreatorMail',
    quote: 'When i got frustrated with Mint and its lack of flexibility. i found CreatorMail through some random blog post. I never looked back. 😄 👍 ✌️',
    amount: '$43,000',
    rating: 5,
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Wade'
  }
]

const TestimonialCard = ({ testimonial }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -5 }}
    className="bg-black/40 backdrop-blur-xl p-8 rounded-2xl border border-white/10 relative group"
  >
    {/* Glowing effect */}
    <div className="absolute -inset-px bg-gradient-to-r from-[#e6e65c]/20 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl blur transition-opacity" />
    
    <div className="relative z-10">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl overflow-hidden border-2 border-[#e6e65c]">
            <img
              src={testimonial.avatar || "/placeholder.svg"}
              alt={testimonial.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h4 className="font-bold text-white">{testimonial.name}</h4>
            <p className="text-gray-400 text-sm">{testimonial.title}</p>
          </div>
        </div>
        <Quote className="w-8 h-8 text-[#e6e65c] opacity-50" />
      </div>

      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <div className="flex gap-1">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-[#e6e65c] text-[#e6e65c]" />
            ))}
          </div>
          <span className="text-gray-400 text-sm">Verified User</span>
        </div>
        <h3 className="text-2xl font-bold text-[#e6e65c] mb-2">
          {testimonial.amount}
          <span className="text-sm text-gray-400 ml-2">lifetime earnings</span>
        </h3>
      </div>

      <p className="text-gray-300 leading-relaxed">{testimonial.quote}</p>
    </div>
  </motion.div>
)

const NavButton = ({ direction, onClick }) => (
  <motion.button
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    onClick={onClick}
    className="bg-black/40 backdrop-blur-xl text-white p-4 rounded-full border border-white/10 hover:border-[#e6e65c] transition-colors"
  >
    {direction === 'prev' ? (
      <ChevronLeft className="w-6 h-6" />
    ) : (
      <ChevronRight className="w-6 h-6" />
    )}
  </motion.button>
)

const Testimonials = () => {
  const swiperRef = useRef(null)

  return (
    <section className="py-20 bg-[#0A0A0A] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-[#e6e65c]/10 rounded-full blur-3xl"
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
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#e6e65c]/5 rounded-full blur-3xl"
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Our Customer Stories
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Join thousands of creators who trust our platform for their financial success
          </p>
        </motion.div>

        <div className="relative px-12">
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
                <TestimonialCard testimonial={testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
            <NavButton
              direction="prev"
              onClick={() => swiperRef.current.swiper.slidePrev()}
            />
          </div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10">
            <NavButton
              direction="next"
              onClick={() => swiperRef.current.swiper.slideNext()}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials