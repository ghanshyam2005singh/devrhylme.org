import { Metadata } from "next";
import { Target, Users, Globe, Heart } from "lucide-react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us - DevRhylme Foundation",
  description: "Learn about DevRhylme Foundation's mission, vision, and the team behind our open-source initiatives.",
};

const milestones = [
  {
    year: "2020",
    title: "Foundation Established",
    description: "DevRhylme Foundation was founded with a vision to democratize technology through open source.",
  },
  {
    year: "2021",
    title: "First Major Project",
    description: "Launched our first flagship project that gained 1000+ stars on GitHub.",
  },
  {
    year: "2022",
    title: "Community Growth",
    description: "Reached 100+ active contributors and hosted our first annual conference.",
  },
  {
    year: "2023",
    title: "Global Impact",
    description: "Expanded to 50+ projects with contributors from 30+ countries worldwide.",
  },
  {
    year: "2024",
    title: "Innovation Hub",
    description: "Established partnerships with leading tech companies and educational institutions.",
  },
];

const coreValues = [
  {
    icon: Target,
    title: "Transparency",
    description: "We believe in open communication and transparent decision-making processes.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Building together is better. We foster a culture of teamwork and mutual support.",
  },
  {
    icon: Globe,
    title: "Accessibility",
    description: "Making technology accessible to everyone, regardless of background or location.",
  },
  {
    icon: Heart,
    title: "Community",
    description: "Our community is our strength. We prioritize inclusivity and diversity.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About DevRhylme Foundation
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              We are a community-driven organization dedicated to creating impactful 
              open-source solutions that empower developers worldwide and make 
              technology accessible to everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="p-8">
              <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-2xl flex items-center justify-center mb-6">
                <Target size={32} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Our Mission
              </h2>
              <p className="text-gray-600 leading-relaxed">
                To empower developers worldwide by creating innovative open-source 
                solutions, fostering a collaborative community, and making technology 
                accessible to everyone. We strive to build tools that solve real-world 
                problems and create opportunities for learning and growth.
              </p>
            </Card>

            <Card className="p-8">
              <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-2xl flex items-center justify-center mb-6">
                <Globe size={32} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Our Vision
              </h2>
              <p className="text-gray-600 leading-relaxed">
                To be a leading force in the open-source ecosystem, where innovation 
                meets collaboration. We envision a world where technology is truly 
                open and accessible, and where every developer has the opportunity to 
                contribute to meaningful projects that impact millions of lives.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do and shape our community culture.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value) => {
              const Icon = value.icon;
              return (
                <Card key={value.title} className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-primary-100 text-primary-600 rounded-xl mb-4">
                    <Icon size={28} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {value.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From humble beginnings to a thriving global community.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary-200"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div className="w-full md:w-5/12">
                    <Card className={`p-6 ${index % 2 === 0 ? "md:mr-8" : "md:ml-8"}`}>
                      <div className="text-primary-600 font-bold text-sm mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600">
                        {milestone.description}
                      </p>
                    </Card>
                  </div>

                  {/* Center Dot */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg"></div>

                  {/* Spacer */}
                  <div className="hidden md:block w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Passionate individuals working together to make open source accessible to everyone.
            </p>
          </div>

          <div className="text-center">
            <Link href="/team">
              <Button size="lg">
                View Full Team
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Want to Be Part of Our Story?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Join our community and help us build the future of open source.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/community">
              <Button size="lg" variant="secondary">
                Join Community
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}