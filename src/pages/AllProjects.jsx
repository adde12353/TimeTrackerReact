import { useEffect } from "react"
import { useState } from "react"

export default function AllTasks() {
    const [dataN, setData] = useState()
    
    useEffect(() => {
    fetch("http://localhost:3000/projects")
    .then((results) => results.json())
    .then((data) => {
    setData(data)
    })
    },[])

    const deleteProject = (id) => {
    fetch(`http://localhost:3000/projects/${id}`, {
    method: 'DELETE'
    }).then(setData(dataN.filter(projekt => projekt.id !== id)))
    }

    
  return (
    <div>
            {dataN && dataN.map((project) => 
                (
                    <div className="cardTask" key={project.id}>
                        <p>{project.name}</p>
                        <button onClick={() => {deleteProject(project.id)}}>Delete task</button>
                        <p>Antal tasks: {project.totalTasks}</p>
                    </div>
                )                        
            )}
    </div>
  )
}
