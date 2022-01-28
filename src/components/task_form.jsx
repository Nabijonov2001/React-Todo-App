import { useState } from "react";

const Form = () => {
  const [task, setTask] = useState('')
  const handleSubmit=(e)=>{
    // e.preventDefault()
    const new_task = {name:task, status:true}
    fetch('http://localhost:8000/tasks/',{
      method:'post',
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(new_task)
    })
    .then(()=>{
      console.log('A new task created!')
    })
  }
  return (
    <form className="row row-cols-lg-auto g-3 justify-content-center align-items-center mb-4 pb-2">
      <div className="col-12">
        <div className="form-outline">
          <input onChange={(e)=>setTask(e.target.value)} type="text" id="form1" className="form-control" placeholder="Enter a task here" />
        </div>
      </div>

      <div className="col-12">
        <button onClick={(e)=>handleSubmit(e)} className="btn btn-primary">Add Task</button>
      </div>
      
    </form>
  );
}

export default Form;