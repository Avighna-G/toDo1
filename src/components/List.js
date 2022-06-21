import {FaTrashAlt,FaCheck} from 'react-icons/fa';
import { useState,useRef } from 'react';
import '../App.css';
function List({taskDes, deleteTask,index})
{ 
    const checkboxRef = useRef();
   let [bClick,aClick]=useState("taskrow")
   const changeClass=()=>{
        if(checkboxRef.current.checked)
        {
            aClick("taskrowaclick")
    
        }
        else{
            aClick("taskrow")
            
        }
    
   }
   
   
    return(
        <tr key={index} className={bClick} >
            <td>{index+1}</td>
            <td>{taskDes.task}</td>
            <td><input type="checkbox" ref={checkboxRef} onChange={changeClass}></input></td>
            <td><button className='btndel' onClick={()=>(deleteTask(index))}><FaTrashAlt/></button></td>
        </tr>
    );
    
}
export default List;