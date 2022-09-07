import TodoComponent from "./TodoComponent";

function TodoList({ localtodosList, setlocaltodolist }) {
    return (
        <div className="rounded-lg flex flex-col items-center justify-items-center bg-white w-96 h-1/2 mt-8 overflow-auto border-2 border-zinc-900">
            {
                localtodosList.map((item, index) =>{
                    return(<TodoComponent text={item[0]} key={index} todolist={localtodosList} settodolist={setlocaltodolist} />)
                })
            } 
        </div>
    );
}

export default TodoList;