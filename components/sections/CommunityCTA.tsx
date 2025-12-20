"use client";

import Link from "next/link";
import Button from "@/components/ui/Button";
import { ArrowRight, Github, MessageCircle, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

const ctaCards = [
  {
    icon: Github,
    title: "Contribute to Projects",
    description: "Start contributing to our open-source projects and make an impact.",
    link: "/projects",
    linkText: "Browse Projects",
  },
  {
    icon: MessageCircle,
    title: "Join the Community",
    description: "Connect with fellow developers, ask questions, and share knowledge.",
    link: "/community",
    linkText: "Join Now",
  },
  {
    icon: BookOpen,
    title: "Read Documentation",
    description: "Learn how to get started with our projects and contribution guidelines.",
    link: "/docs",
    linkText: "View Docs",
  },
];

export default function CommunityCTA() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get Involved
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join our growing community of developers and start making a difference today.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {ctaCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-primary-100 text-primary-600 rounded-xl mb-4">
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {card.description}
                </p>
                <Link
                  href={card.link}
                  className="text-primary-600 hover:text-primary-700 font-semibold inline-flex items-center group"
                >
                  {card.linkText}
                  <ArrowRight 
                    size={18} 
                    className="ml-2 group-hover:translate-x-1 transition-transform" 
                  />
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Newsletter CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 md:p-12 text-white text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Stay Updated
          </h3>
          <p className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and get the latest updates on projects, events, and community news.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-300"
            />
            <Button variant="secondary" size="lg">
              Subscribe
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}