"use client";

import { useAppStore } from "@/store/useAppStore";

export default function Navbar() {
  const { toggleSidebar } = useAppStore();
  const { search, setSearch } = useAppStore(); 

  return (
    <div className="h-16 bg-white border-b flex items-center justify-between px-6 shadow-sm">

      {/*Left side */}
      <div className="flex items-center gap-4">
        <button onClick={toggleSidebar} className="text-xl">☰</button>
      </div>
      <h2 className="text-lg font-semibold">Dashboard</h2>

      {/*Right side */}
      <div className="flex items-center gap-4">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value) }
          placeholder="Search..."
          className="border rounded-lg px-3 py-1 text-sm"
        />
        <div className="w-8 h-8 bg-gray-300 rounded-full" />
      </div>
    </div>
  );
}