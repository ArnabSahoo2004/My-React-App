import React from 'react'

export const TodoItem = ({todo, onDelete, onEdit}) => {
    return (
        <>
        <div>
           <h4>{todo.title}</h4>
           <p>{todo.desc}</p>
           <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}> <img src="https://img.icons8.com/?size=100&id=67884&format=png&color=ffffff" alt="Delete" width="30" height="30" /></button> 
           <button className="btn btn-sm btn-warning mx-2" onClick={() => { onEdit(todo) }}><img src="https://img.icons8.com/?size=100&id=8192&format=png&color=ffffff" alt="Delete" width="30" height="30" /></button>
        </div>
        <hr/> 
        </>
    )
}
