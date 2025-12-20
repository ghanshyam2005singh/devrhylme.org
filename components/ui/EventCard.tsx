import { Calendar, MapPin, Clock, ExternalLink } from "lucide-react";
import Card from "./Card";
import Button from "./Button";
import { Event } from "@/lib/type";
import { formatDate } from "@/lib/utils";

interface EventCardProps {
  event: Event;
}

export default function EventCard({ event }: EventCardProps) {
  const getStatusColor = (status: Event["status"]) => {
    switch (status) {
      case "upcoming":
        return "bg-blue-100 text-blue-800";
      case "ongoing":
        return "bg-green-100 text-green-800";
      case "completed":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getTypeColor = (type: Event["type"]) => {
    switch (type) {
      case "online":
        return "bg-purple-100 text-purple-800";
      case "offline":
        return "bg-orange-100 text-orange-800";
      case "hybrid":
        return "bg-indigo-100 text-indigo-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <Card hover className="overflow-hidden h-full flex flex-col">
      {/* Event Image Placeholder */}
      <div className="w-full h-48 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center relative">
        <div className="text-4xl font-bold text-primary-600">
          {event.title.split(' ').slice(0, 2).map(w => w[0]).join('')}
        </div>
        <div className="absolute top-4 right-4 flex gap-2">
          <span className={`${getStatusColor(event.status)} text-xs font-semibold px-3 py-1 rounded-full capitalize`}>
            {event.status}
          </span>
          <span className={`${getTypeColor(event.type)} text-xs font-semibold px-3 py-1 rounded-full capitalize`}>
            {event.type}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-900 mb-3">
          {event.title}
        </h3>

        <p className="text-gray-600 mb-4 flex-grow">
          {event.description}
        </p>

        {/* Event Details */}
        <div className="space-y-2 mb-4">
          <div className="flex items-start text-sm text-gray-600">
            <Calendar size={16} className="mr-2 mt-0.5 flex-shrink-0" />
            <span>
              {formatDate(event.date)}
              {event.endDate && ` - ${formatDate(event.endDate)}`}
            </span>
          </div>

          <div className="flex items-start text-sm text-gray-600">
            <MapPin size={16} className="mr-2 mt-0.5 flex-shrink-0" />
            <span>{event.location}</span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {event.tags.map((tag) => (
            <span
              key={tag}
              className="bg-gray-100 text-gray-700 text-xs font-medium px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Button */}
        {event.status !== "completed" && event.registrationUrl && (
          <a
            href={event.registrationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto"
          >
            <Button className="w-full">
              Register Now
              <ExternalLink size={16} className="ml-2" />
            </Button>
          </a>
        )}

        {event.status === "completed" && (
          <div className="mt-auto">
            <Button variant="outline" className="w-full" disabled>
              Event Completed
            </Button>
          </div>
        )}
      </div>
    </Card>
  );
}