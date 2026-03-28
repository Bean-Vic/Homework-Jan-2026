import React, {useEffect, useMemo, useReducer, useState } from "react";

const STORAGE_KEY = "todo-list";

function loadTodos(){
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw){
            return [];
        }
        const parsed = JSON.parse(raw);
        if (!Array.isArray(parsed)) return [];
        return parsed.filter(t => t && typeof t.id === "string" && typeof t.text === "string");
    }catch {
        return [];
    }
}

function saveTodos(todos){
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
    }catch{

    }
}

function todoReducer(state, action){
    switch (action.type){
        case "INIT":
            return action.todos;
        case "ADD":
            return [action.todo, ...state];
        case "DELETE":
            return state.filter((t) => t.id !== action.id);
        case "TOGGLE":
            return state.map((t) => 
            t.id === action.id ? {...t, completed: !t.completed, updateAt: Date.now()} : t
            ) 
        case "EDIT":
            return state.map((t) => t.id === action.id ? {...t, text: action.text, updateAt: Date.now()} : t);
        case "CLEAR_COMPLETED":
            return state.filter((t) => !t.completed);
        
        default:
            return state;
    }
}

function useTodos(){
    const[todos, dispatch] = useReducer(todoReducer, []);
    const [hydrated, setHydrated] = useState(false);

    useEffect(() => {
        dispatch({ type: "INIT", todos: loadTodos()});
        setHydrated(true);
    }, []);

    useEffect(() => {
        if (!hydrated) return; 
        saveTodos(todos);
    }, [todos, hydrated]);

    const api = useMemo(() => {
        return {
            add(text) {
                const todo = {
                    id: crypto.randomUUID(),
                    text,
                    completed: false,
                    updateAt: Date.now(),
                };
                dispatch({type: "ADD", todo});
            },
            del(id) {
                dispatch({type: "DELETE", id});
            },
            toggle(id) {
                dispatch({type:"TOGGLE", id});
            },
            edit(id, text){
                dispatch({type:"EDIT", id, text});
            },
            clearCompleted(){
                dispatch({type: "CLEAR_COMPLETED"});
            },
        };
    },[]);
    return {todos, ...api};
}

