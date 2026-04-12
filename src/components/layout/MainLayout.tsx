import { ReactNode } from "react"; // ReactNode is a type that represents any valid React child (string, number, element, etc.)
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

export default function MainLayout({ children }: { children: ReactNode }) {
  // The MainLayout component accepts a single prop called "children" which can be any valid React node (like elements, text, etc.)
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />

      <div className="flex flex-col flex-1">
        <Navbar />
        <main className="p-6 overflow-auto">{children}</main>
      </div>
    </div>
  );
}
