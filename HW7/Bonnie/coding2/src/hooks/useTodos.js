import { useMemo, useReducer } from "react";

function normalizeText(text) {
  return text.trim().replace(/\s+/g, " ");
}

function isValidText(text) {
  return normalizeText(text).length > 0;
}

export function todosReducer(state, action) {
  switch (action.type) {
    case "ADD": {
      const text = normalizeText(action.text);
      const now = Date.now();
      const todo = {
        id: crypto.randomUUID(),
        text,
        completed: false,
        updatedAt: now,
      };
      return [todo, ...state];
    }
    case "DELETE":
      return state.filter((t) => t.id !== action.id);

    case "TOGGLE":
      return state.map((t) =>
        t.id === action.id
          ? { ...t, completed: !t.completed, updatedAt: Date.now() }
          : t
      );

    case "EDIT": {
      const text = normalizeText(action.text);
      return state.map((t) =>
        t.id === action.id ? { ...t, text, updatedAt: Date.now() } : t
      );
    }

    case "SET_ALL":
      return Array.isArray(action.todos) ? action.todos : state;

    case "CLEAR_COMPLETED":
      return state.filter((t) => !t.completed);

    default:
      return state;
  }
}

export function useTodos(initialTodos = []) {
  const [todos, dispatch] = useReducer(todosReducer, initialTodos);

  const api = useMemo(() => {
    return {
      todos,
      add(text) {
        if (!isValidText(text)) {
          return { ok: false, error: "Todo cannot be empty." };
        }
        dispatch({ type: "ADD", text });
        return { ok: true };
      },
      remove(id) {
        dispatch({ type: "DELETE", id });
      },
      toggle(id) {
        dispatch({ type: "TOGGLE", id });
      },
      edit(id, text) {
        if (!isValidText(text)) {
          return { ok: false, error: "Todo cannot be empty." };
        }
        dispatch({ type: "EDIT", id, text });
        return { ok: true };
      },
      setAll(todosArr) {
        dispatch({ type: "SET_ALL", todos: todosArr });
      },
      clearCompleted() {
        dispatch({ type: "CLEAR_COMPLETED" });
      },
    };
  }, [todos]);

  return api;
}
