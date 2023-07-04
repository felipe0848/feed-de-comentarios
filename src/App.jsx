import FormComment from './Components/FormComment'
import { useState } from 'react'
import './App.css'
import Comments from './Components/Comments'



function App() {
  const [ comments, setComments ] = useState(()=>{
    const storedComment = localStorage.getItem('comments-lib')
    if (!storedComment) return []
    return JSON.parse(storedComment)
       
  })

  const addComment = ({userEmail, userComment})=>{
    const id = Math.floor(Math.random()*1000000)
    const creatAt = `Em ${new Date().toLocaleDateString('pt-BR')}, ${new Date().toLocaleTimeString('pt-BR')}`
    const newComment = {id, userEmail, userComment, creatAt}

    setComments((comments)=>{
      const commentsArray = [newComment, ...comments]
      localStorage.setItem('comments-lib', JSON.stringify(commentsArray))
      return commentsArray
    })
  }


  return (
    <div className='app'>

     <FormComment addComment={addComment}/>

      <hr />

      <Comments comments={comments}/>
      
    </div>
  )
}

export default App
