function Todo({todo, index, remove}){
    function handle(){
        remove(index);
    }
    return <div className="todo" onClick={handle}>
        {index+1}.) {todo.text} (-)
        </div>
}