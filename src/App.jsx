import { useState } from 'react'
import './App.css'

function App() {
  const [ userEmail, setUserEmail ] = useState('')
  const [ userComment, setUserComment ] = useState('')

  

  const handleSubmit = (ev)=>{
    ev.preventDefault()
    console.log({userEmail,userComment})
    setUserEmail('')
    setUserComment('')
  }

  return (
    <div className='app'>

      <form onSubmit={(ev)=>handleSubmit(ev)}>
        <h1>Seção de Comentários</h1>

        <div className='inputs'>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={userEmail} onChange={(e)=>(setUserEmail(e.target.value))} />
        </div>

        <div className='inputs'>
          <label htmlFor="comment">Comentário:</label>
          <textarea name="comment" id="comment" cols="30" rows="10" onChange={(e)=>(setUserComment(e.target.value))} value={userComment} ></textarea>
        </div>

        <button type="submit">Enviar comentário</button>
      </form>

      <hr />

      <div>
        <p>Seja o primeiro a comentar!</p>
      </div>
    </div>
  )
}

export default App
