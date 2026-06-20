import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import {
  GraduationCap,
  LayoutDashboard,
  Code2,
  BrainCircuit,
  MessageSquare,
  Mic,
  FileText,
  Calendar,
  LogOut,
  Menu,
  X,
  User as UserIcon,
} from "lucide-react";

export default function Layout({ children }) {
  const { user, logout } = useAuth();
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navigation = [
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { name: "DSA Tracker", href: "/dsa", icon: Code2 },
    { name: "Practice Center", href: "/practice", icon: BrainCircuit },
    { name: "AI Tutor", href: "/tutor", icon: MessageSquare },
    { name: "Interview Mock", href: "/interview", icon: Mic },
    { name: "Resume Analyzer", href: "/resume", icon: FileText },
    { name: "Study Planner", href: "/planner", icon: Calendar },
  ];

  return (
    <div className="min-h-screen bg-[#070b13] text-slate-100 flex flex-col md:flex-row">
      {/* Mobile Header */}
      <header className="md:hidden flex items-center justify-between p-4 border-b border-slate-800 bg-[#0c1222] z-50">
        <div className="flex items-center space-x-2">
          <GraduationCap className="h-7 w-7 text-blue-500" />
          <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            PlacePrep
          </span>
        </div>
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-1 text-slate-400 hover:text-white focus:outline-none"
        >
          {sidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </header>

      {/* Sidebar Navigation */}
      <aside
        className={`fixed md:sticky top-0 left-0 bottom-0 w-64 border-r border-slate-900 bg-[#090e1a]/85 backdrop-blur-xl p-5 z-40 transition-transform duration-300 transform md:transform-none ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        } flex flex-col justify-between`}
      >
        <div>
          {/* Logo */}
          <div className="hidden md:flex items-center space-x-2.5 mb-8 px-2">
            <GraduationCap className="h-8 w-8 text-blue-500" />
            <span className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              PlacePrep
            </span>
          </div>

          {/* User profile brief */}
          {user && (
            <div className="mb-6 p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center space-x-3">
              <div className="bg-gradient-to-tr from-blue-600 to-violet-600 p-2.5 rounded-lg text-white">
                <UserIcon className="h-5 w-5" />
              </div>
              <div className="overflow-hidden">
                <h4 className="font-semibold text-sm truncate">{user.name}</h4>
                <p className="text-xs text-slate-400 truncate">{user.branch} • Year {user.year}</p>
              </div>
            </div>
          )}

          {/* Navigation Links */}
          <nav className="space-y-1.5">
            {navigation.map((item) => {
              const active = location.pathname === item.href;
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setSidebarOpen(false)}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                    active
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25"
                      : "text-slate-400 hover:text-white hover:bg-slate-900"
                  }`}
                >
                  <Icon className="h-4.5 w-4.5" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Footer Logout Button */}
        <div>
          <button
            onClick={logout}
            className="flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium text-red-400 hover:text-red-300 hover:bg-red-950/20 w-full transition-all duration-200 border border-transparent hover:border-red-900/30"
          >
            <LogOut className="h-4.5 w-4.5" />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content Pane */}
      <main className="flex-1 p-6 md:p-10 max-w-7xl mx-auto w-full overflow-x-hidden">
        {children}
      </main>
    </div>
  );
}
