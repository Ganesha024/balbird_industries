"use client";

import { Button } from "@/components/ui/Button";
import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import { ClipboardCheck, Clock, CheckCircle, AlertTriangle, Plus, Filter, Target, BookOpen } from "lucide-react";

export default function TasksPage() {
  return (
    <>
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold mb-1">My Tasks</h1>
          <p className="text-sm text-foreground/70">
            Track your assigned tasks and learning activities.
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="shrink-0">
            <Filter className="w-4 h-4 mr-2" /> Filter
          </Button>
          <Button className="shrink-0">
            <Plus className="w-4 h-4 mr-2" /> New Task
          </Button>
        </div>
      </div>

      {/* Task Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <Card className="p-4">
          <div className="flex items-center justify-between mb-2">
            <ClipboardCheck className="w-5 h-5 text-accent" />
            <span className="text-xs text-green-600 font-medium">This Week</span>
          </div>
          <div className="text-2xl font-bold">12</div>
          <div className="text-xs text-foreground/70">Total Tasks</div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center justify-between mb-2">
            <Clock className="w-5 h-5 text-blue-600" />
            <span className="text-xs text-blue-600 font-medium">In Progress</span>
          </div>
          <div className="text-2xl font-bold">5</div>
          <div className="text-xs text-foreground/70">Active Tasks</div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center justify-between mb-2">
            <CheckCircle className="w-5 h-5 text-green-600" />
            <span className="text-xs text-green-600 font-medium">Completed</span>
          </div>
          <div className="text-2xl font-bold">7</div>
          <div className="text-xs text-foreground/70">Tasks Done</div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center justify-between mb-2">
            <AlertTriangle className="w-5 h-5 text-orange-600" />
            <span className="text-xs text-orange-600 font-medium">Urgent</span>
          </div>
          <div className="text-2xl font-bold">2</div>
          <div className="text-xs text-foreground/70">Overdue Tasks</div>
        </Card>
      </div>

      {/* Active Tasks */}
      <Card className="p-6 mb-6">
        <CardTitle>Active Tasks</CardTitle>
        <CardDescription>Your current assignments and learning activities</CardDescription>
        
        <div className="mt-6 space-y-4">
          {[
            {
              title: "Market Research: Pune Manufacturing Sector",
              program: "Manufacturing Execution Program",
              type: "Research",
              priority: "High",
              dueDate: "Aug 12, 2026",
              progress: 65,
              status: "In Progress",
              mentor: "Dr. Sharma",
              estimatedHours: "8 hours"
            },
            {
              title: "Quality Control Documentation Review",
              program: "Quality Assurance Training",
              type: "Documentation",
              priority: "Medium",
              dueDate: "Aug 15, 2026",
              progress: 40,
              status: "In Progress",
              mentor: "Ms. Patel",
              estimatedHours: "6 hours"
            },
            {
              title: "Production Line Simulation Exercise",
              program: "Manufacturing Operations",
              type: "Practical",
              priority: "High",
              dueDate: "Aug 18, 2026",
              progress: 25,
              status: "In Progress",
              mentor: "Mr. Kumar",
              estimatedHours: "12 hours"
            }
          ].map((task) => (
            <div key={task.title} className="p-4 rounded-xl border border-border hover:bg-background/5/5 transition-colors">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold text-base">{task.title}</span>
                    <span className={`text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full ${
                      task.priority === "High" ? "bg-red-100 text-red-700" :
                      task.priority === "Medium" ? "bg-orange-100 text-orange-700" :
                      "bg-blue-100 text-blue-700"
                    }`}>
                      {task.priority}
                    </span>
                  </div>
                  <div className="text-sm text-foreground/70 mb-1">{task.program}</div>
                  <div className="flex items-center gap-4 text-xs text-foreground/70">
                    <span>Type: {task.type}</span>
                    <span>Mentor: {task.mentor}</span>
                    <span>Est: {task.estimatedHours}</span>
                  </div>
                </div>
                <div className="flex items-center gap-6 text-sm">
                  <div className="text-right">
                    <div className="text-foreground/70">Due Date</div>
                    <div className="font-medium">{task.dueDate}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-foreground/70">Progress</div>
                    <div className="font-medium">{task.progress}%</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-medium px-2 py-1 rounded-full bg-blue-100 text-blue-700">
                      {task.status}
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <div className="flex justify-between items-center text-xs mb-1">
                  <span className="text-foreground/70">Task Progress</span>
                  <span className="font-medium">{task.progress}%</span>
                </div>
                <div className="w-full bg-background/5/10 rounded-full h-2 overflow-hidden border border-border/50">
                  <div className="bg-accent h-full rounded-full transition-all" style={{ width: `${task.progress}%` }} />
                </div>
              </div>
              <div className="flex justify-between items-center mt-3 pt-3 border-t border-border/50">
                <div className="text-xs text-foreground/70">
                  Task ID: TS-{task.title.substring(0, 3).toUpperCase()}-{Math.floor(Math.random() * 1000)}
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="h-8">
                    Ask Mentor
                  </Button>
                  <Button size="sm" className="h-8">
                    Continue Task
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Task Categories & Performance */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <CardTitle>Task Categories</CardTitle>
          <CardDescription>Breakdown by task type and program</CardDescription>
          
          <div className="mt-6 space-y-3">
            {[
              { category: "Research & Analysis", count: 4, completed: 3, avgRating: 4.5 },
              { category: "Documentation", count: 3, completed: 2, avgRating: 4.7 },
              { category: "Practical Exercises", count: 3, completed: 1, avgRating: 4.3 },
              { category: "Team Projects", count: 2, completed: 1, avgRating: 4.6 }
            ].map((item) => (
              <div key={item.category} className="flex items-center justify-between p-3 rounded-lg bg-background/5/5 border border-border">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Target className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">{item.category}</div>
                    <div className="text-xs text-foreground/70">{item.completed}/{item.count} completed</div>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-sm font-bold">{item.avgRating}</span>
                  <span className="text-xs text-foreground/70">/5</span>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <CardTitle>Learning Progress</CardTitle>
          <CardDescription>Your overall performance and achievements</CardDescription>
          
          <div className="mt-6 space-y-3">
            <div className="flex items-center justify-between p-3 rounded-lg bg-background/5/5 border border-border">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 bg-green-100 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <div className="text-sm font-medium">Tasks Completed</div>
                  <div className="text-xs text-foreground/70">This month</div>
                </div>
              </div>
              <div className="text-2xl font-bold text-green-600">18</div>
            </div>

            <div className="flex items-center justify-between p-3 rounded-lg bg-background/5/5 border border-border">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <div className="text-sm font-medium">Learning Hours</div>
                  <div className="text-xs text-foreground/70">Total time invested</div>
                </div>
              </div>
              <div className="text-2xl font-bold">42h</div>
            </div>

            <div className="flex items-center justify-between p-3 rounded-lg bg-background/5/5 border border-border">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Target className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <div className="text-sm font-medium">Average Rating</div>
                  <div className="text-xs text-foreground/70">Mentor feedback</div>
                </div>
              </div>
              <div className="text-2xl font-bold">4.6/5</div>
            </div>

            <div className="flex items-center justify-between p-3 rounded-lg bg-background/5/5 border border-border">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 bg-purple-100 rounded-lg flex items-center justify-center">
                  <ClipboardCheck className="w-4 h-4 text-purple-600" />
                </div>
                <div>
                  <div className="text-sm font-medium">On-Time Completion</div>
                  <div className="text-xs text-foreground/70">Tasks finished by deadline</div>
                </div>
              </div>
              <div className="text-2xl font-bold">89%</div>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
}