"use client";

import { Target, Users, Code, Rocket } from "lucide-react";
import Card from "@/components/ui/Card";
import { motion } from "framer-motion";

const values = [
  {
    icon: Target,
    title: "Open Innovation",
    description: "We believe in transparent development and collaborative problem-solving.",
  },
  {
    icon: Users,
    title: "Community First",
    description: "Building a supportive ecosystem where everyone can learn and contribute.",
  },
  {
    icon: Code,
    title: "Quality Code",
    description: "Maintaining high standards while making development accessible to all.",
  },
  {
    icon: Rocket,
    title: "Impact Driven",
    description: "Creating tools and solutions that make a real difference in developers' lives.",
  },
];

export default function Mission() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our Mission
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            To empower developers worldwide by creating innovative open-source solutions,
            fostering a collaborative community, and making technology accessible to everyone.
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 text-center h-full">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-2xl mb-4">
                    <Icon size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}