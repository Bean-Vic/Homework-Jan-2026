//To do list jsx
import "./todoList.css";
import {useState} from "react";

export default function TodoList () {
    //initial useEffect
    const [inputValue, setInputValue] = useState("");
    const [todos, setTodos] = useState([]);
    const [errorMsg, setErrorMsg] = useState("");

    //Add input into to do list, assign each input item with stable key
    //handle input error by trimming the whitespace, use toast to show input error
    function handleAdd () {
        //handle input error
        const text = inputValue.trim() //reduce typing error
        if (!text) {
            setErrorMsg("No valid input. Please enter your task.");
            //toast disappear after 3s
            window.setTimeout(() => {
                setErrorMsg("");
            },3000);
            return;
        }

        //add trimmed input to the to do list
        const addTodo ={
            id: crypto.randomUUID(),
            text: text,
            completed:false,
            isEditing:false,
        }

        setTodos([addTodo, ...todos]);
        setInputValue("");
    }

    // allow adding input to the list when pressing enter key
    function handleKeyDown (e) {
        if (e.key === "Enter") {
            handleAdd()
        }
    }

    //after clicked check box, set the to do item as completed，use map to generate a new array for react
    function toggleTodoCompleted(id) {
        setTodos(
            todos.map(
                (item) => item.id === id ? { ...item, completed: !item.completed} : item
            ))
    }

    //clicked Delete btn, remove the to do item from the list
    //use filter to create new array and filter out the item with matched id
    function handleDelete (id) {
        setTodos(todos.filter((item) => item.id !== id));
    }

    //click edit btn to enter edit mode
    function startEditing (id) {
        setTodos(
            todos.map(
                (item) => item.id === id ? { ...item, isEditing:true} : item
            ))
    }

    //press enter to finish the edit, esc edit mode by switching isEditing back to false
    function finishEditing (id) {
        setTodos(
            todos.map(
                (item) => item.id === id ? {...item, isEditing: false} : item
            )
        )
    }

    //render
    return (
        <section className="hw7-todoCard">
            <h2 className="hw7-todoTitle">To do List</h2>

            {/*toast - error msg*/}
            {errorMsg && (
                <div className="hw7-todoToast" role="alert">
                    {errorMsg}
                </div>
            )}


            <div className="hw7-todoInputContainer">
                <input className="hw7-todoInput"
                       type="text"
                       placeholder="Add a task..."
                       value={inputValue}
                       onChange={(e) => {
                                            setInputValue(e.target.value);
                                            setErrorMsg(""); //clear the error msg when start typing
                                        }}
                       onKeyDown={handleKeyDown}
                />
                <button className="hw7-todoBtn" onClick={handleAdd}>
                    Add
                </button>
            </div>

            <div className="hw7-todoListContainer">
                <ul>
                    {todos.map((item) => (
                        <li key={item.id} className="hw7-todoItem">
                            {/* checkbox for each item, line-crossed after click checked when task completed */}
                            <label className="hw7-todoName">
                                <input
                                    type="checkbox"
                                    checked={item.completed}
                                    onChange={() => toggleTodoCompleted(item.id)}
                                />

                                {/* If isEditing is true, enter edit mode, show input. press enter to esc edit mode */}
                                {/* If isEditing is false, only show  span part */}
                                {item.isEditing ? (
                                    <input className="hw7-todoEditInput"
                                           type="text"
                                           value={item.text}
                                           onChange = {
                                               (e) => {
                                                   const newText = e.target.value;
                                                   setTodos(
                                                       todos.map((t) => t.id === item.id ? {...t, text:newText} : t)
                                                   )
                                               }
                                           }
                                           onKeyDown={
                                               (e) => {
                                                   if (e.key === "Enter") {
                                                       finishEditing(item.id);
                                                   }
                                               }
                                           }
                                    />

                                ) : (
                                    <span className={`hw7-todoText ${item.completed ? "is-completed" : ""}`}>{item.text}</span>
                                )}
                            </label>
                            {/* update the to do item - edit or delete */}
                            <div className="hw7-todoUpdate">
                                <button className="hw7-todoUpdateBtn"
                                        onClick={() => startEditing(item.id)}
                                >Edit</button>
                                <button
                                    className="hw7-todoUpdateBtn"
                                    onClick={() => handleDelete(item.id)}
                                >Delete</button>
                            </div>

                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}