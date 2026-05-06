"use client";

import React from "react";
import { 
  FileText, 
  Image as ImageIcon, 
  MapPin, 
  Globe, 
  MoreHorizontal,
  Heart,
  MessageCircle,
  Share2,
  Smile
} from "lucide-react";

const posts = [
  {
    id: 1,
    user: {
      name: "George Lobko",
      handle: "@georgelobko",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=George",
      time: "2 hours ago"
    },
    content: "Just finished setting up the new tournament station for the upcoming weekend! Who's ready to compete in the Tangen Invitational? 🎮🔥 @Silena @Olya @Davis",
    images: [
      "/images/gaming_setup.png",
      "/images/students_gaming.png"
    ],
    likes: "1,240",
    theme: "blue"
  },
  {
    id: 2,
    user: {
      name: "Vitaliy Boyko",
      handle: "@vitaliyboyko",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Vitaliy",
      time: "3 hours ago"
    },
    content: "The new RPG game group is officially live! We're starting with a massive D&D campaign this Friday. Check the Game Groups page to join! ⚔️🎲",
    images: [],
    likes: "856",
    theme: "orange"
  }
];

export default function Feed() {
  return (
    <div className="flex-1 max-w-4xl mx-auto px-8 py-8 space-y-8 overflow-y-auto hide-scrollbar">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-zinc-900">Feeds</h1>
        <div className="flex gap-6 text-sm font-semibold text-zinc-400">
          <button className="text-zinc-900 border-b-2 border-zinc-900 pb-1">Recents</button>
          <button className="hover:text-zinc-900 transition-colors">Friends</button>
          <button className="hover:text-zinc-900 transition-colors">Popular</button>
        </div>
      </div>

      {/* Post Creator */}
      <div className="bg-white rounded-[2.5rem] p-6 shadow-sm border border-zinc-100">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-10 h-10 rounded-full overflow-hidden bg-zinc-200">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Bogdan" alt="User" />
          </div>
          <input 
            type="text" 
            placeholder="Share something" 
            className="flex-1 bg-transparent border-none outline-none text-zinc-600 font-medium placeholder:text-zinc-300"
          />
          <button className="text-zinc-300">
            <Smile size={20} />
          </button>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <button className="flex items-center gap-2 text-zinc-500 font-semibold text-sm hover:text-zinc-900 transition-colors">
              <FileText size={18} className="text-zinc-400" />
              File
            </button>
            <button className="flex items-center gap-2 text-zinc-500 font-semibold text-sm hover:text-zinc-900 transition-colors">
              <ImageIcon size={18} className="text-zinc-400" />
              Image
            </button>
            <button className="flex items-center gap-2 text-zinc-500 font-semibold text-sm hover:text-zinc-900 transition-colors">
              <MapPin size={18} className="text-zinc-400" />
              Location
            </button>
            <button className="flex items-center gap-2 text-zinc-500 font-semibold text-sm hover:text-zinc-900 transition-colors">
              <Globe size={18} className="text-zinc-400" />
              Public
            </button>
          </div>
          <button className="bg-zinc-900 text-white px-8 py-3 rounded-2xl font-bold text-sm shadow-lg shadow-zinc-200 hover:scale-105 active:scale-95 transition-transform">
            Send
          </button>
        </div>
      </div>

      {/* Posts */}
      {posts.map((post) => (
        <div 
          key={post.id} 
          className={`rounded-[2.5rem] p-8 shadow-sm border border-zinc-100 ${post.theme === 'blue' ? 'bg-blue-50/50' : 'bg-orange-50/50'}`}
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-sm bg-zinc-200">
                <img src={post.user.avatar} alt={post.user.name} />
              </div>
              <div>
                <h3 className="font-bold text-zinc-900">{post.user.name}</h3>
                <p className="text-xs text-zinc-400 font-medium">{post.user.time}</p>
              </div>
            </div>
            <button className="text-zinc-400 hover:text-zinc-900">
              <MoreHorizontal size={24} />
            </button>
          </div>
          
          <p className="text-zinc-800 leading-relaxed font-medium mb-6">
            {post.content}
          </p>

          {post.images.length > 0 && (
            <div className="grid grid-cols-3 gap-3 mb-6 h-64">
              {post.images.map((img, i) => (
                <div key={i} className="rounded-3xl overflow-hidden shadow-md">
                  <img src={img} alt="Post" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                </div>
              ))}
            </div>
          )}

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-zinc-400 text-sm font-bold">
                <Globe size={16} />
                {post.likes}
              </div>
              <button className="flex items-center gap-2 text-zinc-400 hover:text-red-500 transition-colors text-sm font-bold">
                <Heart size={20} />
                Like
              </button>
              <button className="flex items-center gap-2 text-zinc-400 hover:text-zinc-900 transition-colors text-sm font-bold">
                <MessageCircle size={20} />
                Comment
              </button>
            </div>
            {post.theme === 'blue' && (
               <button className="bg-pink-500 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg shadow-pink-200 flex items-center gap-2">
                 🔥 Woow!!
               </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
