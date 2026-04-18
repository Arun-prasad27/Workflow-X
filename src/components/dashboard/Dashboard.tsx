"use client";

import { useTasks } from "@/hooks/useTasks";
import { useAppStore } from "@/store/useAppStore";
import { useDebounce } from "@/hooks/useDebounce";
import Skeleton from "../ui/Skeleton";
import StatsCards from "./StatsCards";
import TaskList from "./TaskList";

export default function Dashboard() {
  const { data, isLoading, isError, refetch } = useTasks(); // Use the custom hook useTasks to fetch tasks data and manage loading and error states.
  const { status, setStatus, search, setSearch } = useAppStore();

  {
    /* Debounce the search input to avoid excessive API calls */
  }
  const debouncedSearch = useDebounce(search, 500);
  {
    /* Handle loading and error states */
  }
  if (isLoading) {
    return (
      <div>
        <Skeleton className="h-8 w-40 mb-4" />
        <Skeleton className="h-6 w-full mb-2" />
        <Skeleton className="h-6 w-full mb-2" />
        <Skeleton className="h-6 w-full" />
      </div>
    );
  }
  if (isError) {
    return (
      <div>
        <p>Something went wrong🚨</p>
        <button onClick={() => refetch()}>Retry</button>
      </div>
    );
  }

  {
    /* Process the tasks data to calculate stats and apply filters */
  }
  const tasks = data ?? []; //
  const total = tasks.length;
  const completed = tasks.filter((t: any) => t.status === "done").length;
  const pending = tasks.filter((t: any) => t.status !== "done").length;
  {
    /* Apply search and status filters to the tasks list */
  }
  const filteredTasks = tasks.filter((task: any) => {
    const matchesSearch = task.title
      .toLowerCase()
      .includes(debouncedSearch.toLowerCase());
    const matchesStatus = status === "all" || task.status === status;
    return matchesSearch && matchesStatus;
  });

  return (
    <div>
      <h1>Dashboard</h1>
      <div className="flex gap-4 mb-4">
        {/* Search Input */}
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search tasks..."
          className="border px-3 py-1"
        />

        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="all">All</option>
          <option value="todo">Todo</option>
          <option value="in-progress">In Progress</option>
          <option value="done">Done</option>
        </select>
      </div>
      {/* STATS */}
      <StatsCards total={total} completed={completed} pending={pending} />
      {/* FILTERED LISTS */}
      <TaskList tasks={filteredTasks}/>
    </div>
  );
}