export default function Todo(){
    const { todos, add, del, toggle, edit, clearCompleted } = useTodos();
    
    const [inputValue, setInputValue] = useState("");
    const [error, setError] = useState("");

    const [editingId, setEditingId] = useState(null);
    const [editingValue, setEditingValue] = useState("");

    const [filter, setFilter] = useState("all");

    useEffect(() => {
    console.log("todos changed:", todos);
    }, [todos]);


    const remainingCOunt = useMemo(
        () => todos.filter((t) => t && !t.completed).length,
        [todos]
    );

    const filteredTodos = useMemo(
        () => {
            if (filter === "active") return todos.filter((t) => !t.completed);
            if (filter === "completed") return todos.filter((t) => t.completed);
            return todos;
        },[todos, filter]
    );

    function validateText(text){
        const value = text.trim();
        if (!value) return {ok: false, msg: "Todo cannot be empty."};
        return {ok:true, value: value};
    }

    function handleAdd() {
        setError("");
        const res = validateText(inputValue);
        if (!res.ok){
            setError(res.msg);
            return;
        }
        add(res.value);
        setInputValue("");
    }

    function onAddKeyDown(e){
        if (e.key === "Enter"){
            handleAdd();
        }
    }

    function startEdit(todo){
        setError("");
        setEditingId(todo.id);
        setEditingValue(todo.text);
    }

    function cancelEdit(){
        setEditingId(null);
        setEditingValue("");
    }

    function saveEdit(id){
        setError("");
        const res = validateText(editingValue);
        if (!res.ok){
            setError(res.msg);
            return;
        }
        edit(id, res.value);
        cancelEdit();
    }

    function onEditKeyDown(e, id){
        if (e.key === "Enter") saveEdit(id);
        if (e.key === "Escape") cancelEdit();
    }

    function handleDelete(id){
        setError("");
        const ok = window.confirm("Delete this todo?");
        if (!ok) return;
        del(id);
        if (editingId === id) cancelEdit();
    }

    return (
        <div className="min-h-screen bg-slate-100 p-8 flex items-start justify-center">
            <div className="w-full max-w-3xl">
                <div className="flex items-center justify-between">
                    <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
                        TODO
                    </h1>
                    <div>
                        {remainingCOunt} item{remainingCOunt === 1 ? "" : "s"} left
                    </div>
                </div>

                <div className="flex gap-4 items-center mb-6">
                    <input 
                    className="flex-1 borders border-gray-200 bg-white rounded-xl px-2 py-1
                    text-xl outline-none focus:border-gray-300"
                    placeholder="Add a task..."
                    value={inputValue}
                    onChange={ (e) => setInputValue(e.target.value)}
                    onKeyDown={onAddKeyDown}
                    />
                    <button
                    onClick={handleAdd}
                    disabled={!inputValue.trim()}
                    className="border border-gray-200 rounded-xl px-2 py-1 text-xl font-semibold
                    bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Add
                    </button>
                </div>

                {error && (
                    <div className="mb-6 text-xl text-red-700 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
                        {error}
                    </div>
                )}

                <div className="bg-white border-1 border-gray-200 rounded-xl overflow-hidden">
                    {filteredTodos.map((todo) => {
                        const isEditing = editingId === todo.id;
                        return (
                            <div key={todo.id}
                                className="flex items-center gap-4 px-4 py-3 border-t border-gray-200 first:border-t-0"
                            >
                                {isEditing ? <div></div> : 
                                
                                <input type ="checkbox" 
                                checked={todo.completed}
                                onChange={() => toggle(todo.id)}
                                className="h-5 w-5 accent-gray-900"
                                />}

                                <div className="flex-1">
                                {!isEditing ? (
                                    <div
                                    className={
                                        "text-sm font-semibold " +
                                        (todo.completed ? "line-through text-gray-400" : "text-gray-900")
                                    }
                                    >
                                    {todo.text}
                                    </div>
                                ) : (
                                    <input
                                    aria-label="Edit todo input"
                                    className="w-full border-2 border-gray-200 rounded-xl px-6 py-4 text-5xl
                                                outline-none focus:border-gray-300"
                                    value={editingValue}
                                    onChange={(e) => setEditingValue(e.target.value)}
                                    onKeyDown={(e) => onEditKeyDown(e, todo.id)}
                                    autoFocus
                                    />
                                )}
                                </div>

                                {!isEditing ? (
                                <div className="flex gap-12 text-m text-gray-500">
                                    <button
                                    aria-label="Edit todo"
                                    onClick={() => startEdit(todo)}
                                    className="hover:text-gray-700"
                                    >
                                    Edit
                                    </button>
                                    <button
                                    aria-label="Delete todo"
                                    onClick={() => handleDelete(todo.id)}
                                    className="hover:text-gray-700"
                                    >
                                    Delete
                                    </button>
                                </div>
                                ) : (
                                <div className="flex gap-12 text-m text-gray-500">
                                    <button
                                    aria-label="Save todo"
                                    onClick={() => saveEdit(todo.id)}
                                    className="hover:text-gray-700"
                                    >
                                    Save
                                    </button>
                                    <button
                                    aria-label="Delete todo"
                                    onClick={() => handleDelete(todo.id)}
                                    className="hover:text-gray-700"
                                    >
                                    Delete
                                    </button>
                                </div>
                                )}

                            </div>
                        );
                    })}

                    {filteredTodos.length === 0 && (
                        <div className="px-8 py-10 text-xl text-gray-500">
                        No todos for this filter.
                        </div>
                    )}
                    </div>


                    <div className="mt-8 flex items-center justify-between text-xl text-gray-500">
                    <div className="flex gap-16">
                        {["all", "active", "completed"].map((f) => (
                        <button
                            key={f}
                            aria-label={`Filter ${f}`}
                            onClick={() => setFilter(f)}
                            className={
                            "px-3 py-1 rounded-xl border-2 " +
                            (filter === f
                                ? "border-gray-200 bg-white text-gray-900 font-semibold"
                                : "border-transparent hover:text-gray-700")
                            }
                        >
                            {f[0].toUpperCase() + f.slice(1)}
                        </button>
                        ))}
                    </div>

                    <button
                        onClick={clearCompleted}
                        className="hover:text-gray-700"
                    >
                        Clear completed
                    </button>
                    </div>

            </div>
        </div>
    )

}
