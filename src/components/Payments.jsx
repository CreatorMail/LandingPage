import { motion } from 'framer-motion'
import { ArrowRight, Bell, Send, Repeat, CreditCard, Eye } from 'lucide-react'

const QuickAction = ({ icon: Icon, label }) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="flex flex-col items-center gap-2 bg-white/5 hover:bg-white/10 p-4 rounded-2xl transition-colors"
  >
    <div className="w-12 h-12 flex items-center justify-center bg-[#e6e65c] rounded-xl">
      <Icon className="w-6 h-6 text-black" />
    </div>
    <span className="text-sm text-gray-400">{label}</span>
  </motion.button>
)

const Transaction = ({ avatar, name, action, amount, time }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ x: 5 }}
    className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors cursor-pointer"
  >
    <div className="w-10 h-10 rounded-full overflow-hidden bg-white/10 flex items-center justify-center">
      {avatar}
    </div>
    <div className="flex-1">
      <p className="text-white">
        <span className="font-medium">{name}</span>{' '}
        <span className="text-gray-400">just</span>{' '}
        <span className="text-[#e6e65c]">gifted</span>{' '}
        <span className="text-gray-400">you</span>
      </p>
      <p className="text-sm text-gray-500">{time}</p>
    </div>
    <p className="text-white font-medium">${amount}</p>
  </motion.div>
)

const Payments = () => {
  return (
    <section className="py-20 bg-[#0A0A0A] relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-4xl font-bold text-white mb-2">
                  Manage Payments
                </h2>
                <p className="text-gray-400">Track your transactions in real-time</p>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative"
              >
                <Bell className="w-6 h-6 text-gray-400" />
                <span className="absolute top-0 right-0 w-2 h-2 bg-[#e6e65c] rounded-full" />
              </motion.button>
            </div>

            <div className="bg-black/40 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-sm text-gray-400 flex items-center gap-2">
                    TOTAL BALANCE <Eye className="w-4 h-4" />
                  </p>
                  <h3 className="text-3xl font-bold text-white">$44,346.95</h3>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-[#e6e65c] text-black px-4 py-2 rounded-xl font-medium hover:bg-opacity-90 transition-colors"
                >
                  Add Money
                </motion.button>
              </div>

              <div className="grid grid-cols-4 gap-4 mb-8">
                <QuickAction icon={CreditCard} label="Buy" />
                <QuickAction icon={Send} label="Send" />
                <QuickAction icon={ArrowRight} label="Receive" />
                <QuickAction icon={Repeat} label="Swap" />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-white font-medium">Recent Transactions</h4>
                  <button className="text-[#e6e65c] text-sm">View all</button>
                </div>
                <Transaction
                  avatar="A"
                  name="Alex.ceo"
                  amount="100"
                  time="5hr ago"
                />
                <Transaction
                  avatar="Y"
                  name="You"
                  amount="100"
                  time="9hr ago"
                />
                <Transaction
                  avatar="A"
                  name="Alex.ceo"
                  amount="100"
                  time="12hr ago"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Side - Stats and Charts */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-black/40 backdrop-blur-xl rounded-2xl p-8 border border-white/10"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">Payment Statistics</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Total Sent", value: "$12,234" },
                  { label: "Total Received", value: "$32,112" },
                  { label: "Success Rate", value: "99.8%" },
                  { label: "Active Users", value: "2.5M+" }
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white/5 rounded-xl p-4"
                  >
                    <p className="text-gray-400 text-sm mb-1">{stat.label}</p>
                    <p className="text-xl font-bold text-white">{stat.value}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Payments