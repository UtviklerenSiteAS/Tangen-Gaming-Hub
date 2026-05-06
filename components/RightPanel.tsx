"use client";

import React from "react";
import { Plus, Check, Music, Layout, Trees, Swords, Trophy, Gamepad2 } from "lucide-react";

const stories = [
  { id: 1, name: "Anatoly Pr...", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Anatoly", bg: "/images/gaming_setup.png" },
  { id: 2, name: "Lolita Earns", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lolita", bg: "/images/students_gaming.png" },
];

const suggestions = [
  { id: 1, name: "Nick Shelburne", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Nick" },
  { id: 2, name: "Brittni Lando", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Brittni" },
  { id: 3, name: "Ivan Shevchenko", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ivan" },
];

const recommendations = [
  { label: "UI/UX", icon: Layout, color: "bg-blue-100 text-blue-600" },
  { label: "Music", icon: Music, color: "bg-pink-100 text-pink-600" },
  { label: "Esports", icon: Trophy, color: "bg-orange-100 text-orange-600" },
  { label: "RPG", icon: Swords, color: "bg-purple-100 text-purple-600" },
];

export default function RightPanel() {
  return (
    <div className="w-80 px-8 py-8 space-y-10 overflow-y-auto hide-scrollbar">
      {/* Stories */}
      <section>
        <h3 className="text-xl font-bold text-zinc-900 mb-6">Stories</h3>
        <div className="flex gap-4">
          {stories.map(story => (
            <div key={story.id} className="relative w-32 h-44 rounded-[2rem] overflow-hidden group cursor-pointer border-2 border-transparent hover:border-zinc-900 transition-all">
              <img src={story.bg} alt="story" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-3 left-3 flex items-center gap-2">
                <div className="w-6 h-6 rounded-full border-2 border-white overflow-hidden bg-white">
                   <img src={story.avatar} alt={story.name} />
                </div>
                <span className="text-[10px] font-bold text-white truncate w-16">{story.name}</span>
              </div>
            </div>
          ))}
          <div className="w-10 h-10 rounded-full bg-zinc-900 text-white flex items-center justify-center self-center shadow-lg cursor-pointer hover:scale-110 transition-transform">
             <Plus size={20} />
          </div>
        </div>
      </section>

      {/* Suggestions */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-zinc-900">Suggestions</h3>
          <button className="text-xs font-bold text-zinc-400 hover:text-zinc-900 transition-colors">See all</button>
        </div>
        <div className="space-y-4">
          {suggestions.map(person => (
            <div key={person.id} className="flex items-center justify-between group">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden bg-zinc-100 border border-zinc-100">
                  <img src={person.avatar} alt={person.name} />
                </div>
                <span className="text-sm font-bold text-zinc-900 truncate w-24">{person.name}</span>
              </div>
              <button className="bg-zinc-900 text-white px-4 py-1.5 rounded-full text-xs font-bold hover:scale-105 active:scale-95 transition-transform">
                Follow
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Recommendations */}
      <section>
        <h3 className="text-xl font-bold text-zinc-900 mb-6">Recommendations</h3>
        <div className="grid grid-cols-2 gap-4">
          {recommendations.map(item => (
            <div key={item.label} className="flex flex-col items-center justify-center aspect-square rounded-[2rem] bg-white border border-zinc-100 shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
              <div className={`w-12 h-12 rounded-full ${item.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                <item.icon size={24} />
              </div>
              <span className="text-xs font-bold text-zinc-900">{item.label}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
