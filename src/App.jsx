import useCommentCollection from './hooks/useCommentCollection'
import FormComment from './Components/FormComment'
import Comments from './Components/Comments'
import './App.css'



function App() {

  const {comments, addComment} = useCommentCollection()

  return (
    <div className='app'>

     <FormComment addComment={addComment}/>

      <hr />

      <Comments comments={comments}/>
      
    </div>
  )
}

export default App
