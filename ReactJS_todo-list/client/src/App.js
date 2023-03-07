import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import Navigation from "./components/Navigation";
import ToDosList from "./components/ToDosList";

function App() {

  const[todos, setTodos] = useState([]);
  const[isLoading, setIsLoading] = useState(true);

  useEffect(() =>{
    fetch(`http://localhost:3030/jsonstore/todos`)
    .then(res => res.json())
    .then(data =>{
      const result = Object.keys(data).map(id => ({id, ...data[id]}))
      setTodos(result);
      setIsLoading(false);
    });
  }, []);

  const toggleToDoStatus = (id) =>{
    setTodos(state => state.map(t => t.id === id? ({...t, isCompleted: !t.isCompleted}) : t))
  };

  const onTodoAdd = () =>{
    const lastId = Number(todos[todos.length - 1].id);
    const text = prompt('Task name:');
    const newTask = {id: lastId + 1, text, isCompleted:false};
    setTodos(state => [newTask, ...state])
  }

  return (
  <div>
    {/* <!-- Navigation header --> */}
    <Navigation/>
  
    {/* <!-- Main content --> */}
    <main className="main">
  
      {/* <!-- Section container --> */}
      <section className="todo-list-container">
        <h1>Todo List</h1>
  
        <div className="add-btn-container">
          <button className="btn" onClick={onTodoAdd}>+ Add new Todo</button>
        </div>
  
        <div className="table-wrapper">
  
          {/* <!-- Loading spinner - show the load spinner when fetching the data from the server--> */}
          {isLoading?<Loading/>:<ToDosList todos={todos} toggleToDoStatus={toggleToDoStatus}/>}
  
          {/* <!-- Todo list table --> */}
          
        </div>
      </section>
    </main>
  
    {/* <!-- Footer --> */}
    <Footer/>
  </div>
  );
}

export default App;
