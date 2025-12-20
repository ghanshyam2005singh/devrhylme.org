import { Metadata } from "next";
import Link from "next/link";
import { BookOpen, Code, Rocket, FileText, GitBranch, Users } from "lucide-react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Documentation - DevRhylme Foundation",
  description: "Learn how to contribute to DevRhylme projects and get started with our tools.",
};

const docCategories = [
  {
    icon: Rocket,
    title: "Getting Started",
    description: "Learn the basics and set up your development environment.",
    link: "/docs/getting-started",
    articles: ["Installation", "Quick Start", "First Contribution"],
  },
  {
    icon: Code,
    title: "Contributing Guide",
    description: "Step-by-step guide to contributing to our projects.",
    link: "/docs/contributing",
    articles: ["Code of Conduct", "Pull Requests", "Coding Standards"],
  },
  {
    icon: GitBranch,
    title: "Project Guidelines",
    description: "Best practices and guidelines for project development.",
    link: "/docs/guidelines",
    articles: ["Git Workflow", "Testing", "Documentation"],
  },
  {
    icon: Users,
    title: "Community",
    description: "Learn about our community and how to get involved.",
    link: "/docs/community",
    articles: ["Code of Conduct", "Communication", "Events"],
  },
  {
    icon: FileText,
    title: "API Reference",
    description: "Detailed API documentation for our projects.",
    link: "/docs/api",
    articles: ["REST API", "WebSocket", "Authentication"],
  },
  {
    icon: BookOpen,
    title: "Tutorials",
    description: "Step-by-step tutorials and examples.",
    link: "/docs/tutorials",
    articles: ["Building Apps", "Deployment", "Advanced Topics"],
  },
];

export default function DocsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Documentation
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Everything you need to know about contributing to DevRhylme projects 
              and using our tools effectively.
            </p>
            {/* Search Bar */}
            <div className="max-w-xl mx-auto">
              <input
                type="text"
                placeholder="Search documentation..."
                className="w-full px-6 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Documentation Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {docCategories.map((category) => {
              const Icon = category.icon;
              return (
                <Link key={category.title} href={category.link}>
                  <Card hover className="p-6 h-full">
                    <div className="w-14 h-14 bg-primary-100 text-primary-600 rounded-xl flex items-center justify-center mb-4">
                      <Icon size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {category.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {category.description}
                    </p>
                    <ul className="space-y-2">
                      {category.articles.map((article) => (
                        <li key={article} className="text-sm text-primary-600 hover:text-primary-700">
                          → {article}
                        </li>
                      ))}
                    </ul>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Popular Resources
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Link href="/docs/getting-started">
              <Card hover className="p-6 text-center">
                <h3 className="font-bold text-gray-900 mb-2">Quick Start</h3>
                <p className="text-sm text-gray-600">Get up and running in 5 minutes</p>
              </Card>
            </Link>
            <Link href="/docs/contributing">
              <Card hover className="p-6 text-center">
                <h3 className="font-bold text-gray-900 mb-2">Contribution Guide</h3>
                <p className="text-sm text-gray-600">Make your first contribution</p>
              </Card>
            </Link>
            <Link href="/docs/api">
              <Card hover className="p-6 text-center">
                <h3 className="font-bold text-gray-900 mb-2">API Reference</h3>
                <p className="text-sm text-gray-600">Complete API documentation</p>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Can&apos;t Find What You&apos;re Looking For?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Reach out to our community or contact us directly for help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/community">
              <Button size="lg" variant="secondary">
                Join Community
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Contact Support
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}