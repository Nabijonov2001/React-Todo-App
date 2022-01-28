const List = ({lists}) => {
    async function handleDelete(id){
        await fetch('http://localhost:8000/tasks/'+id,{
            method:'delete'
        })
        window.location.reload('/')

    }
    async function handleUpdate(id, sts, name){
        let data = {
            name:name,
            status:!sts,
            id:id
        }
        await fetch('http://localhost:8000/tasks/'+id,{
            method:"put",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(data)
        })
        window.location.reload('/')
    }
    return (
        <table className="table mb-4">
              <thead>
                <tr>
                  <th scope="col">No.</th>
                  <th scope="col">Todo item</th>
                  <th scope="col">Status</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody >
                {lists.map((list, index)=>(
                    <tr key={list.id}>
                        <th scope="row">{index+1}</th>
                        {(list.status === true)?
                            <>
                                <td>{list.name}</td>
                                <td>In progress</td>
                                <td>
                                <button onClick={()=>handleDelete(list.id)} type="submit" className="btn btn-danger">Delete</button>
                                <button onClick={()=>handleUpdate(list.id, list.status, list.name)} type="submit" className="btn btn-success ms-1">Finished</button>
                                </td>
                            </>:
                            <>
                                <td><strike>{list.name}</strike></td>
                                <td>Finished</td>
                                <td>
                                <button onClick={()=>handleDelete(list.id)} type="submit" className="btn btn-danger">Delete</button>
                                <button onClick={()=>handleUpdate(list.id, list.status, list.name)} type="submit" className="btn btn-warning ms-1">Restart</button>
                                </td>
                            </>
                            
                        }
                        
                    </tr>
                ))}
              </tbody>
        </table>
    );
}
 
export default List;