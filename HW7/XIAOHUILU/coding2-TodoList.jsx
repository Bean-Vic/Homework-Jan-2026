import React , {useState,useEffect} from "react";

export default function TodoList() {
    const [inputValue, setInputValue] = useState("");
    const [todos, setTodos] = useState([]);
    const [editingId, setEditingId] = useState(null);
    const [editingValue, setEditingValue] = useState("");
    const [filter,setFilter] = useState("all");
    const [error, setError] = useState("");

    const addTodo = () => {
        const trimmed = inputValue.trim();
        if (!trimmed) {
            setError("Todo cannot be empty.");
            return;
        }
        setError("");
        const newTodo = {
            id: crypto.randomUUID(),
            text: trimmed,
            completed: false,
        };
        //add new todo at the top of the list
        setTodos((prve) => [newTodo, ...prve]);
        // clean the input value
        setInputValue("");  
    }

    //edit function and logic
    const startEdit = (todo) => {
        setError("");
        setEditingId(todo.id);
        setEditingValue(todo.text);
    };
    const cancelEdit = () => {
        setError("");
        setEditingId(null);
        setEditingValue("");
    };

    const saveEdit = (id) => {
        const trimmed = editingValue.trim();
        if (!trimmed) {
            setError("Todo cannot be empty.");
            return;
        }
        setTodos((prev) => prev.map(
            (t) => (t.id === id ? {...t, text: trimmed} : t))
        );
        setError("");
        setEditingId(null);
        setEditingValue("");    
    };
        
    //delete to do
    const deleteTodo = (id) => {
        setTodos((prev) => prev.filter((t) => t.id !== id))
    }
    //toggle to do
    const toggleTodo = (id) => {
        setTodos(prev => prev.map(
            (t) => 
                t.id === id ? {...t, completed: !t.completed} : t
        ))
    }

    //filter tool
    const filteredTodos = todos.filter((t) => {
        if(filter === "active") return !t.completed;
        if(filter === "completed") return t.completed;
        return true;
    })
    const clearCompleted = () => {
        setTodos((prev) => prev.filter((t) => !t.completed));
    };
    const remainingCount = todos.filter((t) => !t.completed).length;

    return (
  <div className="min-h-screen bg-slate-50 flex items-start justify-center p-6">
    <div className="w-full max-w-2xl">
      {/* Header */}
      <div className="flex items-end justify-between mb-6">
        <h1 className="text-5xl font-semibold tracking-tight text-slate-900">
          Todo
        </h1>
        <p className="text-xl text-slate-500">
          {remainingCount} item{remainingCount !== 1 ? "s" : ""} left
        </p>
      </div>

      {/* Card */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        {/* Input row */}
        <div className="p-4 border-b border-slate-200">
          <div className="flex gap-3">
            <input
              className="flex-1 h-12 px-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-300"
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") addTodo();
              }}
              placeholder="Add a task..."
            />
            <button
              className="h-12 px-6 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 active:bg-slate-100 font-medium"
              type="button"
              onClick={addTodo}
            >
              Add
            </button>
          </div>

          {/* Error */}
          {error && (
            <p className="mt-3 text-sm text-red-600">
              {error}
            </p>
          )}
        </div>

        {/* List */}
        <ul className="divide-y divide-slate-200">
          {filteredTodos.map((todo) => (
            <li key={todo.id} className="flex items-center gap-4 p-4">
              {/* Checkbox */}
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
                className="h-6 w-6 rounded-md border-slate-300"
              />

              {/* Text / Edit input */}
              <div className="flex-1">
                {editingId === todo.id ? (
                  <input
                    className="w-full h-10 px-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-300"
                    type="text"
                    value={editingValue}
                    onChange={(e) => setEditingValue(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") saveEdit(todo.id);
                      if (e.key === "Escape") cancelEdit();
                    }}
                    autoFocus
                  />
                ) : (
                  <span
                    className={`text-xl ${
                      todo.completed
                        ? "line-through text-slate-400"
                        : "text-slate-900"
                    }`}
                  >
                    {todo.text}
                  </span>
                )}
              </div>

              {/* Actions */}
              <div className="flex items-center gap-3">
                {editingId === todo.id ? (
                  <>
                    <button
                      className="text-slate-500 hover:text-slate-900"
                      onClick={() => saveEdit(todo.id)}
                    >
                      Save
                    </button>
                    <button
                      className="text-slate-500 hover:text-slate-900"
                      onClick={cancelEdit}
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <button
                    className="text-slate-500 hover:text-slate-900"
                    onClick={() => startEdit(todo)}
                  >
                    Edit
                  </button>
                )}

                <button
                  className="text-slate-500 hover:text-slate-900"
                  onClick={() => deleteTodo(todo.id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}

          {filteredTodos.length === 0 && (
            <li className="p-6 text-slate-500 text-center">
              No todos here.
            </li>
          )}
        </ul>

        {/* Footer */}
        <div className="flex items-center justify-between p-4">
          {/* Filters */}
          <div className="flex items-center gap-2">
            {["all", "active", "completed"].map((key) => {
              const label =
                key === "all" ? "All" : key === "active" ? "Active" : "Completed";
              const isActive = filter === key;
              return (
                <button
                  key={key}
                  onClick={() => setFilter(key)}
                  className={`px-4 py-2 rounded-xl border ${
                    isActive
                      ? "border-slate-300 bg-white text-slate-900 shadow-sm"
                      : "border-transparent text-slate-500 hover:text-slate-900"
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>

          {/* Clear completed */}
          <button
            onClick={clearCompleted}
            className="px-4 py-2 rounded-xl text-slate-500 hover:text-slate-900"
          >
            Clear completed
          </button>
        </div>
      </div>
    </div>
  </div>
);

}