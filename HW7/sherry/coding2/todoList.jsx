import { useState } from "react";
export function TodoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState("");
  const [filter, setFilter] = useState("all");
  // add
  const addTodo = () => {
    const text = input.trim();

    if (!text) {
      setError("Todo cannot be empty");
      return;
    }

    const newTodo = {
      id: crypto.randomUUID(),
      text,
      completed: false,
      updatedAt: Date.now(),
    };

    setTodos([newTodo, ...todos]);
    setInput("");
    setError("");
  };
  // delete
  const deleteTodo = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
  };
  // toggle
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed, updatedAt: Date.now() }
          : todo
      )
    );
  };
  //sabe
  const saveEdit = (id) => {
    const text = editingText.trim();
    if (!text) {
      setError("Todo cannot be empty");
      return;
    }

    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text, updatedAt: Date.now() } : todo
      )
    );
    setEditingId(null);
    setEditingText("");
    setError("");
  };

  // cancel
  const cancelEdit = () => {
    setEditingId(null);
    setEditingText("");
    setError("");
  };
  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  // Clear completed
  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };
  return (
    <div style={{ maxWidth: 400, margin: "40px auto" }}>
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
          marginBottom: 12,
        }}
      >
        <h1>Todo List</h1>
        <div>{todos.filter((t) => !t.completed).length} items left</div>
      </div>
      <input
        type="text"
        onChange={(e) => {
          setInput(e.target.value);
        }}
        onKeyDown={(e) => e.key === "Enter" && addTodo()}
        value={input}
      />
      <button onClick={() => addTodo()}>Add</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <table>
        <tbody>
          {filteredTodos.map((todo) => (
            <tr key={todo.id}>
              <td>
                <input
                  type="checkbox"
                  onChange={() => toggleTodo(todo.id)}
                  checked={todo.completed}
                />
              </td>

              <td>
                {editingId === todo.id ? (
                  <input
                    value={editingText}
                    autoFocus
                    onChange={(e) => setEditingText(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") saveEdit(todo.id);
                      if (e.key === "Escape") cancelEdit();
                    }}
                  />
                ) : (
                  <span
                    style={{
                      textDecoration: todo.completed ? "line-through" : "none",
                      opacity: todo.completed ? 0.6 : 1,
                    }}
                  >
                    {todo.text}
                  </span>
                )}
              </td>
              <td>
                {editingId !== todo.id && (
                  <button
                    onClick={() => {
                      setEditingId(todo.id);
                      setEditingText(todo.text);
                      setError("");
                    }}
                  >
                    Edit
                  </button>
                )}
              </td>
              <td>
                <button onClick={() => deleteTodo(todo.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("active")}>Active</button>
        <button onClick={() => setFilter("completed")}>Completed</button>
        <button onClick={clearCompleted}>Clear Completed</button>
      </div>
    </div>
  );
}
