import Sidebar from "@/components/Sidebar";
import Feed from "@/components/Feed";
import RightPanel from "@/components/RightPanel";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-white overflow-hidden relative">
      {/* Background decorations like the image */}
      <div className="absolute top-20 left-[-20px] w-16 h-16 bg-purple-200 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-40 right-[-20px] w-32 h-32 bg-orange-100 rounded-full blur-3xl opacity-30"></div>
      
      {/* Content */}
      <Sidebar />
      
      <div className="flex-1 flex overflow-hidden border-x border-zinc-100">
        <Feed />
        <RightPanel />
      </div>

      {/* Floating elements like the image */}
      <div className="absolute bottom-20 left-[260px] w-12 h-12 rounded-full overflow-hidden border-4 border-white shadow-xl z-20 hidden xl:block">
         <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="user" />
      </div>
      <div className="absolute top-[40%] right-10 w-12 h-12 rounded-full overflow-hidden border-4 border-white shadow-xl z-20 hidden xl:block">
         <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah" alt="user" />
      </div>
    </div>
  );
}
