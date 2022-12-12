import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export default function CreateTask() {

    useEffect(() => {
    fetch("http://localhost:3000/projects")
    .then((results) => results.json())
    .then((data) => {setprojectData(data)})
    },[])

    const [projectData, setprojectData] =useState('')
    const [projectId, setProjectId] = useState('')
    const [titel, setTitel] = useState('')
    const [descri, setDescri] = useState('')
 
    console.log(projectId)
    
    function handleSubmit(e) {
        e.preventDefault();
        const input = {
            projectId: projectId,
            titel: titel,
            description: descri,
        }

        fetch("http://localhost:3000/tasks", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(input)
        })

    }

  return (
    <div>
        <form onSubmit={handleSubmit}
        className='createForm'>
            <h3>Skapa ett task</h3>
            <select required
            onChange={(e) => setProjectId(parseInt(e.target.value))}
            >
            <option selected value="">Välj projekt</option>
            {projectData && projectData.map((project) => 
            <option key={project.id} 
            value={project.id}>
            {project.name} id: {project.id}
            </option>
            )}</select>
            
            <input 
            type="text"
            required
            value={titel}
            onChange={(e) => setTitel(e.target.value)}
            placeholder='Task Titel'/>
            <textarea
            required
            value={descri}
            onChange={(e) => setDescri(e.target.value)}
            rows="5"></textarea>
            
            <button>Spara</button>
        </form>
    </div>
  )

  }