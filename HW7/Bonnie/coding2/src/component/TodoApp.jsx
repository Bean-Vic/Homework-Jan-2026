import { useEffect, useMemo, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useTodos } from "../hooks/useTodos";

const STORAGE_KEY = "todo-list";

function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function TodoApp() {
  const [stored, setStored] = useLocalStorage(STORAGE_KEY, []);
  const { todos, add, remove, toggle, edit, setAll, clearCompleted } =
    useTodos(stored);

  // sync reducer state <- localStorage initial
  useEffect(() => {
    setAll(stored);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // persist whenever todos change
  useEffect(() => {
    setStored(todos);
  }, [todos, setStored]);

  const [inputValue, setInputValue] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const [filter, setFilter] = useState("all"); // all | active | completed

  const [editingId, setEditingId] = useState(null);
  const [editingValue, setEditingValue] = useState("");

  const remainingCount = useMemo(
    () => todos.filter((t) => !t.completed).length,
    [todos]
  );

  const visibleTodos = useMemo(() => {
    if (filter === "active") return todos.filter((t) => !t.completed);
    if (filter === "completed") return todos.filter((t) => t.completed);
    return todos;
  }, [todos, filter]);

  function submitAdd() {
    const res = add(inputValue);
    if (!res.ok) {
      setErrorMsg(res.error);
      return;
    }
    setErrorMsg("");
    setInputValue("");
  }

  function startEdit(todo) {
    setErrorMsg("");
    setEditingId(todo.id);
    setEditingValue(todo.text);
  }

  function cancelEdit() {
    setEditingId(null);
    setEditingValue("");
  }

  function saveEdit(id) {
    const res = edit(id, editingValue);
    if (!res.ok) {
      setErrorMsg(res.error);
      return;
    }
    setErrorMsg("");
    cancelEdit();
  }

  function onDelete(id) {
    const ok = window.confirm("Delete this todo?");
    if (ok) remove(id);
  }

  return (
    <div className="mx-auto w-full max-w-2xl rounded-2xl bg-white p-6 shadow">
      <div className="flex items-end justify-between gap-4">
        <h1 className="text-3xl font-bold">Todo</h1>
        <div className="text-sm text-gray-600">{remainingCount} items left</div>
      </div>

      {/* Add bar */}
      <div className="mt-5 flex gap-3">
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") submitAdd();
          }}
          className="w-full rounded-xl border px-4 py-2 outline-none focus:ring"
          placeholder="Add a task..."
          aria-label="Todo input"
        />
        <button
          type="button"
          onClick={submitAdd}
          disabled={!inputValue.trim()}
          className="rounded-xl bg-black px-5 py-2 font-medium text-white disabled:opacity-40"
          aria-label="Add todo"
        >
          Add
        </button>
      </div>

      {/* Error message */}
      {errorMsg && (
        <div className="mt-3 rounded-xl border border-red-200 bg-red-50 px-4 py-2 text-sm text-red-700">
          {errorMsg}
        </div>
      )}

      {/* List */}
      <div className="mt-5 overflow-hidden rounded-xl border">
        {visibleTodos.length === 0 ? (
          <div className="p-6 text-sm text-gray-500">No todos.</div>
        ) : (
          <ul>
            {visibleTodos.map((todo) => {
              const isEditing = editingId === todo.id;

              return (
                <li
                  key={todo.id}
                  className="flex items-center justify-between gap-3 border-b p-4 last:border-b-0"
                >
                  <div className="flex min-w-0 items-center gap-3">
                    <input
                      type="checkbox"
                      checked={todo.completed}
                      onChange={() => toggle(todo.id)}
                      aria-label={`Toggle ${todo.text}`}
                      className="h-5 w-5"
                    />

                    {isEditing ? (
                      <input
                        value={editingValue}
                        onChange={(e) => setEditingValue(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") saveEdit(todo.id);
                          if (e.key === "Escape") cancelEdit();
                        }}
                        className="w-full min-w-0 rounded-lg border px-3 py-1.5 outline-none focus:ring"
                        aria-label="Edit todo input"
                        autoFocus
                      />
                    ) : (
                      <span
                        className={cx(
                          "min-w-0 truncate",
                          todo.completed && "text-gray-400 line-through"
                        )}
                        title={todo.text}
                      >
                        {todo.text}
                      </span>
                    )}
                  </div>

                  <div className="flex shrink-0 gap-2">
                    {isEditing ? (
                      <>
                        <button
                          type="button"
                          onClick={() => saveEdit(todo.id)}
                          className="rounded-lg border px-3 py-1.5 text-sm hover:bg-gray-50"
                          aria-label="Save edit"
                        >
                          Save
                        </button>
                        <button
                          type="button"
                          onClick={cancelEdit}
                          className="rounded-lg border px-3 py-1.5 text-sm hover:bg-gray-50"
                          aria-label="Cancel edit"
                        >
                          Cancel
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          type="button"
                          onClick={() => startEdit(todo)}
                          className="rounded-lg border px-3 py-1.5 text-sm hover:bg-gray-50"
                          aria-label="Edit todo"
                        >
                          Edit
                        </button>
                        <button
                          type="button"
                          onClick={() => onDelete(todo.id)}
                          className="rounded-lg border px-3 py-1.5 text-sm hover:bg-gray-50"
                          aria-label="Delete todo"
                        >
                          Delete
                        </button>
                      </>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </div>

      {/* Footer */}
      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
        <div className="flex gap-2">
          <FilterButton active={filter === "all"} onClick={() => setFilter("all")}>
            All
          </FilterButton>
          <FilterButton
            active={filter === "active"}
            onClick={() => setFilter("active")}
          >
            Active
          </FilterButton>
          <FilterButton
            active={filter === "completed"}
            onClick={() => setFilter("completed")}
          >
            Completed
          </FilterButton>
        </div>

        <button
          type="button"
          onClick={clearCompleted}
          className="rounded-xl border px-4 py-2 text-sm hover:bg-gray-50"
          aria-label="Clear completed todos"
        >
          Clear completed
        </button>
      </div>
    </div>
  );
}

function FilterButton({ active, onClick, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cx(
        "rounded-xl border px-4 py-2 text-sm",
        active ? "bg-black text-white" : "hover:bg-gray-50"
      )}
      aria-label={`Filter ${children}`}
    >
      {children}
    </button>
  );
}
