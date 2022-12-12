import React from 'react'
import { useState } from 'react'

export default function CreateTask() {
    const [titel, setTitel] = useState('')
    
    
    function handleSubmit(e) {
        e.preventDefault();
        const input = {
        name: titel,
        }

        fetch("http://localhost:3000/projects", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(input)
        })

    }

  return (
    <div>
        <form onSubmit={handleSubmit}
        className='createForm'>
            <h3>Skapa ett projekt</h3>
           
            <input 
            type="text"
            required
            value={titel}
            onChange={(e) => setTitel(e.target.value)}
            placeholder='Projekt namn'/>
            
            <button>Spara</button>
        </form>
    </div>
  )

  }