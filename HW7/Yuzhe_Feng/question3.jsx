import { useEffect, useMemo, useReducer, useState } from "react";

const STORAGE_KEY = "todo-list";

// helpers
function safeParseTodos(value) {
  try {
    const parsed = JSON.parse(value);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function createTodo(text) {
  const now = Date.now();
  return {
    id: crypto.randomUUID(),
    text,
    completed: false,
    updatedAt: now,
  };
}

//  reducer
const ACTIONS = {
  INIT: "INIT",
  ADD: "ADD",
  TOGGLE: "TOGGLE",
  DELETE: "DELETE",
  EDIT: "EDIT",
  CLEAR_COMPLETED: "CLEAR_COMPLETED",
};

function todosReducer(state, action) {
  switch (action.type) {
    case ACTIONS.INIT: {
      // payload: todos[]
      return action.payload ?? [];
    }

    case ACTIONS.ADD: {
      // payload: { text }
      const todo = createTodo(action.payload.text);
      return [todo, ...state]; // top of list
    }

    case ACTIONS.TOGGLE: {
      // payload: { id }
      const { id } = action.payload;
      return state.map((t) =>
        t.id === id
          ? { ...t, completed: !t.completed, updatedAt: Date.now() }
          : t,
      );
    }

    case ACTIONS.DELETE: {
      // payload: { id }
      const { id } = action.payload;
      return state.filter((t) => t.id !== id);
    }

    case ACTIONS.EDIT: {
      // payload: { id, text }
      const { id, text } = action.payload;
      return state.map((t) =>
        t.id === id ? { ...t, text, updatedAt: Date.now() } : t,
      );
    }

    case ACTIONS.CLEAR_COMPLETED: {
      return state.filter((t) => !t.completed);
    }

    default:
      return state;
  }
}

//custom hook: useTodos
function useTodos() {
  const [todos, dispatch] = useReducer(todosReducer, []);
  const [hydrated, setHydrated] = useState(false);

  // init from localStorage once
  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY);
    const initialTodos = raw ? safeParseTodos(raw) : [];
    dispatch({ type: ACTIONS.INIT, payload: initialTodos });
    setHydrated(true);
  }, []);

  // persist whenever todos change (only after init)
  useEffect(() => {
    if (!hydrated) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }, [todos, hydrated]);

  const api = useMemo(() => {
    return {
      todos,
      add(text) {
        dispatch({ type: ACTIONS.ADD, payload: { text } });
      },
      toggle(id) {
        dispatch({ type: ACTIONS.TOGGLE, payload: { id } });
      },
      remove(id) {
        dispatch({ type: ACTIONS.DELETE, payload: { id } });
      },
      edit(id, text) {
        dispatch({ type: ACTIONS.EDIT, payload: { id, text } });
      },
      clearCompleted() {
        dispatch({ type: ACTIONS.CLEAR_COMPLETED });
      },
    };
  }, [todos]);

  return api;
}

