type Props = { // ✅ Define the type for the tasks prop
  tasks: any[]; 
};

export default function TaskList({ tasks }: Props) {
  // ✅ Empty state
  if (tasks.length === 0) {
    return <p>No tasks found</p>;
  }

  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id} className="p-2 border-b">
          {task.title}
        </div>
      ))}
    </div>
  );
}