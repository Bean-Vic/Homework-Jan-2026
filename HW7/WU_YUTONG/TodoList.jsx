import React, { useState } from "react";
export function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState("");

  const [error, setError] = useState("");
  //添加
  function addTodo() {
    const newTodo = {
      id: crypto.randomUUID(),
      text: inputValue,
      completed: false,
    };

    setTodos([newTodo, ...todos]);
    setInputValue("");
    setError("");
  }

  //删除
  function deleteTodo(id) {
    const newTodos = [];

    todos.forEach((todo) => {
      if (todo.id !== id) {
        newTodos.push(todo);
      }
    });

    setTodos(newTodos);

    if (editingId === id) {
      setEditingId(null);
      setEditingText("");
    }
  }

  function toggleTodo(id) {
    const newTodos = [];

    todos.forEach((todo) => {
      if (todo.id === id) {
        newTodos.push({ ...todo, completed: !todo.completed });
      } else {
        newTodos.push(todo);
      }
    });

    setTodos(newTodos);
  }
  //edit
  function startEdit(todo) {
    setEditingId(todo.id);
    setEditingText(todo.text);
  }

  //esc
  function cancelEdit() {
    setEditingId(null);
    setEditingText("");
  }

  //save
  function saveEdit(id) {
    if (!editingText) {
      setError("Todo cannot be empty.");
      return;
    }

    const newTodos = [];

    todos.forEach((todo) => {
      if (todo.id === id) {
        newTodos.push({ ...todo, text: editingText });
      } else {
        newTodos.push(todo);
      }
    });

    setTodos(newTodos);

    setEditingId(null);
  }

  function renderRow() {
    return (
      <div>
        <input
          value={inputValue}
          placeholder="Add a task..."
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={addTodo}>Add</button>
      </div>
    );
  }

  function renderButtons(todo) {
    if (editingId === todo.id) {
      return (
        <>
          <button onClick={() => saveEdit(todo.id)}>
            Save
          </button>
          <button onClick={cancelEdit}>Cancel</button>
        </>
      );
    }

    return (
      <>
        <button onClick={() => startEdit(todo)}>Edit</button>
        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
      </>
    );
  }

  const todoItems = [];

  todos.forEach((todo) => {
    let textPart; 

    if (editingId === todo.id) {
      textPart = (
        <input
          value={editingText}
          onChange={(e) => setEditingText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              saveEdit(todo.id);
            }
            if (e.key === "Escape") {
              cancelEdit();
            }
          }}
        />
      );
    }
   
    else if (todo.completed) {
      textPart = <del>{todo.text}</del>;
    }
   
    else {
      textPart = <span>{todo.text}</span>;
    }

    todoItems.push(
      <div
        key={todo.id}
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >

        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
        />

        <div>{textPart}</div>

        {renderButtons(todo)}
      </div>,
    );
  });

  function renderError() {
    if (error === "") {
      return null;
    }

    return <div>{error}</div>;
  }

  return (
    <div
      style={{
        maxWidth: 500,
        margin: "100px auto",
      }}
    >
      <h2>Todo</h2>

      {renderRow()}

      {renderError()}

      <div>{todoItems}</div>
    </div>
  );
}
  