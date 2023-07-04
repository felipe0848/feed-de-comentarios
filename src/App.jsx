import { useState } from 'react'
import './App.css'

function App() {
  const [ comments, setComments ] = useState(()=>{
    const storedComment = localStorage.getItem('comments-lib')
    if (!storedComment) return []
    return JSON.parse(storedComment)
       
  })
  const [ userEmail, setUserEmail ] = useState('')
  const [ userComment, setUserComment ] = useState('')

  const addComment = ({userEmail, userComment})=>{
    const id = Math.floor(Math.random()*1000000)
    const creatAt = `Em ${new Date().toLocaleDateString('pt-BR')}, ${new Date().toLocaleTimeString('pt-BR')}`
    const newComment = {id, userEmail, userComment, creatAt}

    setComments((comments)=>{
      const commentsArray = [...comments, newComment]
      localStorage.setItem('comments-lib', JSON.stringify(commentsArray))
      return commentsArray
    })
  }

  const handleSubmit = (ev)=>{
    ev.preventDefault()
    addComment({userEmail, userComment})
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
      
        {comments.map((comment)=>(
           <div key={comment.id}>
              <h3>{comment.userEmail}</h3>
              <p>{comment.creatAt}</p>
              <p>{comment.userComment}</p>
            
            </div>
        ))}

      </div>
    </div>
  )
}

export default App
