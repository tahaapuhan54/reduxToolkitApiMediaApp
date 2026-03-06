import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../redux/todoSlice"; 

const Todos = () => {
  const todos = useSelector((state) => state.todo.todos); 

  const dispatch = useDispatch();

  return (
    <div className="mt-6">
      {todos.map((todo) => (
        <div key={todo.id} className="flex items-center justify-between p-3 border-b">
          <div className="flex items-center gap-3 bg-slate-600 w-full p-2 rounded text-white">
         {todo.text}
     
          </div>
          <button 
            onClick={() => dispatch(removeTodo(todo.id))}
            className="bg-red-500 text-white px-3 py-1 rounded text-sm"
          >
            Sil
          </button>
        </div>
      ))}
    </div>
  );
};

export default Todos;