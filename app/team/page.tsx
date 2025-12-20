import { Metadata } from "next";
import Image from "next/image";
import { Github, Linkedin, Twitter, Mail, ExternalLink } from "lucide-react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Team - DevRhylme Foundation",
  description: "Meet the passionate individuals behind DevRhylme Foundation and our amazing community of contributors.",
};

const coreTeam = [
  {
    id: "1",
    name: "John Doe",
    role: "Founder & Lead Developer",
    bio: "Passionate about open source and building communities. 10+ years of experience in software development.",
    image: "/images/team/placeholder.jpg",
    github: "https://github.com/johndoe",
    linkedin: "https://linkedin.com/in/johndoe",
    twitter: "https://twitter.com/johndoe",
  },
  {
    id: "2",
    name: "Jane Smith",
    role: "Technical Lead",
    bio: "Full-stack developer with expertise in modern web technologies and DevOps practices.",
    image: "/images/team/placeholder.jpg",
    github: "https://github.com/janesmith",
    linkedin: "https://linkedin.com/in/janesmith",
  },
  {
    id: "3",
    name: "Mike Johnson",
    role: "Community Manager",
    bio: "Building and nurturing developer communities worldwide. Organizing events and workshops.",
    image: "/images/team/placeholder.jpg",
    github: "https://github.com/mikejohnson",
    twitter: "https://twitter.com/mikejohnson",
  },
  {
    id: "4",
    name: "Sarah Williams",
    role: "Documentation Lead",
    bio: "Technical writer and developer advocate. Making complex topics easy to understand.",
    image: "/images/team/placeholder.jpg",
    github: "https://github.com/sarahwilliams",
    linkedin: "https://linkedin.com/in/sarahwilliams",
  },
];

const topContributors = [
  {
    id: "1",
    name: "Alex Chen",
    contributions: 150,
    avatar: "/images/contributors/placeholder.jpg",
    github: "https://github.com/alexchen",
  },
  {
    id: "2",
    name: "Maria Garcia",
    contributions: 120,
    avatar: "/images/contributors/placeholder.jpg",
    github: "https://github.com/mariagarcia",
  },
  {
    id: "3",
    name: "David Kim",
    contributions: 95,
    avatar: "/images/contributors/placeholder.jpg",
    github: "https://github.com/davidkim",
  },
  {
    id: "4",
    name: "Emma Brown",
    contributions: 88,
    avatar: "/images/contributors/placeholder.jpg",
    github: "https://github.com/emmabrown",
  },
  {
    id: "5",
    name: "James Wilson",
    contributions: 76,
    avatar: "/images/contributors/placeholder.jpg",
    github: "https://github.com/jameswilson",
  },
  {
    id: "6",
    name: "Olivia Martinez",
    contributions: 65,
    avatar: "/images/contributors/placeholder.jpg",
    github: "https://github.com/oliviamartinez",
  },
];

export default function TeamPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Meet Our Team
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              A diverse group of passionate individuals working together to build 
              amazing open-source projects and foster a thriving community.
            </p>
          </div>
        </div>
      </section>

      {/* Core Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Core Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The dedicated individuals leading DevRhylme Foundation&apos;s mission and initiatives.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreTeam.map((member) => (
              <Card key={member.id} hover className="p-6 text-center">
                <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200">
                  {/* Placeholder for images */}
                  <div className="w-full h-full flex items-center justify-center text-4xl font-bold text-gray-400">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-primary-600 font-medium text-sm mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm mb-4">
                  {member.bio}
                </p>

                <div className="flex justify-center space-x-3">
                  {member.github && (
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-primary-600 transition-colors"
                    >
                      <Github size={20} />
                    </a>
                  )}
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-primary-600 transition-colors"
                    >
                      <Linkedin size={20} />
                    </a>
                  )}
                  {member.twitter && (
                    <a
                      href={member.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-primary-600 transition-colors"
                    >
                      <Twitter size={20} />
                    </a>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Top Contributors */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Top Contributors
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Amazing community members who have made significant contributions to our projects.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topContributors.map((contributor, index) => (
              <Card key={contributor.id} className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center text-xl font-bold text-gray-400">
                      {contributor.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-primary-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                      {index + 1}
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-1">
                      {contributor.name}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {contributor.contributions} contributions
                    </p>
                  </div>

                  <a
                    href={contributor.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-primary-600 transition-colors"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              We have <span className="font-bold text-primary-600">500+</span> amazing contributors!
            </p>
            <a
              href="https://github.com/devrhylme"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" variant="outline">
                <Github className="mr-2" size={20} />
                View All on GitHub
                <ExternalLink className="ml-2" size={16} />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Our Team
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            We&apos;re always looking for passionate individuals to join our mission. 
            Whether you&apos;re a developer, designer, writer, or community enthusiast, 
            there&apos;s a place for you here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/community">
              <Button size="lg" variant="secondary">
                Start Contributing
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Mail className="mr-2" size={20} />
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}