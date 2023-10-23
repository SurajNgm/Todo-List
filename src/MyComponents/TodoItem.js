import React from 'react'
import './todoItem.css'
export const TodoItem = ({todo, onDelete}) => {
    return (
        <>
        <div className='additem'>
           <h4>{todo.title}</h4>
           <input type="checkbox"/>
           <p>{todo.desc}</p>
           <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}  style={{width:"100px"}}>Delete</button> 
           </div>
        <hr style={{width: "50%"}}/> 
        </>
    )
}
