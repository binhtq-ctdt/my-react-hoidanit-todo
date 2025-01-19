import { useState } from "react"

const MyComponent = () => {
    const [newTodo, setNewTodo] = useState ("mytodo");
    const [listTodo, setListTodo] = useState ([
        {id:'todo1', value:'viecj 1'},
        {id:"todo2", value:"viec 2"}
    ]);
   
    const handleChangeInput = (event) => {
        //console.log(event.target.value);
        setNewTodo(event.target.value);
    };

    const handleAddTodo = () => {
        setListTodo([...listTodo, {id:Math.floor((Math.random()*10000)+1), value: newTodo}]);
    };

    const handleDeleteTodo = (todoID) => {
        let newFilter=listTodo.filter(item =>item.id !== todoID)
        setListTodo(newFilter)
    };

    return  (
        <div> 
            <div>To do list:</div>
            {listTodo.map(
                (todo, index)=>{
                    return (
                        <div>{index +1}. {todo.value}  
                            <button onClick={()=>handleDeleteTodo(todo.id)}>Delete</button>
                        </div>
                    )
                }
            )}
            <br/>
            
            <div>my To do = {newTodo}</div>
            <input type={'text'} onChange={(event) => handleChangeInput(event)}></input>
            <button onClick={()=>handleAddTodo()}>Add to do</button>
        </div>
    );
};

export default MyComponent;