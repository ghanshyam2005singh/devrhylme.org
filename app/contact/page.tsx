import { Metadata } from "next";
import { Mail, MapPin, Phone, MessageCircle } from "lucide-react";
import Card from "@/components/ui/Card";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us - DevRhylme Foundation",
  description: "Get in touch with DevRhylme Foundation. We'd love to hear from you!",
};

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    details: "contact@devrhylme.org",
    link: "mailto:contact@devrhylme.org",
  },
  {
    icon: MessageCircle,
    title: "Community",
    details: "Join our Discord",
    link: "#",
  },
  {
    icon: MapPin,
    title: "Location",
    details: "Global - Remote First",
    link: null,
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Have a question or want to collaborate? We&apos;d love to hear from you. 
              Send us a message and we&apos;ll respond as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Contact Information
              </h2>
              <p className="text-gray-600 mb-8">
                Feel free to reach out through any of these channels. 
                We&apos;re here to help!
              </p>

              <div className="space-y-6">
                {contactInfo.map((info) => {
                  const Icon = info.icon;
                  const content = (
                    <Card className="p-4 flex items-start hover:shadow-md transition-shadow">
                      <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon size={24} />
                      </div>
                      <div className="ml-4">
                        <h3 className="font-semibold text-gray-900 mb-1">
                          {info.title}
                        </h3>
                        <p className="text-gray-600 text-sm">{info.details}</p>
                      </div>
                    </Card>
                  );

                  return info.link ? (
                    <a key={info.title} href={info.link}>
                      {content}
                    </a>
                  ) : (
                    <div key={info.title}>{content}</div>
                  );
                })}
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Send us a Message
                </h2>
                <ContactForm />
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}