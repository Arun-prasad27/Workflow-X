export default function Navbar() {
  return (
    <div className="h-16 bg-white border-b flex items-center justify-between px-6 shadow-sm">
      <h2 className="text-lg font-semibold">Dashboard</h2>

      <div className="flex items-center gap-4">
        <input
          type="text"
          placeholder="Search..."
          className="border rounded-lg px-3 py-1 text-sm"
        />
        <div className="w-8 h-8 bg-gray-300 rounded-full" />
      </div>
    </div>
  );
}