import PlannerEntry from "../components/PlannerEntry";
import { usePlanner } from "../hooks/usePlanner";

export default function Planner() {
  const { plannerEntries, addEntry } = usePlanner();

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">🧘 Mama Mindfully Planner</h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          const input = e.currentTarget.elements.namedItem("entry") as HTMLInputElement;
          if (input?.value) {
            addEntry(input.value);
            input.value = "";
          }
        }}
        className="flex mb-6"
      >
        <input
          name="entry"
          className="flex-grow border px-4 py-2 rounded-l-md"
          placeholder="What’s one mindful intention today?"
        />
        <button className="bg-pink-600 text-white px-4 py-2 rounded-r-md hover:bg-pink-700">
          Add
        </button>
      </form>

      <div className="space-y-3">
        {plannerEntries.map((entry) => (
          <PlannerEntry key={entry.id} entry={entry} />
        ))}
      </div>
    </div>
  );
}
