"use client";

import { Button } from "@/components/ui/Button";
import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import { Calendar, MapPin, Users, Clock, Plus, Filter, CheckCircle, AlertTriangle } from "lucide-react";

export default function EventsPage() {
  return (
    <>
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold mb-1">Industry Events</h1>
          <p className="text-sm text-foreground/70">
            Manage conferences, workshops, and member networking events.
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="shrink-0">
            <Filter className="w-4 h-4 mr-2" /> Filter
          </Button>
          <Button className="shrink-0">
            <Plus className="w-4 h-4 mr-2" /> Create Event
          </Button>
        </div>
      </div>

      {/* Event Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <Card className="p-4">
          <div className="flex items-center justify-between mb-2">
            <Calendar className="w-5 h-5 text-accent" />
            <span className="text-xs text-green-600 font-medium">This Month</span>
          </div>
          <div className="text-2xl font-bold">8</div>
          <div className="text-xs text-foreground/70">Upcoming Events</div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center justify-between mb-2">
            <Users className="w-5 h-5 text-blue-600" />
            <span className="text-xs text-blue-600 font-medium">Registered</span>
          </div>
          <div className="text-2xl font-bold">1,245</div>
          <div className="text-xs text-foreground/70">Total Attendees</div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center justify-between mb-2">
            <CheckCircle className="w-5 h-5 text-green-600" />
            <span className="text-xs text-green-600 font-medium">Completed</span>
          </div>
          <div className="text-2xl font-bold">24</div>
          <div className="text-xs text-foreground/70">Events This Year</div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center justify-between mb-2">
            <AlertTriangle className="w-5 h-5 text-orange-600" />
            <span className="text-xs text-orange-600 font-medium">Action Needed</span>
          </div>
          <div className="text-2xl font-bold">3</div>
          <div className="text-xs text-foreground/70">Pending Approvals</div>
        </Card>
      </div>

      {/* Upcoming Events */}
      <Card className="p-6 mb-6">
        <CardTitle>Upcoming Events</CardTitle>
        <CardDescription>Scheduled industry events and member gatherings</CardDescription>
        
        <div className="mt-6 space-y-4">
          {[
            {
              title: "Maharashtra Manufacturing Summit 2026",
              date: "Aug 25, 2026",
              time: "9:00 AM - 5:00 PM",
              location: "Pune Convention Center",
              type: "Conference",
              registered: 450,
              capacity: 500,
              status: "Registration Open",
              organizer: "Pune Chamber of Commerce"
            },
            {
              title: "EV Manufacturing Workshop",
              date: "Sep 10, 2026",
              time: "10:00 AM - 4:00 PM", 
              location: "MIT World Peace University",
              type: "Workshop",
              registered: 85,
              capacity: 100,
              status: "Registration Open",
              organizer: "Auto Components Manufacturers Association"
            },
            {
              title: "Quality Management Excellence Program",
              date: "Sep 22, 2026",
              time: "9:00 AM - 6:00 PM",
              location: "Hyatt Regency Pune",
              type: "Training Program",
              registered: 120,
              capacity: 150,
              status: "Limited Seats",
              organizer: "Maharashtra Industrial Association"
            }
          ].map((event) => (
            <div key={event.title} className="p-4 rounded-xl border border-border hover:bg-background/5/5 transition-colors">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold text-base">{event.title}</span>
                    <span className={`text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full ${
                      event.status === "Registration Open" ? "bg-green-100 text-green-700" :
                      event.status === "Limited Seats" ? "bg-orange-100 text-orange-700" :
                      "bg-gray-100 text-gray-700"
                    }`}>
                      {event.status}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-foreground/70 mb-2">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <div className="text-sm text-foreground/70">Organized by: {event.organizer}</div>
                </div>
                <div className="flex items-center gap-6 text-sm">
                  <div className="text-right">
                    <div className="text-foreground/70">Registered</div>
                    <div className="font-medium">{event.registered}/{event.capacity}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-foreground/70">Type</div>
                    <div className="font-medium">{event.type}</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-16 bg-background/5/10 rounded-full h-2 overflow-hidden border border-border/50">
                      <div 
                        className={`h-full rounded-full transition-all ${
                          (event.registered / event.capacity) > 0.9 ? "bg-red-500" :
                          (event.registered / event.capacity) > 0.7 ? "bg-orange-500" : "bg-green-500"
                        }`} 
                        style={{ width: `${(event.registered / event.capacity) * 100}%` }} 
                      />
                    </div>
                    <span className="text-xs font-medium">{Math.round((event.registered / event.capacity) * 100)}%</span>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center pt-3 border-t border-border/50">
                <div className="text-xs text-foreground/70">
                  Event ID: EVT-2026-{event.title.substring(0, 3).toUpperCase()} • Category: {event.type}
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="h-8">
                    Manage Event
                  </Button>
                  <Button size="sm" className="h-8">
                    View Registrations
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Event Analytics & Past Events */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <CardTitle>Event Performance</CardTitle>
          <CardDescription>Key metrics and attendance trends</CardDescription>
          
          <div className="mt-6 space-y-3">
            <div className="flex items-center justify-between p-3 rounded-lg bg-background/5/5 border border-border">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 bg-green-100 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <div className="text-sm font-medium">Average Attendance Rate</div>
                  <div className="text-xs text-foreground/70">Last 12 months</div>
                </div>
              </div>
              <div className="text-2xl font-bold text-green-600">87%</div>
            </div>

            <div className="flex items-center justify-between p-3 rounded-lg bg-background/5/5 border border-border">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Users className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <div className="text-sm font-medium">Member Participation</div>
                  <div className="text-xs text-foreground/70">Active members attended</div>
                </div>
              </div>
              <div className="text-2xl font-bold">62%</div>
            </div>

            <div className="flex items-center justify-between p-3 rounded-lg bg-background/5/5 border border-border">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Calendar className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <div className="text-sm font-medium">Events per Quarter</div>
                  <div className="text-xs text-foreground/70">Average frequency</div>
                </div>
              </div>
              <div className="text-2xl font-bold">6</div>
            </div>

            <div className="flex items-center justify-between p-3 rounded-lg bg-background/5/5 border border-border">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 bg-purple-100 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-purple-600" />
                </div>
                <div>
                  <div className="text-sm font-medium">Satisfaction Score</div>
                  <div className="text-xs text-foreground/70">Post-event feedback</div>
                </div>
              </div>
              <div className="text-2xl font-bold">4.7/5</div>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <CardTitle>Recent Past Events</CardTitle>
          <CardDescription>Recently completed industry events</CardDescription>
          
          <div className="mt-6 space-y-3">
            {[
              {
                title: "Automotive Supply Chain Conference",
                date: "Jul 15, 2026",
                attendees: 380,
                rating: 4.8,
                feedback: "Excellent networking opportunities"
              },
              {
                title: "Industry 4.0 Implementation Workshop",
                date: "Jun 28, 2026",
                attendees: 95,
                rating: 4.6,
                feedback: "Very informative content"
              },
              {
                title: "Quality Assurance Best Practices Seminar",
                date: "Jun 10, 2026",
                attendees: 220,
                rating: 4.5,
                feedback: "Good practical insights"
              },
              {
                title: "Member Networking Meetup",
                date: "May 22, 2026",
                attendees: 145,
                rating: 4.7,
                feedback: "Great connections made"
              }
            ].map((event) => (
              <div key={event.title} className="flex items-center gap-3 p-3 rounded-lg bg-background/5/5 border border-border">
                <div className="h-10 w-10 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-accent" />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium">{event.title}</div>
                  <div className="text-xs text-foreground/70">{event.date} • {event.attendees} attendees</div>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-1 text-yellow-500">
                    <span className="text-sm font-bold">{event.rating}</span>
                    <span className="text-xs">/5</span>
                  </div>
                  <div className="text-xs text-foreground/70 mt-1 max-w-24 truncate">{event.feedback}</div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </>
  );
}