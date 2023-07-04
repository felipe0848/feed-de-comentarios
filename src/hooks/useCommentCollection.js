import { useState } from 'react'
export default function useCommentCollection(){
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
    
    return({comments, addComment})
    }