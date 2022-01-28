import Form from "./components/task_form";
import List from "./components/task_list";
import useFetch from "./hooks/useFetch";

function App() {
  const {lists, error} = useFetch('http://localhost:8000/tasks')
  console.log(lists)
  return (
    <section className="vh-100" style={{ backgroundColor: "#eee" }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-lg-9 col-xl-7">
            <div className="card rounded-3">
              <div className="card-body p-4">
                <h4 className="text-center my-3 pb-3">To Do App</h4>
                {!error && <Form></Form>}
                {!error && lists && <List lists={lists} error={error}></List>}
                {error && <h3 style={{color:"red"}}>Ma'lumotlarni yuklashda xatolik yuz berdi!</h3>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default App;
