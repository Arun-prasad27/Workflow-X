import { create } from "zustand"; // Zustand is a small, fast and scalable bearbones state-management solution using simplified flux principles. It has a minimal API and is designed to be easy to use and understand.

type AppState = { // Define the shape of our app's state
  sidebarOpen: boolean; // A boolean to track whether the sidebar is open or closed
  toggleSidebar: () => void; // A function to toggle the sidebar's open/closed state

  search: string; // A string to hold the current search query
  setSearch: (value: string) => void; // A function to update the search query

  status: string; // A string to hold the current status filter
  setStatus: (value: string) => void; // A function to update the status filter
};

export const useAppStore = create<AppState>((set) => ({ // Create the store with the initial state and actions
  sidebarOpen: true,
  toggleSidebar: () =>
    set((state) => ({ sidebarOpen: !state.sidebarOpen })), // Toggle the sidebarOpen state when toggleSidebar is called

  search: '', // Initialize the search query as an empty string
  setSearch: (value) => set({ search: value}), // Update the search query when setSearch is called  

  status: 'all', // Initialize the status filter as 'all'
  setStatus: (value) => set({ status: value }), // Update the status filter when setStatus is called
}));