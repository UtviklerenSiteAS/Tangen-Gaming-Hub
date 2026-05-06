"use client";

import React from "react";
import { 
  LayoutDashboard, 
  MessageSquare, 
  MessageCircle, 
  Users, 
  Image as ImageIcon, 
  Settings,
  Bell,
  Search
} from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const navItems = [
  { icon: LayoutDashboard, label: "News Feed", active: true, badge: null },
  { icon: MessageSquare, label: "Messages", active: false, badge: 6 },
  { icon: MessageCircle, label: "Forums", active: false, badge: null },
  { icon: Users, label: "Friends", active: false, badge: 3 },
  { icon: ImageIcon, label: "Media", active: false, badge: null },
  { icon: Settings, label: "Settings", active: false, badge: null },
];

export default function Sidebar() {
  return (
    <div className="flex flex-col w-72 h-full py-8 px-6">
      {/* Profile Section */}
      <div className="flex flex-col items-center mb-10">
        <div className="relative w-24 h-24 mb-4">
          <div className="w-full h-full rounded-full bg-gradient-to-tr from-purple-400 to-pink-400 p-1">
            <div className="w-full h-full rounded-full border-4 border-white overflow-hidden bg-zinc-200">
              <img 
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Bogdan" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="absolute bottom-1 right-1 w-6 h-6 bg-green-500 border-4 border-white rounded-full"></div>
        </div>
        <h2 className="text-xl font-bold text-zinc-900">Bogdan Nikitin</h2>
        <p className="text-sm text-zinc-400 font-medium">@nikitinteam</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-2">
        {navItems.map((item) => (
          <button
            key={item.label}
            className={cn(
              "w-full flex items-center justify-between px-4 py-3 rounded-2xl transition-all duration-200 group",
              item.active 
                ? "bg-zinc-900 text-white shadow-xl shadow-zinc-200" 
                : "text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900"
            )}
          >
            <div className="flex items-center gap-4">
              <item.icon size={22} className={cn(item.active ? "text-white" : "text-zinc-400 group-hover:text-zinc-900")} />
              <span className="font-semibold">{item.label}</span>
            </div>
            {item.badge && (
              <span className={cn(
                "px-2 py-0.5 text-xs font-bold rounded-full",
                item.active ? "bg-white text-zinc-900" : "bg-zinc-900 text-white"
              )}>
                {item.badge}
              </span>
            )}
          </button>
        ))}
      </nav>

      {/* Download App Promo */}
      <div className="mt-auto pt-6">
        <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-3xl p-6 relative overflow-hidden group cursor-pointer border border-blue-100">
          <div className="relative z-10">
             <div className="flex -space-x-2 mb-4">
               {[1,2,3].map(i => (
                 <div key={i} className="w-8 h-8 rounded-full border-2 border-white overflow-hidden bg-zinc-200">
                   <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i+10}`} alt="user" />
                 </div>
               ))}
             </div>
             <p className="font-bold text-zinc-900 leading-tight">Download the App</p>
          </div>
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <ImageIcon size={60} />
          </div>
        </div>
      </div>
    </div>
  );
}
