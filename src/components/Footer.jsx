import { motion } from 'framer-motion'
import { Twitter, Instagram, DiscIcon as Discord, ArrowRight } from 'lucide-react'

const Footer = () => {
  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Discord, href: '#', label: 'Discord' },
  ]

  const footerLinks = {
    'Company': ['About', 'Careers', 'Blog'],
    'Product': ['Features', 'Pricing', 'Security'],
    'Resources': ['Documentation', 'Help Center', 'Contact'],
    'Legal': ['Privacy Policy', 'Terms of Service', 'Cookie Policy'],
  }

  return (
    <footer className="bg-black text-white pt-20 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-12 pb-12">
          {/* Logo and Social Section */}
          <div className="md:col-span-2 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <img src="/logo.svg" alt="Unine" className="h-8" />
              <p className="text-gray-400 mt-4 max-w-sm">
                The next-generation crypto wallet for creators and their communities.
              </p>
            </motion.div>

            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/5 hover:bg-white/10 p-3 rounded-xl border border-white/10 group transition-colors"
                >
                  <social.icon className="w-5 h-5 text-gray-400 group-hover:text-[#e6e65c]" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <div key={category} className="space-y-4">
              <motion.h4
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1 }}
                className="text-sm font-medium text-gray-400"
              >
                {category}
              </motion.h4>
              <ul className="space-y-3">
                {links.map((link, linkIndex) => (
                  <motion.li
                    key={link}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (categoryIndex * 0.1) + (linkIndex * 0.05) }}
                  >
                    <a
                      href="#"
                      className="text-gray-300 hover:text-[#e6e65c] transition-colors"
                    >
                      {link}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-gray-400 text-sm">
            © 2024 Unine. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-gray-400 hover:text-[#e6e65c] text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-[#e6e65c] text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
  
  export default Footer