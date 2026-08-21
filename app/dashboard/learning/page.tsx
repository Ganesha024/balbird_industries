"use client";

import { Button } from "@/components/ui/Button";
import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import { BookOpen, GraduationCap, Award, Clock, PlayCircle, CheckCircle, TrendingUp, Target } from "lucide-react";

export default function LearningPage() {
  return (
    <>
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold mb-1">Learning Center</h1>
          <p className="text-sm text-foreground/70">
            Access courses, certifications, and learning resources.
          </p>
        </div>
        <Button className="shrink-0">
          <BookOpen className="w-4 h-4 mr-2" /> Browse Courses
        </Button>
      </div>

      {/* Learning Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <Card className="p-4">
          <div className="flex items-center justify-between mb-2">
            <BookOpen className="w-5 h-5 text-accent" />
            <span className="text-xs text-green-600 font-medium">Active</span>
          </div>
          <div className="text-2xl font-bold">3</div>
          <div className="text-xs text-foreground/70">Enrolled Courses</div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center justify-between mb-2">
            <GraduationCap className="w-5 h-5 text-blue-600" />
            <span className="text-xs text-blue-600 font-medium">Completed</span>
          </div>
          <div className="text-2xl font-bold">5</div>
          <div className="text-xs text-foreground/70">Certifications Earned</div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center justify-between mb-2">
            <Clock className="w-5 h-5 text-green-600" />
            <span className="text-xs text-green-600 font-medium">This Month</span>
          </div>
          <div className="text-2xl font-bold">42h</div>
          <div className="text-xs text-foreground/70">Learning Hours</div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center justify-between mb-2">
            <Award className="w-5 h-5 text-yellow-600" />
            <span className="text-xs text-yellow-600 font-medium">Excellent</span>
          </div>
          <div className="text-2xl font-bold">4.8</div>
          <div className="text-xs text-foreground/70">Average Score</div>
        </Card>
      </div>

      {/* Active Courses */}
      <Card className="p-6 mb-6">
        <CardTitle>Active Courses</CardTitle>
        <CardDescription>Currently enrolled learning programs</CardDescription>
        
        <div className="mt-6 space-y-4">
          {[
            {
              title: "Manufacturing Operations Fundamentals",
              instructor: "Dr. Rajesh Sharma",
              program: "Manufacturing Execution Program",
              progress: 65,
              totalModules: 12,
              completedModules: 8,
              dueDate: "Aug 25, 2026",
              nextLesson: "Quality Control Systems",
              timeSpent: "18 hours",
              status: "On Track"
            },
            {
              title: "Quality Assurance & Compliance",
              instructor: "Ms. Priya Patel",
              program: "Quality Assurance Training",
              progress: 40,
              totalModules: 10,
              completedModules: 4,
              dueDate: "Sep 15, 2026",
              nextLesson: "IATF 16949 Standards",
              timeSpent: "12 hours",
              status: "On Track"
            },
            {
              title: "Supply Chain Management",
              instructor: "Mr. Amit Kumar",
              program: "Operations Management",
              progress: 25,
              totalModules: 8,
              completedModules: 2,
              dueDate: "Oct 01, 2026",
              nextLesson: "Inventory Optimization",
              timeSpent: "6 hours",
              status: "Behind Schedule"
            }
          ].map((course) => (
            <div key={course.title} className="p-4 rounded-xl border border-border hover:bg-background/5/5 transition-colors">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold text-base">{course.title}</span>
                    <span className={`text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full ${
                      course.status === "On Track" ? "bg-green-100 text-green-700" : "bg-orange-100 text-orange-700"
                    }`}>
                      {course.status}
                    </span>
                  </div>
                  <div className="text-sm text-foreground/70 mb-1">Instructor: {course.instructor}</div>
                  <div className="text-sm text-foreground/70">{course.program}</div>
                </div>
                <div className="flex items-center gap-6 text-sm">
                  <div className="text-right">
                    <div className="text-foreground/70">Progress</div>
                    <div className="font-medium">{course.completedModules}/{course.totalModules} modules</div>
                  </div>
                  <div className="text-right">
                    <div className="text-foreground/70">Time Spent</div>
                    <div className="font-medium">{course.timeSpent}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-foreground/70">Due Date</div>
                    <div className="font-medium">{course.dueDate}</div>
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <div className="flex justify-between items-center text-xs mb-1">
                  <span className="text-foreground/70">Course Progress</span>
                  <span className="font-medium">{course.progress}%</span>
                </div>
                <div className="w-full bg-background/5/10 rounded-full h-2 overflow-hidden border border-border/50">
                  <div className={`h-full rounded-full transition-all ${
                    course.status === "Behind Schedule" ? "bg-orange-500" : "bg-accent"
                  }`} style={{ width: `${course.progress}%` }} />
                </div>
              </div>
              <div className="flex justify-between items-center mt-3 pt-3 border-t border-border/50">
                <div className="text-xs text-foreground/70">
                  Next: {course.nextLesson}
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="h-8">
                    <PlayCircle className="w-3 h-3 mr-1.5" /> Resume
                  </Button>
                  <Button size="sm" className="h-8">
                    View Details
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Certifications & Recommended */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <CardTitle>Earned Certifications</CardTitle>
          <CardDescription>Your completed certifications and achievements</CardDescription>
          
          <div className="mt-6 space-y-3">
            {[
              {
                name: "Manufacturing Fundamentals",
                issuer: "Balbird Industries",
                date: "Jul 15, 2026",
                score: "95%",
                badge: "Bronze"
              },
              {
                name: "Quality Management Basics",
                issuer: "Balbird Industries",
                date: "Jun 28, 2026",
                score: "92%",
                badge: "Silver"
              },
              {
                name: "Safety Protocols Training",
                issuer: "Safety First Association",
                date: "Jun 10, 2026",
                score: "98%",
                badge: "Gold"
              },
              {
                name: "Supply Chain Introduction",
                issuer: "Balbird Industries",
                date: "May 22, 2026",
                score: "88%",
                badge: "Bronze"
              }
            ].map((cert) => (
              <div key={cert.name} className="flex items-center gap-3 p-3 rounded-lg bg-background/5/5 border border-border">
                <div className={`h-10 w-10 rounded-lg flex items-center justify-center ${
                  cert.badge === "Gold" ? "bg-yellow-100" :
                  cert.badge === "Silver" ? "bg-gray-100" :
                  "bg-orange-100"
                }`}>
                  <Award className={`w-5 h-5 ${
                    cert.badge === "Gold" ? "text-yellow-600" :
                    cert.badge === "Silver" ? "text-gray-600" :
                    "text-orange-600"
                  }`} />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium">{cert.name}</div>
                  <div className="text-xs text-foreground/70">{cert.issuer} • {cert.date}</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-bold text-green-600">{cert.score}</div>
                  <div className="text-xs text-foreground/70">{cert.badge}</div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <CardTitle>Recommended Learning</CardTitle>
          <CardDescription>Suggested courses based on your progress</CardDescription>
          
          <div className="mt-6 space-y-3">
            {[
              {
                title: "Advanced Manufacturing Technologies",
                duration: "8 weeks",
                level: "Intermediate",
                reason: "Based on your operations progress"
              },
              {
                title: "Lean Manufacturing Principles",
                duration: "6 weeks",
                level: "Beginner",
                reason: "Complements your current courses"
              },
              {
                title: "Digital Manufacturing & Industry 4.0",
                duration: "10 weeks",
                level: "Advanced",
                reason: "Next step in your learning path"
              },
              {
                title: "Project Management for Manufacturing",
                duration: "4 weeks",
                level: "Intermediate",
                reason: "Skill gap identified"
              }
            ].map((course) => (
              <div key={course.title} className="flex items-center gap-3 p-3 rounded-lg bg-background/5/5 border border-border">
                <div className="h-10 w-10 bg-accent/10 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-accent" />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium">{course.title}</div>
                  <div className="text-xs text-foreground/70">{course.duration} • {course.level}</div>
                </div>
                <Button size="sm" variant="outline" className="h-8 text-xs">
                  Enroll
                </Button>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </>
  );
}