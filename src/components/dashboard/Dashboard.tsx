"use client";

import { useTasks } from "@/hooks/useTasks";

export default function Dashboard() {
  const { data, isLoading, isError } = useTasks();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error...</p>;

  const tasks = data ?? []; //
  const total = tasks.length;
  const completed = tasks.filter((t: any) => t.status === "done").length; // Assuming "done" is the status for completed tasks
  const pending = tasks.filter((t: any) => t.status !== "done").length; // Assuming any status other than "done" is considered pending

  return (
    <div>
      <h1>Dashboard</h1>

      <div>Total: {total}</div>
      <div>Completed: {completed}</div>
      <div>Pending: {pending}</div>

      {tasks.map((task: any) => (
        <div key={task.id}>{task.title}</div>
      ))}
    </div>
  );
}