"use client";

import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Building2, Search, Filter, Star, MapPin, Award, CheckCircle, MessageCircle, FileText, TrendingUp } from "lucide-react";

export default function ClientSupplierMatching() {
  return (
    <>
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold mb-1">Supplier Matching</h1>
          <p className="text-sm text-foreground/70">
            Current list of suitable manufacturers matched to your requirements.
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="shrink-0">
            <Search className="w-4 h-4 mr-2" /> Advanced Search
          </Button>
          <Button className="shrink-0">
            Post New Requirement
          </Button>
        </div>
      </div>

      {/* Matching Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center">
              <Building2 className="h-5 w-5 text-accent" />
            </div>
            <div>
              <div className="text-2xl font-bold">12</div>
              <div className="text-xs text-foreground/70">Total Matches</div>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-green-100 flex items-center justify-center">
              <CheckCircle className="h-5 w-5 text-green-600" />
            </div>
            <div>
              <div className="text-2xl font-bold">8</div>
              <div className="text-xs text-foreground/70">High Match</div>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center">
              <Star className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <div className="text-2xl font-bold">4.8</div>
              <div className="text-xs text-foreground/70">Avg Rating</div>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-orange-100 flex items-center justify-center">
              <Award className="h-5 w-5 text-orange-600" />
            </div>
            <div>
              <div className="text-2xl font-bold">6</div>
              <div className="text-xs text-foreground/70">Certified</div>
            </div>
          </div>
        </Card>
      </div>

      {/* Filter Section */}
      <Card className="p-4 mb-6">
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <div className="flex-1 w-full flex items-center gap-2 bg-background/5/5 rounded-lg px-3 py-2 border border-border">
            <Search className="h-4 w-4 text-foreground/70" />
            <input
              type="text"
              placeholder="Search suppliers by company name, capability, or location..."
              className="bg-transparent border-none outline-none text-sm w-full"
            />
          </div>
          <Button variant="outline" className="w-full sm:w-auto shrink-0">
            <Filter className="w-4 h-4 mr-2" /> Filter by Capability
          </Button>
        </div>
      </Card>

      {/* Supplier Matches */}
      <div className="space-y-4">
        {[
          {
            company: "Precision Auto Components Ltd",
            location: "Pune, Maharashtra",
            capability: "CNC Machining, Sheet Metal, Surface Treatment",
            match: "95%",
            rating: 4.9,
            projects: 156,
            onTime: "98%",
            quality: "99.2%",
            certifications: ["ISO 9001", "IATF 16949", "ISO 14001"],
            status: "Available",
            capacity: "High",
            responseTime: "2 hours"
          },
          {
            company: "Bharat Electronics Manufacturing",
            location: "Bangalore, Karnataka",
            capability: "PCB Assembly, Testing, Electronics Integration",
            match: "92%",
            rating: 4.7,
            projects: 89,
            onTime: "96%",
            quality: "97.8%",
            certifications: ["ISO 9001", "IPC Standards"],
            status: "Available",
            capacity: "Medium",
            responseTime: "4 hours"
          },
          {
            company: "Pune Engineering Works",
            location: "Pune, Maharashtra",
            capability: "Heavy Fabrication, Welding, Structural Components",
            match: "88%",
            rating: 4.6,
            projects: 124,
            onTime: "94%",
            quality: "96.5%",
            certifications: ["ISO 9001", "Welding Certification"],
            status: "Limited",
            capacity: "Low",
            responseTime: "6 hours"
          },
          {
            company: "Sunrise Automotive Parts",
            location: "Chennai, Tamil Nadu",
            capability: "Die Casting, Surface Treatment, Precision Parts",
            match: "85%",
            rating: 4.5,
            projects: 78,
            onTime: "95%",
            quality: "97.1%",
            certifications: ["ISO 9001", "IATF 16949"],
            status: "Available",
            capacity: "Medium",
            responseTime: "3 hours"
          },
          {
            company: "Metro Manufacturing Solutions",
            location: "Gurgaon, Haryana",
            capability: "Assembly, Quality Control, Packaging",
            match: "82%",
            rating: 4.4,
            projects: 67,
            onTime: "93%",
            quality: "96.8%",
            certifications: ["ISO 9001"],
            status: "Available",
            capacity: "High",
            responseTime: "5 hours"
          },
          {
            company: "Elite Precision Engineering",
            location: "Coimbatore, Tamil Nadu",
            capability: "Precision Grinding, Heat Treatment, Inspection",
            match: "80%",
            rating: 4.8,
            projects: 92,
            onTime: "97%",
            quality: "98.5%",
            certifications: ["ISO 9001", "IATF 16949", "ISO 14001"],
            status: "Busy",
            capacity: "Very Low",
            responseTime: "8 hours"
          }
        ].map((supplier) => (
          <Card key={supplier.company} className="p-6 hover:shadow-md transition-shadow">
            <div className="flex flex-col lg:flex-row lg:items-start gap-6">
              <div className="flex-1">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-bold text-lg">{supplier.company}</h3>
                      <span className={`text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full ${
                        supplier.status === "Available" ? "bg-green-100 text-green-700" :
                        supplier.status === "Limited" ? "bg-orange-100 text-orange-700" :
                        "bg-red-100 text-red-700"
                      }`}>
                        {supplier.status}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-foreground/70 mb-2">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {supplier.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-500" />
                        {supplier.rating} ({supplier.projects} projects)
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-accent">{supplier.match}</div>
                    <div className="text-xs text-foreground/70">Match Score</div>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="text-xs text-foreground/70 mb-1">Capabilities</div>
                  <div className="text-sm font-medium">{supplier.capability}</div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  <div>
                    <div className="text-xs text-foreground/70 mb-1">On-Time Delivery</div>
                    <div className="text-sm font-medium text-green-600">{supplier.onTime}</div>
                  </div>
                  <div>
                    <div className="text-xs text-foreground/70 mb-1">Quality Score</div>
                    <div className="text-sm font-medium text-accent">{supplier.quality}</div>
                  </div>
                  <div>
                    <div className="text-xs text-foreground/70 mb-1">Current Capacity</div>
                    <div className="text-sm font-medium">{supplier.capacity}</div>
                  </div>
                  <div>
                    <div className="text-xs text-foreground/70 mb-1">Response Time</div>
                    <div className="text-sm font-medium">{supplier.responseTime}</div>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="text-xs text-foreground/70 mb-2">Certifications</div>
                  <div className="flex flex-wrap gap-2">
                    {supplier.certifications.map((cert) => (
                      <span key={cert} className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-700 border border-green-200">
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex lg:flex-col gap-2 lg:w-48">
                <Button className="flex-1">
                  <MessageCircle className="h-4 w-4 mr-2" /> Contact
                </Button>
                <Button variant="outline" className="flex-1">
                  <FileText className="h-4 w-4 mr-2" /> Request Quote
                </Button>
                <Button variant="outline" className="flex-1">
                  <Building2 className="h-4 w-4 mr-2" /> View Profile
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* No Results State (hidden when there are results) */}
      {false && (
        <Card className="p-12 text-center">
          <Building2 className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-bold mb-2">No Supplier Matches Found</h3>
          <p className="text-sm text-foreground/70 mb-4">
            Try adjusting your search criteria or post a new requirement.
          </p>
          <Button>
            Post New Requirement
          </Button>
        </Card>
      )}
    </>
  );
}