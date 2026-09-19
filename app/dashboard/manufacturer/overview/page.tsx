"use client";

import { Button } from "@/components/ui/Button";
import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import { Activity, Factory, Shield, TrendingUp, Plus, ScanLine, FolderOpen, ShoppingCart, FileText, X } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { submitTraceabilityEntry, getTraceabilityEntries } from "@/lib/actions";
import { getCurrentUser } from "@/lib/auth";

interface TraceabilityEntry {
  id: string;
  batch_number: string;
  product_name: string;
  client_name: string | null;
  description: string | null;
  image_url: string | null;
  status: string;
  progress: number;
  created_at: string;
}

export default function ManufacturerOverview() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [traceabilityEntries, setTraceabilityEntries] = useState<TraceabilityEntry[]>([]);
  const [isLoadingEntries, setIsLoadingEntries] = useState(true);
  const [currentUser, setCurrentUser] = useState<{ id: string } | null>(null);

  // Load current user and traceability entries on component mount
  useEffect(() => {
    async function loadData() {
      const user = await getCurrentUser();
      if (user) {
        setCurrentUser(user);
        const res = await getTraceabilityEntries(user.id);
        if (res.success && res.data) {
          setTraceabilityEntries(res.data);
        }
      }
      setIsLoadingEntries(false);
    }
    loadData();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("");
    
    const formData = new FormData(e.currentTarget);
    
    // Add user_id to form data
    if (currentUser) {
      formData.append('user_id', currentUser.id);
    }
    
    const res = await submitTraceabilityEntry(formData);
    
    if (res.success) {
      setMessage("Traceability entry added successfully!");
      (e.target as HTMLFormElement).reset();
      
      // Refresh the entries list
      if (currentUser) {
        const entriesRes = await getTraceabilityEntries(currentUser.id);
        if (entriesRes.success && entriesRes.data) {
          setTraceabilityEntries(entriesRes.data);
        }
      }
      
      setTimeout(() => {
        setIsModalOpen(false);
        setMessage("");
      }, 2000);
    } else {
      setMessage("Error: " + res.error);
      console.error("Form submission error:", res.error);
    }
    setIsSubmitting(false);
  };

  return (
    <>
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold mb-1">Manufacturer Overview</h1>
          <p className="text-sm text-foreground/70">
            Manage your manufacturing operations, traceability, and capacity.
          </p>
        </div>
        <Button className="shrink-0" onClick={() => setIsModalOpen(true)}>
          <Plus className="w-4 h-4 mr-2" /> Add Traceability Entry
        </Button>
      </div>

      {/* Traceability Entry Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-background rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-border">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold">Add Traceability Entry</h2>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 hover:bg-muted rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6">
              {message && (
                <div className={`p-4 mb-6 rounded-lg font-medium text-sm ${message.startsWith("Error") ? "bg-red-500/10 text-red-500" : "bg-green-500/10 text-green-600"}`}>
                  {message}
                </div>
              )}

              <div className="grid gap-4">
                <div className="grid gap-2">
                  <label className="text-sm font-medium">Batch Number <span className="text-red-500">*</span></label>
                  <input
                    className="h-11 w-full rounded-xl border border-border bg-background px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring/40"
                    name="batch_number"
                    placeholder="e.g., Batch #455"
                    required
                  />
                </div>
                
                <div className="grid gap-2">
                  <label className="text-sm font-medium">Product Name <span className="text-red-500">*</span></label>
                  <input
                    className="h-11 w-full rounded-xl border border-border bg-background px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring/40"
                    name="product_name"
                    placeholder="e.g., EV Motor Housing"
                    required
                  />
                </div>
                
                <div className="grid gap-2">
                  <label className="text-sm font-medium">Client Name</label>
                  <input
                    className="h-11 w-full rounded-xl border border-border bg-background px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring/40"
                    name="client_name"
                    placeholder="e.g., Tata Motors"
                  />
                </div>
                
                <div className="grid gap-2">
                  <label className="text-sm font-medium">Description</label>
                  <textarea
                    className="min-h-24 w-full rounded-xl border border-border bg-background px-3 py-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring/40"
                    name="description"
                    placeholder="Describe the traceability entry..."
                  />
                </div>
                
                <div className="grid gap-2">
                  <label className="text-sm font-medium">Status</label>
                  <select
                    className="h-11 w-full rounded-xl border border-border bg-background px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring/40"
                    name="status"
                  >
                    <option value="pending">Pending</option>
                    <option value="in_progress">In Progress</option>
                    <option value="completed">Completed</option>
                    <option value="at_risk">At Risk</option>
                  </select>
                </div>
                
                <div className="grid gap-2">
                  <label className="text-sm font-medium">Progress (%)</label>
                  <input
                    type="number"
                    min="0"
                    max="100"
                    className="h-11 w-full rounded-xl border border-border bg-background px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring/40"
                    name="progress"
                    placeholder="0-100"
                    defaultValue="0"
                  />
                </div>
                
                <div className="grid gap-2">
                  <label className="text-sm font-medium">Upload Image (PNG, JPEG, etc.)</label>
                  <input
                    type="file"
                    accept="image/png,image/jpeg,image/jpg,image/gif,image/webp"
                    className="h-11 w-full rounded-xl border border-border bg-background px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring/40 file:mr-4 file:py-1 file:px-3 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-accent/10 file:text-accent hover:file:bg-accent/20 cursor-pointer"
                    name="traceability_image"
                  />
                </div>
              </div>

              <div className="flex gap-3 mt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 h-11 rounded-xl bg-accent px-4 text-sm font-medium text-accent-foreground transition-colors hover:brightness-110 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Submitting..." : "Submit Entry"}
                </button>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 h-11 rounded-xl border border-border bg-background px-4 text-sm font-medium transition-colors hover:bg-muted"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Quick Navigation Cards */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
        <Link href="/dashboard/manufacturer/active-projects">
          <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer border-accent/20">
            <FolderOpen className="w-6 h-6 text-accent mb-2" />
            <div className="font-bold text-sm">Active Projects</div>
            <div className="text-xs text-foreground/70">8 ongoing projects</div>
          </Card>
        </Link>
        <Link href="/dashboard/manufacturer/project-orders">
          <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer">
            <ShoppingCart className="w-6 h-6 text-blue-600 mb-2" />
            <div className="font-bold text-sm">Project Orders</div>
            <div className="text-xs text-foreground/70">4 pending orders</div>
          </Card>
        </Link>
        <Link href="/dashboard/manufacturer/quality-score">
          <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer">
            <TrendingUp className="w-6 h-6 text-green-600 mb-2" />
            <div className="font-bold text-sm">Quality Score</div>
            <div className="text-xs text-foreground/70">99.2% quality rating</div>
          </Card>
        </Link>
        <Link href="/dashboard/manufacturer/capacity-utilization">
          <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer">
            <Activity className="w-6 h-6 text-orange-600 mb-2" />
            <div className="font-bold text-sm">Capacity Utilization</div>
            <div className="text-xs text-foreground/70">85% capacity used</div>
          </Card>
        </Link>
        <Link href="/dashboard/manufacturer/documents">
          <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer">
            <FileText className="w-6 h-6 text-purple-600 mb-2" />
            <div className="font-bold text-sm">Documents</div>
            <div className="text-xs text-foreground/70">45 traceability files</div>
          </Card>
        </Link>
      </div>

      {/* Manufacturer-specific stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <Card className="p-4">
          <div className="flex items-center justify-between mb-2">
            <Factory className="w-5 h-5 text-accent" />
            <span className="text-xs text-green-600 font-medium">+8%</span>
          </div>
          <div className="text-2xl font-bold">8</div>
          <div className="text-xs text-foreground/70">Active Projects</div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center justify-between mb-2">
            <Activity className="w-5 h-5 text-blue-600" />
            <span className="text-xs text-green-600 font-medium">+3</span>
          </div>
          <div className="text-2xl font-bold">12</div>
          <div className="text-xs text-foreground/70">Project Orders</div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center justify-between mb-2">
            <Shield className="w-5 h-5 text-green-600" />
            <span className="text-xs text-green-600 font-medium">+0.5%</span>
          </div>
          <div className="text-2xl font-bold">99.2%</div>
          <div className="text-xs text-foreground/70">Quality Score</div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center justify-between mb-2">
            <TrendingUp className="w-5 h-5 text-accent" />
            <span className="text-xs text-green-600 font-medium">+8%</span>
          </div>
          <div className="text-2xl font-bold">85%</div>
          <div className="text-xs text-foreground/70">Capacity Utilization</div>
        </Card>
      </div>

      {/* Traceability Section */}
      <Card className="p-6 mb-6">
        <CardTitle>Manufacturing Traceability</CardTitle>
        <CardDescription>Add and update traceability entries for quality compliance</CardDescription>
        
        <div className="mt-6 space-y-4">
          {isLoadingEntries ? (
            <div className="text-center py-8 text-foreground/70">Loading traceability entries...</div>
          ) : traceabilityEntries.length === 0 ? (
            <div className="text-center py-8 text-foreground/70">
              No traceability entries yet. Click "Add Traceability Entry" to create your first entry.
            </div>
          ) : (
            traceabilityEntries.map((entry) => (
              <div key={entry.id} className="p-4 rounded-xl border border-border hover:bg-background/5/5 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-bold text-sm">{entry.batch_number}</span>
                      <span className={`text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full ${
                        entry.status === 'in_progress' ? "bg-blue-100 text-blue-700" :
                        entry.status === 'at_risk' ? "bg-red-100 text-red-700" :
                        entry.status === 'completed' ? "bg-green-100 text-green-700" :
                        "bg-gray-100 text-gray-700"
                      }`}>
                        {entry.status.replace('_', ' ')}
                      </span>
                    </div>
                    <h4 className="font-bold text-base">{entry.product_name}</h4>
                    {entry.client_name && <p className="text-sm text-foreground/70">Client: {entry.client_name}</p>}
                    {entry.image_url && (
                      <div className="mt-2">
                        <img 
                          src={entry.image_url} 
                          alt="Traceability image" 
                          className="w-20 h-20 object-cover rounded-lg border border-border"
                        />
                      </div>
                    )}
                  </div>
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <ScanLine className="w-4 h-4 text-accent" />
                      <span className="font-medium">{entry.progress}% Complete</span>
                    </div>
                  </div>
                </div>
                <div className="mt-3">
                  <div className="flex justify-between items-center text-xs mb-1">
                    <span className="text-foreground/70">Progress</span>
                    <span className="font-medium">{entry.progress}%</span>
                  </div>
                  <div className="w-full bg-background/5/10 rounded-full h-2 overflow-hidden border border-border/50">
                    <div 
                      className={`h-full rounded-full transition-all ${
                        entry.status === 'at_risk' ? "bg-red-500" : "bg-accent"
                      }`} 
                      style={{ width: `${entry.progress}%` }} 
                    />
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </Card>

      {/* Capacity Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <CardTitle>Capacity Utilization</CardTitle>
          <CardDescription>Current capacity across production lines</CardDescription>
          
          <div className="mt-6 space-y-4">
            {[
              { line: "CNC Machining Line A", utilization: 85, status: "Optimal" },
              { line: "CNC Machining Line B", utilization: 92, status: "High" },
              { line: "Assembly Line 1", utilization: 78, status: "Optimal" },
              { line: "Quality Control Station", utilization: 65, status: "Available" },
            ].map((item) => (
              <div key={item.line} className="flex items-center gap-4">
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium">{item.line}</span>
                    <span className="text-sm font-bold">{item.utilization}%</span>
                  </div>
                  <div className="w-full bg-background/5/10 rounded-full h-2 overflow-hidden border border-border/50">
                    <div 
                      className={`h-full rounded-full transition-all ${
                        item.utilization > 90 ? "bg-red-500" :
                        item.utilization > 75 ? "bg-accent" :
                        "bg-green-500"
                      }`} 
                      style={{ width: `${item.utilization}%` }} 
                    />
                  </div>
                </div>
                <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                  item.status === "Available" ? "bg-green-100 text-green-700" :
                  item.status === "Optimal" ? "bg-blue-100 text-blue-700" :
                  "bg-orange-100 text-orange-700"
                }`}>
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <CardTitle>Quality Score History</CardTitle>
          <CardDescription>Manufacturability score trends</CardDescription>
          
          <div className="mt-6 space-y-3">
            {[
              { period: "This Week", score: 99.2, change: "+0.3%" },
              { period: "Last Week", score: 98.9, change: "+0.5%" },
              { period: "This Month", score: 98.5, change: "+1.2%" },
              { period: "Last Month", score: 97.3, change: "+0.8%" },
            ].map((item) => (
              <div key={item.period} className="flex items-center justify-between p-3 rounded-lg bg-background/5/5 border border-border">
                <div>
                  <div className="text-sm font-medium">{item.period}</div>
                  <div className="text-xs text-foreground/70">Quality Performance</div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-accent">{item.score}%</div>
                  <div className="text-xs text-green-600">{item.change}</div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </>
  );
}