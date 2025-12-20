"use client";

import { motion } from "framer-motion";
import { Users, GitBranch, Star, Calendar } from "lucide-react";

const stats = [
  {
    icon: GitBranch,
    value: "50+",
    label: "Open Source Projects",
    description: "Active repositories",
  },
  {
    icon: Users,
    value: "500+",
    label: "Contributors",
    description: "From around the world",
  },
  {
    icon: Star,
    value: "15K+",
    label: "GitHub Stars",
    description: "Across all projects",
  },
  {
    icon: Calendar,
    value: "100+",
    label: "Events Hosted",
    description: "Workshops & meetups",
  },
];

export default function Stats() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Making an Impact
          </h2>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            Our community continues to grow and make meaningful contributions to the open-source ecosystem.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl mb-4">
                  <Icon size={32} />
                </div>
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {stat.value}
                </div>
                <div className="text-xl font-semibold mb-1">
                  {stat.label}
                </div>
                <div className="text-primary-200 text-sm">
                  {stat.description}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}