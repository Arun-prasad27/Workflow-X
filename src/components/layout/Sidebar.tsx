"use client";
import { useAppStore } from "@/store/useAppStore";

export default function Sidebar() {
  const { sidebarOpen } = useAppStore();

  if (!sidebarOpen) return null;
  return (
    <div className="w-64 bg-gray-900 text-white h-full p-5">
      <h1 className="text-2xl font-bold mb-8">WorkFlowX</h1>

      <nav className="space-y-3">
        <div className="p-2 rounded-lg hover:bg-gray-800 cursor-pointer">
          Dashboard
        </div>
        <div className="p-2 rounded-lg hover:bg-gray-800 cursor-pointer">
          Tasks
        </div>
        <div className="p-2 rounded-lg hover:bg-gray-800 cursor-pointer">
          Analytics
        </div>
      </nav>
    </div>
  );
}
