import { useState } from "react";

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [filter, setFilter] = useState("all");

  const addTodo = () => {
    const text = inputValue.trim();
    if (!text) return;

    setTodos((prev) => [{ id: Date.now(), text, completed: false }, ...prev]);
    setInputValue("");
  };

  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)),
    );
  };

  const updateTodo = (id, text) => {
    const value = text.trim();
    if (!value) return;

    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, text: value } : t)),
    );
    setEditingId(null);
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  const clearCompleted = () => {
    setTodos((prev) => prev.filter((t) => !t.completed));
  };

  const filteredTodos = todos.filter((t) => {
    if (filter === "active") return !t.completed;
    if (filter === "completed") return t.completed;
    return true;
  });

  const remaining = todos.filter((t) => !t.completed).length;

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Todo</h1>
        <span className="text-sm text-gray-500">{remaining} items left</span>
      </div>

      {/* Input */}
      <div className="flex gap-2 mb-4">
        <input
          className="flex-1 border rounded px-3 py-2 focus:outline-none focus:ring"
          placeholder="Add a task..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addTodo()}
        />
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={addTodo}
        >
          Add
        </button>
      </div>

      {/* List */}
      <ul className="space-y-2">
        {filteredTodos.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center justify-between p-2 border rounded"
          >
            <div className="flex items-center gap-2 flex-1">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
              />

              {editingId === todo.id ? (
                <input
                  className="flex-1 border rounded px-2 py-1"
                  defaultValue={todo.text}
                  autoFocus
                  onKeyDown={(e) => {
                    if (e.key === "Enter") updateTodo(todo.id, e.target.value);
                    if (e.key === "Escape") setEditingId(null);
                  }}
                />
              ) : (
                <span
                  className={`flex-1 ${
                    todo.completed ? "line-through text-gray-400" : ""
                  }`}
                >
                  {todo.text}
                </span>
              )}
            </div>

            <div className="flex gap-2 ml-2">
              {editingId === todo.id ? (
                <button
                  className="text-blue-500"
                  onClick={() => updateTodo(todo.id, todo.text)}
                >
                  Save
                </button>
              ) : (
                <button
                  className="text-blue-500"
                  onClick={() => setEditingId(todo.id)}
                >
                  Edit
                </button>
              )}

              <button
                className="text-red-500"
                onClick={() => deleteTodo(todo.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>

      {/* Footer */}
      <div className="flex justify-between items-center mt-4 text-sm">
        <div className="flex gap-3">
          {["all", "active", "completed"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`capitalize ${
                filter === f ? "font-bold" : "text-gray-500"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <button onClick={clearCompleted} className="text-gray-500">
          Clear completed
        </button>
      </div>
    </div>
  );
}