// App UI
export default function App() {
  const { todos, add, toggle, remove, edit, clearCompleted } = useTodos();

  const [inputValue, setInputValue] = useState("");

  const [editingId, setEditingId] = useState(null);
  const [editingValue, setEditingValue] = useState("");

  const [filter, setFilter] = useState("all"); // all | active | completed
  const [error, setError] = useState("");

  function showError(msg) {
    setError(msg);
    window.clearTimeout(showError._t);
    showError._t = window.setTimeout(() => setError(""), 2500);
  }

  function handleAdd() {
    const trimmed = inputValue.trim();
    if (!trimmed) return showError("Todo can not be empty.");

    add(trimmed);
    setInputValue("");
    setError("");
  }

  function handleAddKeyDown(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAdd();
    }
  }

  function startEdit(todo) {
    setEditingId(todo.id);
    setEditingValue(todo.text);
    setError("");
  }

  function cancelEdit() {
    setEditingId(null);
    setEditingValue("");
    setError("");
  }

  function saveEdit(id) {
    const trimmed = editingValue.trim();
    if (!trimmed) return showError("The content cannot be empty");

    edit(id, trimmed);
    setEditingId(null);
    setEditingValue("");
    setError("");
  }

  function handleEditKeyDown(e, id) {
    if (e.key === "Enter") {
      e.preventDefault();
      saveEdit(id);
    }
    if (e.key === "Escape") {
      e.preventDefault();
      cancelEdit();
    }
  }

  function handleDelete(id) {
    const ok = window.confirm(
      "Are you sure you want to delete this todo item?",
    );
    if (!ok) return;
    remove(id);
  }

  const remainingCount = useMemo(
    () => todos.filter((t) => !t.completed).length,
    [todos],
  );

  const visibleTodos = useMemo(() => {
    if (filter === "active") return todos.filter((t) => !t.completed);
    if (filter === "completed") return todos.filter((t) => t.completed);
    return todos;
  }, [todos, filter]);

  return (
    <div className="mx-auto mt-10 w-[min(520px,92vw)] rounded-2xl border border-neutral-200 p-5 shadow-[0_10px_24px_rgba(0,0,0,0.06)] font-sans">
      <div className="flex items-baseline justify-between">
        <h1 className="m-0 text-[42px] tracking-[0.5px]">Todo</h1>

        <div
          className="text-neutral-600"
          aria-label={`${remainingCount} items left`}
        >
          {remainingCount} item{remainingCount === 1 ? "" : "s"} left
        </div>
      </div>

      {/* Add */}
      <div className="mt-3.5 flex gap-2.5">
        <input
          className="flex-1 rounded-xl border border-neutral-300 px-3.5 py-3 text-base outline-none focus-visible:ring-2 focus-visible:ring-neutral-400"
          value={inputValue}
          placeholder="Add a task..."
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleAddKeyDown}
          aria-label="New todo input"
          aria-describedby="todo-error"
        />

        <button
          type="button"
          className="rounded-xl border border-neutral-300 bg-white px-4 py-3 text-base hover:bg-neutral-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400"
          onClick={handleAdd}
          aria-label="Add todo"
        >
          Add
        </button>
      </div>

      {/* Error */}
      <div
        id="todo-error"
        className="mt-2.5 min-h-5 text-[#b00020]"
        role="status"
        aria-live="polite"
      >
        {error}
      </div>

      {/* List */}
      <div
        className="mt-3 border-t border-neutral-200"
        role="list"
        aria-label="Todo list"
      >
        {visibleTodos.map((todo) => {
          const isEditing = editingId === todo.id;
          const checkboxId = `todo-check-${todo.id}`;
          const labelId = `todo-label-${todo.id}`;

          return (
            <div
              key={todo.id}
              className="grid grid-cols-[34px_1fr_auto] items-center gap-2.5 border-b border-neutral-200 py-3"
              role="listitem"
            >
              <input
                id={checkboxId}
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggle(todo.id)}
                className="h-4 w-4 cursor-pointer accent-neutral-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400"
                aria-label={`Toggle completion for: ${todo.text}`}
                aria-labelledby={labelId}
              />

              {!isEditing ? (
                <div
                  id={labelId}
                  className={[
                    "text-lg",
                    todo.completed ? "line-through opacity-55" : "",
                  ].join(" ")}
                  tabIndex={0}
                  role="textbox"
                  aria-readonly="true"
                  aria-label={`Todo item: ${todo.text}`}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") startEdit(todo);
                  }}
                >
                  {todo.text}
                </div>
              ) : (
                <input
                  className="flex-1 rounded-xl border border-neutral-300 px-3.5 py-3 text-base outline-none focus-visible:ring-2 focus-visible:ring-neutral-400"
                  value={editingValue}
                  onChange={(e) => setEditingValue(e.target.value)}
                  onKeyDown={(e) => handleEditKeyDown(e, todo.id)}
                  autoFocus
                  aria-label={`Edit todo: ${todo.text}`}
                  aria-describedby="todo-error"
                />
              )}

              <div className="flex gap-2.5">
                {!isEditing ? (
                  <>
                    <button
                      type="button"
                      className="bg-transparent text-neutral-700 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 rounded-md px-1"
                      onClick={() => startEdit(todo)}
                      aria-label={`Edit todo: ${todo.text}`}
                    >
                      Edit
                    </button>

                    <button
                      type="button"
                      className="bg-transparent text-neutral-700 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 rounded-md px-1"
                      onClick={() => handleDelete(todo.id)}
                      aria-label={`Delete todo: ${todo.text}`}
                    >
                      Delete
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      type="button"
                      className="rounded-xl border border-neutral-300 bg-white px-4 py-3 text-base hover:bg-neutral-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400"
                      onClick={() => saveEdit(todo.id)}
                      aria-label="Save edit"
                    >
                      Save
                    </button>

                    <button
                      type="button"
                      className="rounded-xl border border-neutral-300 bg-white px-4 py-3 text-base hover:bg-neutral-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400"
                      onClick={cancelEdit}
                      aria-label="Cancel edit"
                    >
                      Cancel
                    </button>
                  </>
                )}
              </div>
            </div>
          );
        })}

        {visibleTodos.length === 0 && (
          <div
            className="py-3.5 text-neutral-600"
            aria-label="No todos message"
          >
            No todos.
          </div>
        )}
      </div>

      {/* Filters */}
      <div
        className="mt-3.5 flex flex-wrap gap-2.5"
        role="toolbar"
        aria-label="Todo filters"
      >
        <button
          type="button"
          className={[
            "rounded-full border border-neutral-300 px-3 py-2 hover:bg-neutral-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400",
            filter === "all" ? "bg-neutral-100" : "bg-white",
          ].join(" ")}
          onClick={() => setFilter("all")}
          aria-label="Show all todos"
          aria-pressed={filter === "all"}
        >
          All
        </button>

        <button
          type="button"
          className={[
            "rounded-full border border-neutral-300 px-3 py-2 hover:bg-neutral-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400",
            filter === "active" ? "bg-neutral-100" : "bg-white",
          ].join(" ")}
          onClick={() => setFilter("active")}
          aria-label="Show active todos"
          aria-pressed={filter === "active"}
        >
          Active
        </button>

        <button
          type="button"
          className={[
            "rounded-full border border-neutral-300 px-3 py-2 hover:bg-neutral-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400",
            filter === "completed" ? "bg-neutral-100" : "bg-white",
          ].join(" ")}
          onClick={() => setFilter("completed")}
          aria-label="Show completed todos"
          aria-pressed={filter === "completed"}
        >
          Completed
        </button>

        <button
          type="button"
          className="rounded-full border border-neutral-300 bg-white px-3 py-2 hover:bg-neutral-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400"
          onClick={clearCompleted}
          aria-label="Clear completed todos"
        >
          Clear completed
        </button>
      </div>
    </div>
  );
}
