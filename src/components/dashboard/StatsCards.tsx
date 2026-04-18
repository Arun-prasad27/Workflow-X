type Props = {
  total: number;
  completed: number;
  pending: number;
};

export default function StatsCards({ total, completed, pending }: Props) {
  return (
    <div className="flex gap-4 mb-4">
      <div className="p-4 border rounded">Total: {total}</div>
      <div className="p-4 border rounded">Completed: {completed}</div>
      <div className="p-4 border rounded">Pending: {pending}</div>
    </div>
  );
}