import Todo from "./Todo";

export default function ToDosList({todos,toggleToDoStatus,}){
    return(
    <table className="table">
        <thead>
          <tr>
            <th className="table-header-task">Task</th>
            <th className="table-header-status">Status</th>
            <th className="table-header-action">Action</th>
          </tr>
        </thead>
        <tbody>

          {/* <!-- Todo item --> */}
          {todos.map((todo) => 
            <Todo key={todo.id} {...todo} toggleToDoStatus={toggleToDoStatus}/>)
          }
          
        </tbody>
      </table>
    );
};