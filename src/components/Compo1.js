import '../App.css';
import {useForm} from 'react-hook-form';
import { useState } from 'react';
import List from './List';
function Compo1()
{   
    let [initList,upList]=useState([])
    const{register, handleSubmit,formState:{errors}}=useForm()
    const onFormSubmit=(taskObj)=>{
        upList([...initList,taskObj])
    }
    const deleteTask = (index)=>{
        const rows = [...initList];
        rows.splice(index, 1);
        upList(rows);
   }
   const delAll=()=>{
    const all=[]
    upList(all)
   }
   
    return(
        <div className="mt-5">
            
                <form id="addtaskbody" className="w-50 mx-auto shadow-3 p-2 rounded" onSubmit={handleSubmit(onFormSubmit)}>
                    <div className="row">
                        <div className="col-10">
                            <input type="text" id="task" className="form-control" {...register("task",{required:true})} placeholder="Enter Your Task..."></input>
                            {
                                errors.task?.type=='required' && <div className='m-2'><p className='text-danger m-1 '>*empty task cannot be added!</p></div>
                            }
                        </div>
                        <div className="col-2">
                            <button type="submit" className="btn" id="sbt">submit</button>
                        </div>
                    </div>
                </form>
            
            <div>
            {initList.length==0 && <h2 className='mx-auto text-center p-3 text-light'> No Pending Tasks! </h2>}
            {initList.length!==0 &&
            <div className='text-center'>
                <table className='mx-auto text-center mt-3 w-50 shadow-3 rounded' id="tsktable">
                    <thead className='th'>
                        <tr>
                            <th>serial</th>
                            <th>task</th>
                            <th>done</th>
                            <th>delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            initList.map((taskDes,index)=> <List taskDes={taskDes} deleteTask={deleteTask} index={index}/>)
                        }               
                    </tbody>
                </table>
                <div className='mx-auto m-3'><button className='btn btn-danger shadow' onClick={delAll}> delete all</button></div>
                
                </div>
            }
        </div>
            
        </div>
        
    );
}
export default Compo1;