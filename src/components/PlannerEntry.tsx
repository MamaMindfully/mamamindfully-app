type Entry = {
  id: string;
  text: string;
  createdAt: any;
};

export default function PlannerEntry({ entry }: { entry: Entry }) {
  return (
    <div className="border p-3 rounded-md bg-white shadow-sm">
      <p>{entry.text}</p>
      <small className="text-gray-500">
        {new Date(entry.createdAt?.seconds * 1000).toLocaleString()}
      </small>
    </div>
  );
}
